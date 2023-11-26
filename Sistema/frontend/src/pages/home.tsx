import Header from "../components/header/header"
import '../styles/home.css'
import RenterDashboard from "../components/renterDashboard/renterDashboard"
import { FC } from "react"
import LocatorDashboard from "../components/locatorDashboard/locatorDashboard"


interface HomeProps {
    rule: string
}
 
const Home: FC<HomeProps>= ({rule}) => {

    return(
        <section className="home">
            <Header/>
            <div className="home-dashboard">
                {rule === 'renter' ? <h1 className="home-dashboard-tittle">DESTAQUES</h1> : <></>}
                {rule === 'renter' ? <RenterDashboard/> : <LocatorDashboard/>}
            </div>
         
        </section>
    )
}
 
export default Home;
