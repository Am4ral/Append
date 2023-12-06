import NavBar from "../components/navBar/navBar"
import '../styles/home.css'
import RenterDashboard from "../components/renterDashboard/renterDashboard"
import LocatorDashboard from "../components/locatorDashboard/locatorDashboard"
import { FC } from "react"
import { createPortal } from "react-dom"

interface HomeProps{
    reserves?: boolean;
}

const Home: FC<HomeProps> = ({reserves}) => {
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
                    <LocatorDashboard admin/>
                </div>
            break;
    
        default:
            PageToRender = <RenterDashboard/>;
            break;
    }

    if(reserves){PageToRender = <LocatorDashboard reserves/>}

    return(
        <section className="home">
            {createPortal(
                <NavBar/>, document.body
            )}
            <div className="home-dashboard">
                {PageToRender}
            </div>
         
        </section>
    )
}
 
export default Home;
