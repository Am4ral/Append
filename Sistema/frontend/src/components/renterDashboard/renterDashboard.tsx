import SquareCard from "../squareCard/squareCard";
import Casas from '../../database/casas.json'
import './renterDashboard.css'

const RenterDashboard = () => {
    return ( 
        <ul className="renter-dashboard-list">
                {Casas.map((item, index) => (
                    <li>
                        <SquareCard src={item.picture} alt={item.name}/>
                    </li>
                )
                
                )}
            </ul>
     );
}
 
export default RenterDashboard;