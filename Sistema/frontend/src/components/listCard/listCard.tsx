import { FC, useState } from "react";
import './listCard.css'
import ShowHouseInfo from "../showHouseInfo/showHouseInfo";
import editIcon from '../../assets/editIcon.svg'
import deleteIcon from '../../assets/deleteIcon.svg'
import { createPortal } from "react-dom";
import { HouseProps } from "../../interfaces/house";
import { api } from "../../services/API";
import FormButton from "../formButton/formButton";
import DeleteHouseConfirm from "../deleteHouseConfirm/deleteHouseConfirm";
import { capitalizeWords } from "../../functions/capitalizeWords";
import AddHouseForm from "../addHouseForm/addHouseForm";

interface ListCardProps{
    reserves?: boolean;
    admin?: boolean;
}

const ListCard: FC<HouseProps & ListCardProps> = ({house, reserves, admin}) => {
    const token = localStorage.getItem('token')

    async function deleteHouse(houseID: number) {
        try {
            await api(token).delete(`/houses/${houseID}`);
            showConfirmForm();
            window.open("/home", "_self");
        } catch (error) {
            alert('Não foi possível efetuar o cancelamento.')
            showConfirmForm();
        }
    }

    const[showHouseInfo, setShowHouseInfo] = useState(false)

    function showInfo(){
        setShowHouseInfo(!showHouseInfo)
    }

    const [editForm, setEditForm] = useState(false)

    function showEdit () {
        setEditForm(!editForm)
    }

    const [showConfirm, setShowConfirm] = useState(false)

    function showConfirmForm  () {
        setShowConfirm(!showConfirm)
    }

    return ( 
       <div>
        {createPortal(
            showHouseInfo ? 
            <ShowHouseInfo house={house} onClose={showInfo} reserves={reserves} admin={admin} onDelete={showConfirmForm}/> 
            : <></>, 
            document.body
        )}
        {createPortal(
            editForm ? 
            <AddHouseForm house={house} edit={editForm} onClose={showEdit}/> 
            : <></>, 
            document.body
        )}
        {createPortal(
            showConfirm ? 
           <DeleteHouseConfirm onDelete={() => deleteHouse(house.id)} showConfirm={showConfirmForm}/> 
           : <></>,
            document.body
        )}
        <div className="list-card">
            <div 
                className="list-card-content"
                onClick={reserves || admin? showInfo : ()=>{}} 
                style={reserves || admin? {cursor: 'pointer'}: {}}
            >
                <img src={house.imgURL} alt={capitalizeWords(house.title)} className="list-card-image"/>
                <div className="list-card-text">
                    <h2>{capitalizeWords(house.title)} - R${house.price},00</h2>
                    <p>{capitalizeWords(house.street)}, {house.number} - {capitalizeWords(house.district)}</p>
                </div>
            </div>
            {!reserves ? 
            <div>
                <div className="list-card-icons">
                    {!admin ? <img className="list-card-icons-content" src={editIcon} alt="edit icon" onClick={showEdit}/> : <></>}
                    <img className="list-card-icons-content" src={deleteIcon} alt="delete icon" onClick={showConfirmForm}/>
                </div>
            </div> : <></>
            }
       </div>
       </div>
     )
}
 
export default ListCard;
