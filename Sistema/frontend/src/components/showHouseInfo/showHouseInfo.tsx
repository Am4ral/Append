import { FC } from 'react';
import './showHouseInfo.css'
import FormButton from '../formButton/formButton';
import { HouseProps } from '../../interfaces/house';
import { api } from '../../services/API';

interface ShowHouseProps{
    reserves?: boolean;
    onClose: () => void;
    admin?: boolean;
    onDelete?: ()=>void;
}

const ShowHouseInfo: FC<ShowHouseProps & HouseProps> = ({house, onClose, reserves, admin, onDelete}) => {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user') || "")

    const userID = user.id
    const houseID = house.id

    function reserve(){
        api(token).post(
            '/reserves',
            {
                renter: userID,
                house: houseID,
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
                renter: userID,
                house : houseID
            }
        )
        .then((response) => {
            console.log(`House ID: ${response.data.house}}`)
            api(token).delete(`/reserves/${response.data.id}`);
            console.log()
            alert('Reserva excluída com sucesso');
            window.open("/home", "_self")
        })
        .catch((error) => {
            console.log(houseID, userID)
            console.log(error)
        })
    }
    
    return(
        <section className='show-house-info' >
            <div className='show-house-info-background' onClick={onClose}>
            </div>
            <div>
                <button className='show-house-info-content-close-button' onClick={onClose}>X</button>
                <div className='show-house-info-content'>
                    <div className='show-house-info-content-left'>
                        <h1>{house.title} - R${house.price}</h1>
                        <div className='show-house-info-content-left-description'>
                            <p><span>Descrição:</span></p>
                            <p>{house.info}</p>
                        </div>
                        {!reserves ? !admin? <FormButton text='Reservar' type='button' onTap={reserve}/> 
                        : <FormButton text='Excluir imóvel' type='button' onTap={onDelete}/>
                        : <FormButton text='Cancelar Reserva' type='button' onTap={cancelReserve}/>
                        }
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