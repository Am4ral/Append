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
    const userID = user.id;

    const [reserves, setReserves] = useState<Reserve[]>([]);
    const [houses, setHouses] = useState<House[]>([]);
    const [userReserves, setUserReserves] = useState<House[]>([]);

    useEffect(() => {
        const fetchReserves = async () => {
            try {
                const response = await api(token).get('/reserves');
                setReserves(response.data);
            } catch (error) {
                console.error('Error fetching reserves:', error);
            }
        };
        fetchReserves();
    }, [token]);

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                const response = await api(token).get('/houses');
                setHouses(response.data);
            } catch (error) {
                console.error('Error fetching houses:', error);
            }
        };
        fetchHouses();
    }, [token]);

    useEffect(() => {
       setUserReserves( houses.filter((house) => reserves.some((reserve) => reserve.house === house.id)))
    }, [reserves, houses]);
    
    return userReserves;
}
