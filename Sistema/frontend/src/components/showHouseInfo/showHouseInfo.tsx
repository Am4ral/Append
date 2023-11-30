import { FC } from 'react';
import './showHouseInfo.css'
import FormButton from '../formButton/formButton';

interface ShowHouseProps{
    house : {
        tittle: string;
        price: number;
        address: {
            street: string;
            number: number;
            neighborhood: string;
            city: string;
            state: string;
        };
        picture: string;
    };
    edit: boolean;
    onTap: () => void;
}

const ShowHouseInfo: FC<ShowHouseProps> = ({house, edit, onTap}) => {
    
    return(
        <section className='show-house-info' >
            <div className='show-house-info-background' onClick={onTap}>
            </div>
            <div className='show-house-info-form'>
                <button className='show-house-info-form-close-button' onClick={onTap}>X</button>
                <div>
                    {edit === false ? 
                    <div className='show-house-info-form-text'>
                        <h1>{house.tittle} - R${house.price},00</h1>
                        <div className='show-house-info-form-text-address'>
                            <p><span>Endereço:</span></p>
                            <p>{house.address.street}, {house.address.number}</p>
                            <p>{house.address.neighborhood} - {house.address.city} / {house.address.state}</p>
                        </div>
                        <FormButton text='Entrar em Contato' type='button'/>
                    </div>
                    :
                    <form className='edit-house-info-form'>
                        <div className='edit-house-info-form-content'>
                            <label htmlFor="tittle">Título:</label>
                            <input name='tittle' title='tittle' value={house.tittle} defaultValue={house.tittle} readOnly = {false}  />
                        </div>
                    </form>
                    }
                    
                </div>
                <img src={house.picture} alt='name'></img>
            </div>
        </section>

    )

}

export default ShowHouseInfo