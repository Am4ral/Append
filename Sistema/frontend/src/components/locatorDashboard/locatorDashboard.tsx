import Casas from '../../database/casas.json'
import ListCard from '../listCard/listCard';
import './locatorDashboard.css'
import BackgroundImage from '../../assets/locatorBackground.svg'
import { useState } from 'react';
import AddHouseForm from '../addHouseForm/addHouseForm';

const LocatorDashboard = () => {
    const[showHouseRegister, setShowHouseRegister] = useState(false)

    function showForm(){
        setShowHouseRegister(!showHouseRegister)
    }

    return ( 
        <div>
            <div>
                {showHouseRegister ? <div>
                    <div className='add-house-form-background' onClick={showForm}></div>
                    <AddHouseForm onClose={() => setShowHouseRegister(!showHouseRegister)}/>
                </div> : <></>
                }
            </div>
            <div className='locator-dashboard'>
                <button type='button' onClick={showForm} className='locator-dashboard-add-house-button'>Cadastrar Imóvel</button>
                <img src={BackgroundImage} alt='' className='locator-dashboard-background'/>
                <ul className="locator-dashboard-list">
                    {Casas.map((item, index) => (
                        <li className='locator-dashboard-list-item'>
                            <ListCard picture={item.picture} tittle={item.tittle} price={item.price} address={item.address}/>
                        </li>
                    )
                    
                    )}
                </ul>
            </div>
        </div>
        
     );
}
 
export default LocatorDashboard;

// style={{backgroundImage: `url(${BackgroundImage})`}}