import './navBar.css'
import logo from '../../assets/whiteLogo.svg'
import menu from '../../assets/iconeMenu.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SideBar from '../sideBar/sideBar'

function NavBar() {

    const [showSideBar, setShowSideBar] = useState(false)

    function changeSideBar(){
        setShowSideBar(!showSideBar)
    }

    return (
        <section className="header">
            {showSideBar ? <SideBar onTap={changeSideBar}/> : <></>}
            <section className='header-content'>
                <Link to={'/home'} className='logo-link'>
                    <img src={logo} className="header-logo" alt="logo" />
                </Link>
                <img src={menu} className='header-menu-icon' alt='menu icon' onClick={changeSideBar}/>
            </section>
        </section>
    )
}


export default NavBar
