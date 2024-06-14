import ListCard from '../listCard/listCard';
import './locatorDashboard.css'
import BackgroundImage from '../../assets/locatorBackground.svg'
import { FC, useState } from 'react';
import AddHouseForm from '../addHouseForm/addHouseForm';
import { MapHouseOwner } from '../../services/mapHouseOwner';
import { MapHouse } from '../../services/mapHouseUser';
import { MapReserves } from '../../services/mapReserves';
import { House, Reserve } from '../../interfaces/types';

interface LocatorDashboardProps{
    reserves?: boolean;
    admin?: boolean;
}

const LocatorDashboard: FC<LocatorDashboardProps> = ({reserves, admin}) => {

    const[showHouseRegister, setShowHouseRegister] = useState(false)

    function showForm(){
        setShowHouseRegister(!showHouseRegister)
    }

    let houses: House[] = [];
    let reserve: Reserve[] = []; 

    if(reserves){
        const response = MapReserves();
        response.forEach((item, index) => {
            houses.push(item[0]);
            reserve.push(item[1]);
        })
    } else if(admin) {
        houses = MapHouse()
    } else{
        houses = MapHouseOwner()
    }
    
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
                {!reserves ? !admin? 
                    <button type='button' onClick={showForm} className='locator-dashboard-add-house-button'>Cadastrar Imóvel</button> 
                    : <></> : <></>
                }
                <img src={BackgroundImage} alt='' className='locator-dashboard-background'/>
                {houses.length === 0 ?
                    reserves ? 
                        <p className='locator-dashboard-not-found'>Nenhuma reserva encontrada.</p> 
                        : <p className='locator-dashboard-not-found'>Nenhuma casa encontrada.</p> 
                    :
                    <div>
                        {reserves ? <h2 className='locator-dashboard-reserves-tittle'>Reservas</h2> : <></>}
                        <ul className="locator-dashboard-list">
                            {houses.map((house, index)=>(
                                <li key={house.id} className='locator-dashboard-list-item'>
                                    <ListCard house={house} reserves={reserves} admin={admin} reserveData={reserve[index]}/>
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