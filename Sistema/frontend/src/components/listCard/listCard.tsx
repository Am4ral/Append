import { FC } from "react";
import './listCard.css'

interface listCardProps{
    src: string;
    tittle: string;
    price: number;
    address: string;
}

const ListCard: FC<listCardProps> = ({src, tittle, price, address}) => {

    return ( 
       <div className="list-card">
            <div className="list-card-content">
                <img src={src} alt={tittle} className="list-card-image"/>
                <div className="list-card-text">
                    <h2>{tittle} - R${price},00</h2>
                    <p>{address}</p>
                </div>
            </div>
       </div>
     )
}
 
export default ListCard;
