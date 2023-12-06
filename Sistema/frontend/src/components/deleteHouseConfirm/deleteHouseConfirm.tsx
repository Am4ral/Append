import { FC, useState } from 'react';
import { api } from '../../services/API'
import FormButton from '../formButton/formButton'
import './deleteHouseConfirm.css'

interface DeleteHouseConfirmProps{
    showConfirm: ()=> void;
    houseID: number;
}

const DeleteHouseConfirm: FC<DeleteHouseConfirmProps> = ({showConfirm, houseID}) => {
    const token = localStorage.getItem('token')

    async function deleteHouse(houseID: number) {
        try {
            await api(token).delete(`/houses/${houseID}`);
            showConfirm();
            window.open("/home", "_self");
        } catch (error) {
            console.error(error); // Define uma mensagem de erro
        }
    }

    return(
        <div>
            <div className="delete-house-confirm-background" onClick={showConfirm}></div>
            <div className="delete-house-confirm">
                <h2>Tem certeza?</h2>
                <div className="delete-house-confirm-buttons">
                    <button className="delete-house-confirm-buttons-cancel" onClick={showConfirm}>Não<br/>excluir</button>
                    <FormButton text="Excluir" type="button" onTap={() => deleteHouse(houseID)}/>
                </div>
            </div>
        </div>
    )
}

export default DeleteHouseConfirm