import { useEffect, useState } from "react";
import { api } from "./API";
import { Reserve, House } from "../interfaces/types";

export function MapReserves() {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "");

    const [reserves, setReserves] = useState<Reserve[]>([]);
    const [houses, setHouses] = useState<House[]>([]);
    const [userReserves, setUserReserves] = useState<[House, Reserve][]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reservesResponse = await api(token).get('/reserves');
                setReserves(reservesResponse.data);
            } catch (error) {
                console.error('Error fetching reserves:', error);
            }
        };

        fetchData();
    }, [token]);

    useEffect(() => {
        const getUserReserves = async () => {
            const userReserveHouses = await Promise.all(
                reserves.map(async (reserve) => {
                    const houseResponse = await api(token).get(`/houses/${reserve.house}`);
                    const houseData: House = houseResponse.data;
                    return [houseData, reserve] as [House, Reserve];
                })
            );

            const filteredUserReserves = userReserveHouses.filter(
                ([, reserve]) => reserve.renter === user.id || reserve.owner === user.id
            );

            setUserReserves(filteredUserReserves);
        };

        getUserReserves();
    }, [reserves, user.id, token]);

    return userReserves;
}
