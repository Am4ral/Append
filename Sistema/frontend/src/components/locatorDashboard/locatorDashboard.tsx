import ListCard from '../listCard/listCard';
import './locatorDashboard.css'
import BackgroundImage from '../../assets/locatorBackground.svg'
import { FC, useState } from 'react';
import AddHouseForm from '../addHouseForm/addHouseForm';
import { MapHouseOwner } from '../../services/mapHouseOwner';
import { MapHouseReserves } from '../../services/mapHouseReserves';

interface LocatorDashboardProps{
    reserves?: boolean;
}

const LocatorDashboard: FC<LocatorDashboardProps> = ({reserves}) => {

    const[showHouseRegister, setShowHouseRegister] = useState(false)

    function showForm(){
        setShowHouseRegister(!showHouseRegister)
    }

    const Houses = reserves ? MapHouseReserves() : MapHouseOwner();


    return ( 
        <div>
            <div>
                {showHouseRegister ? <div>
                    <AddHouseForm onClose={showForm}/>
                </div> 
                : <></>
                }
            </div>
            <div className='locator-dashboard'>
                {!reserves ? 
                    <button type='button' onClick={showForm} className='locator-dashboard-add-house-button'>Cadastrar Imóvel</button> 
                    : <></>
                }
                <img src={BackgroundImage} alt='' className='locator-dashboard-background'/>
                {Houses.length === 0 ?
                    reserves ? 
                        <p className='locator-dashboard-not-found'>Nenhuma reserva encontrada.</p> 
                        : <p className='locator-dashboard-not-found'>Nenhuma casa encontrada.</p> 
                    :
                    <div>
                        {reserves ? <h2 className='locator-dashboard-reserves-tittle'>Reservas</h2> : <></>}
                        <ul className="locator-dashboard-list">
                            {Houses.map((house, index)=>(
                                <li key={house.id} className='locator-dashboard-list-item'>
                                    <ListCard house={house} reserves={reserves}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </div>
        
     );
}
 
export default LocatorDashboard;

// style={{backgroundImage: `url(${BackgroundImage})`}}