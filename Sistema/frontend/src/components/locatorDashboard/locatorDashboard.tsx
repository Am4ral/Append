import Casas from '../../database/casas.json'
import ListCard from '../listCard/listCard';
import './locatorDashboard.css'
import BackgroundImage from '../../assets/locatorBackground.svg'
import { title } from 'process';

const LocatorDashboard = () => {
    return ( 
        <div className='locator-dashboard'>
            <img src={BackgroundImage} alt='' className='locator-dashboard-background'/>
            <ul className="locator-dashboard-list">
                {Casas.map((item, index) => (
                    <li className='locator-dashboard-list-item'>
                        <ListCard src={item.picture} tittle={item.name} price={item.price} address={item.address}/>
                    </li>
                )
                
                )}
            </ul>
        </div>
     );
}
 
export default LocatorDashboard;

// style={{backgroundImage: `url(${BackgroundImage})`}}