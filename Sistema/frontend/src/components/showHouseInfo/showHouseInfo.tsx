import { FC } from 'react';
import './showHouseInfo.css'
import FormButton from '../formButton/formButton';
import { HouseProps } from '../../interfaces/house';
import { api } from '../../services/API';

interface ShowHouseProps{
    reserves?: boolean;
    owner?: boolean;
    onClose: () => void;
}

const ShowHouseInfo: FC<ShowHouseProps & HouseProps> = ({house, onClose, reserves, owner}) => {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user') || "")

    function reserve(){
        api(token).post(
            '/reserves',
            {
                renter: user.id,
                house: house.id,
            }
        )
        .then(()=>{
            alert('Reserva efetuada com sucesso!')
            window.open("/reserves", "_self");
        }
        ).catch(()=>{
            alert('Reserva já realizada.')
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
                        {!reserves ? <FormButton text='Reservar' type='button' onTap={reserve}/> : <></>}
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