import FormButton from '../formButton/formButton'
import './addHouseForm.css'
import addImageIcon from '../../assets/addImageIcon.svg'
import { FC } from 'react';

interface AddHouseFormProps{
    onClose: () => void;
}

const AddHouseForm: FC<AddHouseFormProps> = ({onClose}) =>{
    return (
        <div className='add-house-form'>
            <button onClick={onClose} className='add-house-form-close-button'>X</button>
            <form className='add-house-form-content' method=''>
                <h1>Cadastrar Imóvel</h1>
                <div className='add-house-form-fields'>
                    <div className='add-house-form-fields-text'>
                        <div className='add-house-form-fields-text-input'>
                            <label htmlFor="tittle">Título:</label>
                            <input title='tittle' placeholder='Título do imóvel' name='tittle' type='text' required></input>
                        </div>
                        <div className='add-house-form-fields-text-input'>
                            <label htmlFor="address">Endereço:</label>
                            <input title='address' placeholder='Rua, número, bairro e cidade' name='address' type='text' required></input>
                        </div>
                        <div className='add-house-form-fields-text-input'>
                            <label htmlFor="phone">Telefone de contato:</label>
                            <input placeholder='Número com DDD' title='phone' name='phone' type='tel' pattern="[0-9]{11}" required></input>
                        </div>
                        <div className='add-house-form-fields-text-input'>
                            <label htmlFor="price">Valor:</label>
                            <input title='price' placeholder='Valor inteiro' name='price' required type='number' minLength={3}></input>
                        </div>
                        <div className='add-house-form-button'>
                            <FormButton text='Cadastrar' type='submit' />
                        </div>
                    </div>
                    <div className='add-house-form-fields-image'>
                        <div className='add-house-form-fields-image-upload'>
                            <img src={addImageIcon} alt=''/>
                            <p>Adicionar imagem</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        
    )
}

export default AddHouseForm