import SquareCard from "../squareCard/squareCard";
import Casas from '../../database/casas.json'
import './renterDashboard.css'

const RenterDashboard = () => {
    return ( 
        <ul className="renter-dashboard-list">
                {Casas.map((item, index) => (
                    <li>
                        <SquareCard picture={item.picture} name={item.name} price={item.price} address={item.address} />
                    </li>
                )
                
                )}
            </ul>
     );
}
 
export default RenterDashboard;