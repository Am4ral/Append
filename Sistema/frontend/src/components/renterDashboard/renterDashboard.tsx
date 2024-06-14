import { MapHouse } from "../../services/mapHouseUser";
import SquareCard from "../squareCard/squareCard";
import './renterDashboard.css'


const RenterDashboard = () => {
    const Houses = MapHouse()

    return ( 
        <ul className="renter-dashboard-list">
                {Houses.map((house, index)=>(
                    <li key={house.id} className='locator-dashboard-list-item'>
                        <SquareCard house={house}/>
                    </li>
                   ))}
            </ul>
     );
}
 
export default RenterDashboard;