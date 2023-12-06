import { useEffect, useState } from "react";
import { api } from "./API";

const user = localStorage.getItem("user")

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

export function MapHouse () {

    const token = localStorage.getItem("token");

    const [houses, setHouses] = useState<House[]>([]);

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
    }, [token]); // Include token in the dependency array to re-run the effect if token changes

    return houses;
}
