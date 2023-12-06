export interface HouseProps{
    house: {
        title: string;
        street: string;
        number: number;
        price: number;
        imgURL: string;
        district: string;
        city: string;
        state: string;
        id: number;
        owner: {
            id: number;
            email: string;
            name: string;
        };
        info: string;
    }
}

export interface OptionalHouseProps{
    house?: {
        title: string;
        street: string;
        number: number;
        price: number;
        imgURL: string;
        district: string;
        city: string;
        state: string;
        id: number;
        owner: {
            id: number;
            email: string;
            name: string;
        };
        info: string;
    }
}