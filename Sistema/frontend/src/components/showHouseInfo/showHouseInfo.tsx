import { FC } from 'react';
import './showHouseInfo.css'
import FormButton from '../formButton/formButton';

interface ShowHouseProps{
    name: string;
    price: number;
    address: string;
    picture: string;
    edit: boolean;
    onTap: () => void;
}

const ShowHouseInfo: FC<ShowHouseProps> = ({name, price, address, picture, edit, onTap}) => {
    
    return(
        <section className='show-house-info' >
            <div className='show-house-info-background' onClick={onTap}>
            </div>
            <div className='show-house-info-form'>
                <div className='show-house-info-form-text'>
                    <p>{name}</p>
                    <p>{price}</p>
                    <p>{address}</p>
                    {edit ? <FormButton text='Confirmar' type='submit'/> : <></>}
                </div>
                <img src={picture} alt='name'></img>
            </div>
        </section>

    )

}

export default ShowHouseInfo