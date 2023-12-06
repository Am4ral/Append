import FormButton from '../formButton/formButton'
import './addHouseForm.css'
import addImageIcon from '../../assets/addImageIcon.svg'
import { FC, useState } from 'react';
import { api } from '../../services/API';
import { OptionalHouseProps } from '../../interfaces/house';
import { capitalizeWords } from '../../functions/capitalizeWords';

interface AddHouseFormProps{
    onClose: () => void;
    edit?: boolean;
}

const AddHouseForm: FC<AddHouseFormProps & OptionalHouseProps> = ({onClose, house, edit}) =>{

    const [title, setTitle] = useState(house ?  edit ? house.title : '' : '')
    const [price, setPrice] = useState(house ?  edit ? house.price : '' : '')
    const [street, setStreet] = useState(house ?  edit ? house.street : '' : '')
    const [houseNumber, setHouseNumber] = useState(house ?  edit ? house.number : '' : '')
    const [district, setDistrict] = useState(house ?  edit ? house.district : '' : '')
    const [city, setCity] = useState(house ?  edit ? house.city : '' : '')
    const [state, setState] = useState(house ?  edit ? house.state : '' : '')
    const [info, setInfo] = useState(house ?  edit ? house.info : '' : '')
    const [imageUrl, setImageUrl] = useState(house ?  edit ? house.imgURL : '' : '')

    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user') || '')

    //@ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();
        api(token).post(
            '/houses',
            {   
                owner: user,
                title: capitalizeWords(title),
                imgURL: imageUrl,
                price: price,
                street: capitalizeWords(street),
                number: houseNumber,
                district: capitalizeWords(district),
                city: capitalizeWords(city),
                state: state,
                info: info
            }
        )
        .then((response) => {
            alert('Cadastro efetuado com sucesso!')
            setTitle('');
            setPrice('');
            setStreet('');
            setHouseNumber('');
            setDistrict('');
            setCity('');
            setState('');
            setImageUrl('');
            onClose();
            window.open("/home", "_self");
        })
        .catch ((error) => {
            console.log(error);
        });
    }
    
    //@ts-ignore
    const handleEdit = async (e) => {
        e.preventDefault();
        api(token).put(
            `/houses/${house?.id}`,
            {   
                owner: user,
                title: title,
                imgURL: imageUrl,
                price: price,
                street: street,
                number: houseNumber,
                district: district,
                city: city,
                state: state,
                info: info
            }
        )
        .then((response) => {
            alert('Cadastro efetuado com sucesso!')
            setTitle('');
            setPrice('');
            setStreet('');
            setHouseNumber('');
            setDistrict('');
            setCity('');
            setState('');
            setImageUrl('');
            onClose();
            window.open("/home", "_self");
        })
        .catch ((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <div className='add-house-form-background' onClick={onClose}></div>
            <div className='add-house-form'>
            <button onClick={onClose} className='add-house-form-close-button'>X</button>
            <form className='add-house-form-content' onSubmit={!edit ? handleSubmit : handleEdit}>
                <h1>Cadastrar Imóvel</h1>
                <div className='add-house-form-fields'>
                    <div className='add-house-form-fields-text'>
                        <div className='add-house-form-fields-text-input'>
                                <label htmlFor="title">Título:</label>
                                <input 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                title='title' 
                                placeholder='Título do anúncio' 
                                name='title' 
                                maxLength={40}
                                type='text' 
                                onKeyDown={(e) => {
                                    function isPermitedKey(e: any) {
                                        const permitedKeys = [8, 33, 34, 35, 36, 37, 38, 39, 40]; // Adicione as teclas de navegação necessárias
                                        return permitedKeys.includes(e.keyCode);
                                    }
                                    if (title.length === 40 && !isPermitedKey(e)) {
                                      e.preventDefault();
                                    }
                                  }}
                                required>
                                </input>
                        </div>
                        <div className='add-house-form-fields-text-input'>
                            <label htmlFor="price">Valor:</label>
                            <input 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            title='price' 
                            placeholder='Valor do aluguel' 
                            name='price' required 
                            type='number'
                            minLength={3}>
                            </input>
                        </div>
                        <div className='add-house-form-fields-text-input'>
                                <label htmlFor="image">Link da imagem:</label>
                                <input 
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder='Url para a imagem do anúncio' 
                                title='image' 
                                name='image' 
                                type='text' 
                                required>
                                </input>
                        </div>
                        <div className='add-house-form-fields-text-input input-info'>
                                <label htmlFor="info">Descrição:</label>
                                <textarea 
                                value={info}
                                onChange={(e) => setInfo(e.target.value)}
                                placeholder='Descrição detalhada do imóvel' 
                                title='info' 
                                name='info' 
                                maxLength={500}
                                onKeyDown= {(e)=> {
                                    function isPermitedKey(e: any) {
                                        const permitedKeys = [8, 33, 34, 35, 36, 37, 38, 39, 40]; // Adicione as teclas de navegação necessárias
                                        return permitedKeys.includes(e.keyCode);
                                    }
                                    if(info.length === 500 && !isPermitedKey(e)) 
                                    e.preventDefault();
                                }}
                                required>
                                </textarea>
                        </div>
                    </div>
                    <div className='add-house-form-fields-text'>
                        <div 
                            className='add-house-form-fields-image'
                            style={{backgroundImage: `url(${imageUrl !== '' ? imageUrl : addImageIcon})`}}
                        >
                        </div>
                        <div className='add-house-form-fields-text-input input-street'>
                            <label htmlFor="street">Rua:</label>
                            <input
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            title='street' 
                            name='street' 
                            type='text' 
                            required>
                            </input>
                        </div>
                        <div className='add-house-form-fields-text-input-number-district'>
                            <div className='add-house-form-fields-text-input input-number'>
                                <label htmlFor="houseNumber">Número:</label>
                                <input
                                value={houseNumber}
                                onChange={(e) => setHouseNumber(e.target.value)}
                                title='houseNumber' 
                                name='houseNumber' 
                                type='number' 
                                required>
                                </input>
                            </div>
                            <div className='add-house-form-fields-text-input input-district'>
                                <label htmlFor="district">Bairro:</label>
                                <input
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                title='district' 
                                name='district' 
                                type='text' 
                                required>
                                </input>
                            </div>
                        </div>
                        <div className='add-house-form-fields-text-input-city-state'>
                            <div className='add-house-form-fields-text-input input-city'>
                                <label htmlFor="city">Cidade:</label>
                                <input
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                title='city' 
                                name='city' 
                                type='text' 
                                required>
                                </input>
                            </div>
                            <div className='add-house-form-fields-text-input input-state'>
                                <label htmlFor="state">Estado:</label>
                                <select
                                onChange={(e) => setState(e.target.value)}
                                title='state' 
                                name='state' 
                                value={state}
                                required>
                                    <option defaultChecked value='' disabled>Selecione</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='add-house-form-button'>
                    <FormButton text={!edit ? 'Cadastrar' : 'Alterar'} type='submit' />
                </div>
            </form>
        </div>
    </div>
        
    )
}

export default AddHouseForm