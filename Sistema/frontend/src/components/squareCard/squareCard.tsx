import { FC, useState } from "react";
import './squareCard.css'
import ShowHouseInfo from "../showHouseInfo/showHouseInfo";

interface squareCardProps{
    tittle: string;
    address: {
        street: string;
        number: number;
        neighborhood: string;
        city: string;
        state: string;
    };
    price: number;
    picture: string;
}

const SquareCard: FC<squareCardProps> = ({picture, tittle, address, price}) => {
    const[showHouseInfo, setShowHouseInfo] = useState(false)

    function showForm(){
        setShowHouseInfo(!showHouseInfo)
    }

    return ( 
       <div>
            {showHouseInfo ? <ShowHouseInfo house={{tittle, address, price, picture}} edit={false} onTap={()=>{setShowHouseInfo(!showHouseInfo)}} /> : <></>}
            <div className="square-card" style={{backgroundImage: `url(${picture})`}} onClick={showForm}>

                    <p className="square-card-text">Alugar</p>
            </div>
       </div>
     )
}
 
export default SquareCard;
