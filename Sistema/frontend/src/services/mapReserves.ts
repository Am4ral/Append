import { useEffect, useState } from "react";
import { api } from "./API";

type Reserve = {
    id: number;
    renter: number;
    house: number;
    owner: number;
    propose_value: number;
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
            const getUserReserves = async () => {
                const filteredReserves = reserves.filter((reserve) => reserve.renter === user.id || reserve.owner === user.id);
    
                const userReserveHouses = await Promise.all(
                    filteredReserves.map(async (reserve) => {
                        const houseResponse = await api(token).get(`/houses/${reserve.house}`);
                        return houseResponse.data;
                    })
                );
    
                setUserReserves(userReserveHouses);
            };
    
            getUserReserves();
        }, [reserves, user.id, token]);
    
        return userReserves;
    }
