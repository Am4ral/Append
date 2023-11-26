import '../header/header.css'
import logo from '../../assets/whiteLogo.svg'
import menu from '../../assets/iconeMenu.svg'
import { Link } from 'react-router-dom'

function header() {

    return (
        <section className="header">
            <section className='header-content'>
                <Link to={'/home'} className='logo-link'>
                    <img src={logo} className="header-logo" alt="logo" />
                </Link>
                <img src={menu} className='header-menu-icon' alt='menu icon'/>
            </section>
        </section>
    )
}


export default header
