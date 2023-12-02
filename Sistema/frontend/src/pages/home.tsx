import NavNar from "../components/navBar/navBar"
import '../styles/home.css'
import RenterDashboard from "../components/renterDashboard/renterDashboard"
import LocatorDashboard from "../components/locatorDashboard/locatorDashboard"
import { api } from "../services/API"

const Home = () => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if(storedUser !== null){
        var user = JSON.parse(storedUser);
    }

    const userRole = user.roles[0].authority;

    let PageToRender: React.ReactNode;
    
    switch (userRole) {
        case 'ROLE_USER':
            PageToRender = 
                <div>
                    <h1 className="home-dashboard-tittle">DESTAQUES</h1>
                    <RenterDashboard/>
                </div>
            break;

        case 'ROLE_OWNER':
            PageToRender =
                <div>
                    <LocatorDashboard/>
                </div>
            break;

        case 'ROLE_ADMIN':
            PageToRender = 
                <div>
                    <LocatorDashboard/>
                </div>
            break;
    
        default:
            PageToRender = <RenterDashboard/>;
            break;
    }

    return(
        <section className="home">
            <NavNar/>
            <div className="home-dashboard">
                {PageToRender}
            </div>
         
        </section>
    )
}
 
export default Home;
