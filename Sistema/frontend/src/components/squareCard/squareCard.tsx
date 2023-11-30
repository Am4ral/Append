import { FC, useState } from "react";
import './squareCard.css'
import ShowHouseInfo from "../showHouseInfo/showHouseInfo";

interface squareCardProps{
    name: string;
    address: string;
    price: number;
    picture: string;
}

const SquareCard: FC<squareCardProps> = ({picture, name, address, price}) => {
    const[showHouseInfo, setShowHouseInfo] = useState(false)

    function showForm(){
        setShowHouseInfo(!showHouseInfo)
    }

    return ( 
       <div>
            {showHouseInfo ? <ShowHouseInfo name={name} price={price} address={address} picture={picture} edit={false} onTap={()=>{setShowHouseInfo(!showHouseInfo)}} /> : <></>}
            <div className="square-card" style={{backgroundImage: `url(${picture})`}} onClick={showForm}>

                    <p className="square-card-text">Alugar</p>
            </div>
       </div>
     )
}
 
export default SquareCard;
