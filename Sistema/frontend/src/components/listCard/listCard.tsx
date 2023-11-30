import { FC, useState } from "react";
import './listCard.css'
import ShowHouseInfo from "../showHouseInfo/showHouseInfo";
import editIcon from '../../assets/editIcon.svg'
import deleteIcon from '../../assets/deleteIcon.svg'
import { createPortal } from "react-dom";

interface listCardProps{
    tittle: string;
    address: {
        street: string;
        number: number;
        neighborhood: string;
        city: string;
        state: string;
    };
    picture: string;
    price: number;
}

const ListCard: FC<listCardProps> = ({picture, tittle, price, address}) => {
    const[editHouseInfo, setEditHouseInfo] = useState(false)

    function editForm(){
        setEditHouseInfo(!editHouseInfo)
    }

    return ( 
       <div>
        {createPortal(
            editHouseInfo ? <ShowHouseInfo house={{tittle, address, price, picture}} edit={true} onTap={()=>{setEditHouseInfo(!editHouseInfo)}} /> : <></>, document.body
        )}
        <div className="list-card">
            <div className="list-card-content">
                <img src={picture} alt={tittle} className="list-card-image"/>
                <div className="list-card-text">
                    <h2>{tittle} - R${price},00</h2>
                    <p>{address.street}</p>
                </div>
            </div>
            <div>
                <div className="list-card-icons">
                    <img className="list-card-icons-content" src={editIcon} alt="edit icon" onClick={editForm}/>
                    <img className="list-card-icons-content" src={deleteIcon} alt="delete icon"/>
                </div>
            </div>
       </div>
       </div>
     )
}
 
export default ListCard;
