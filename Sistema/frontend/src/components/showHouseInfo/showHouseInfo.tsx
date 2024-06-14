import { FC, useState } from 'react';
import './showHouseInfo.css'
import FormButton from '../formButton/formButton';
import { HouseProps, HouseReserveProps } from '../../interfaces/props';
import { api } from '../../services/API';
import { Reserve } from '../../interfaces/types';

interface ShowHouseProps{
    reserves?: boolean;
    admin?: boolean;
    onClose: () => void;
    onDelete?: ()=>void;
    reserveData?: Reserve;
}

const ShowHouseInfo: FC<ShowHouseProps & HouseProps & Partial<HouseReserveProps>> = ({house, reserve, onClose, reserves, admin, onDelete, reserveData}) => {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user') || "")

    const userID = user.id
    const houseID = house.id

    const [edit, setEdit] = useState(false)
    const [propose, setPropose] = useState(reserveData?.propouseValue === 0 ? house.price : reserveData?.propouseValue)

    function changeEdit () {
        setEdit(!edit)
    }

    const [owner, setOwner] = useState(user.roles[0].id === 1 ? true : false)


    function makeReserve(){
        api(token).post(
            '/reserves',
            {
                renter: userID,
                house: houseID,
                propouseValue: propose
            }
            )
            .then((response)=>{
            alert('Reserva efetuada com sucesso!')
            window.open("/reserves", "_self");
        }
        ).catch(()=>{
            alert('Reserva já realizada.')
        })
    }

    function cancelReserve(){
        api(token).post(
            '/reserves/find', {
                house : houseID,
                renter: userID
            }
        )
        .then((response) => {
            api(token).delete(`/reserves/${response.data.id}`);
            alert('Reserva excluída com sucesso');
            window.open("/reserves", "_self")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    function reserveEdit(){
        api(token).put(
            `/reserves/${reserveData?.id}`,
            {
                propouseValue: propose
            }
            )
            .then((response) => {
                alert('Reserva editada com sucesso');
                onClose();
                setEdit(false);
                window.open("/reserves", "_self")
            })
        .catch((error) => {
            alert(propose)
            console.log(error)
        })
    }
    
    return(
        <section className='show-house-info' >
            <div className='show-house-info-background' onClick={() => {onClose(); setEdit(false)}}></div>
            <div>
                <button className='show-house-info-content-close-button' onClick={() => {onClose(); setEdit(false)}}>X</button>
                <div className='show-house-info-content'>
                    <div 
                        className='show-house-info-content-left' 
                        style=
                            {admin ? {gridTemplateRows: "auto 40% auto", rowGap: "15%"} 
                            : owner? {gridTemplateRows: "auto 30% auto auto", rowGap: "12%"}: 
                        {}}>

                        <h1>{house.title} - R${house.price}</h1>
                        <div className='show-house-info-content-left-description'>
                            <p><span>Descrição:</span></p>
                            <p>{house.info}</p>
                        </div>
                        
                        {!admin?
                        <div className='show-house-info-content-left-propose'>
                            <p><span>Proposta:</span></p>
                            <input 
                                title='propose' 
                                type='number' 
                                name='propose'
                                onChange={((e) => setPropose(Number(e.target.value)))}
                                value={propose}
                                readOnly={reserves? edit? false : true : false}
                            />
                        </div>
                        : <></>
                        }

                        {!reserves ? !admin? 
                        <div className='show-house-info-content-left-buttons'>
                            <FormButton text='Reservar' type='button' onTap={makeReserve}/> 
                        </div>
                        : <div className='show-house-info-content-left-buttons'>
                            <FormButton text='Excluir imóvel' type='button' onTap={onDelete}/>
                        </div>
                        : edit? <div className='show-house-info-content-left-buttons'>
                            <FormButton text='Confirmar' type='button' style={{backgroundColor: "var(--color-green)"}} onTap={reserveEdit}/>
                            <FormButton text='Cancelar' type='button' onTap={() => {changeEdit(); setPropose(reserve?.propouseValue)}}/>
                        </div>
                        : !owner? <div className='show-house-info-content-left-buttons'>
                            <FormButton text='Editar' type='button' style={{backgroundColor: "var(--color-green)"}} onTap={changeEdit}/>
                            <FormButton text='Cancelar Reserva' type='button' onTap={cancelReserve}/>
                        </div>
                        : <></>}
                    </div>
                    <div className='show-house-info-content-right'>
                        <img src={house.imgURL} alt='name'></img>
                        <div className='show-house-info-content-right-address'>
                            <p><span>Endereço:</span></p>
                            <div>
                                <p>{house.street}, {house.number}</p>
                                <p>{house.district} - {house.city} / {house.state}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default ShowHouseInfo