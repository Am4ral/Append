export type User = {
        id: number;
        name: string;
        email: string;
        roles: [{
        id: number;
        authority: string;
    }]
}

export type House = {
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

export type Reserve = {
    id: number;
    renter: number;
    house: number;
    owner: number;
    propouseValue: number;
}