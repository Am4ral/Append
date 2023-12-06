import { useEffect, useState } from "react";
import { api } from "./API";

type Reserve = {
    id: number;
    renter: number;
    house: number;
};

type House = {
    owner: {
        id: number;
        email: string;
        name: string;
    };
    street: string;
    district: string;
    number: number;
    info: string;
    price: number;
    imgURL: string;
    title: string;
    city: string;
    state: string;
    id: number;
    };

export function MapHouseReserves() {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "");

    const [reserves, setReserves] = useState<Reserve[]>([]);
    const [houses, setHouses] = useState<House[]>([]);
    const [userReserves, setUserReserves] = useState<House[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [reservesResponse, housesResponse] = await Promise.all([
                    api(token).get('/reserves'),
                    api(token).get('/houses'),
                ]);

                setReserves(reservesResponse.data);
                setHouses(housesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [token]);

    useEffect(() => {
       setUserReserves( houses.filter((house) => reserves.some((reserve) => reserve.house === house.id)))
    }, [reserves, houses]);
        
    return userReserves;
}
