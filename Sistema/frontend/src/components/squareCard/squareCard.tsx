import { FC, useState } from "react";
import './squareCard.css'
import ShowHouseInfo from "../showHouseInfo/showHouseInfo";
import { HouseProps } from "../../interfaces/house";

const SquareCard: FC<HouseProps> = ({house}) => {
    const[showHouseInfo, setShowHouseInfo] = useState(false)

    function showForm(){
        setShowHouseInfo(!showHouseInfo)
    }

    console.log(house.imgURL)

    return ( 
       <div>
            {showHouseInfo ? <ShowHouseInfo house={house} onClose={showForm} /> : <></>}
            <div className="square-card" style={{backgroundImage: `url(${house.imgURL})`}} onClick={showForm}>

                    <p className="square-card-text">Alugar</p>
            </div>
       </div>
     )
}
 
export default SquareCard;
