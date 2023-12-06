import { FC, useState } from 'react';
import { api } from '../../services/API'
import FormButton from '../formButton/formButton'
import './deleteHouseConfirm.css'

interface DeleteHouseConfirmProps{
    showConfirm: ()=> void;
    onDelete: ()=> void;
}

const DeleteHouseConfirm: FC<DeleteHouseConfirmProps> = ({showConfirm, onDelete}) => {
    return(
        <div>
            <div className="delete-house-confirm-background" onClick={showConfirm}></div>
            <div className="delete-house-confirm">
                <h2>Tem certeza?</h2>
                <div className="delete-house-confirm-buttons">
                    <button className="delete-house-confirm-buttons-cancel" onClick={showConfirm}>Não<br/>excluir</button>
                    <FormButton text="Excluir" type="button" onTap={onDelete}/>
                </div>
            </div>
        </div>
    )
}

export default DeleteHouseConfirm