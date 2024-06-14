import { useEffect, useState } from "react";
import { api } from "./API";

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
}

export function MapHouseOwner() {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || '');
    const userID = user.id;

    const [houses, setHouses] = useState<House[]>([]);
    const [userHouses, setUserHouses] = useState<House[]>([]);

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
        setUserHouses(houses.filter((house) => house.owner.id === userID))
    }, [houses]);

    return userHouses;
}
