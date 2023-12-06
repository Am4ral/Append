import { FC } from 'react';
import './sideBar.css'
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '../../assets/logoutIcon.svg'

interface SideBarProps{
    onTap: ()=> void;
}


const SideBar: FC<SideBarProps> = ({onTap}) => {
    const navigate = useNavigate();
    const storedUser = localStorage.getItem("user");
    
    if(storedUser !== null){
        var user = JSON.parse(storedUser);
    }
    
    const userRole = user.roles[0].authority;
    
    let MenuOptions: React.ReactNode;
    
    function logout () {
        localStorage.clear();
        window.open("/", "_self");
    }
    
    switch (userRole) {
        case 'ROLE_USER' || 'ROLE_OWNER':
            MenuOptions = 
                <div className='side-bar-menu-content-options'>
                    <Link className='side-bar-menu-content-options-link' to={'/home'}>Perfil</Link>
                    <Link className='side-bar-menu-content-options-link' to={'/reserves'}>Reservas</Link>
                    <Link className='side-bar-menu-content-options-link' to={'/home'}>Dashboard</Link>
                </div>
            break;
            
            case 'ROLE_OWNER':
                MenuOptions =
                <div className='side-bar-menu-content-options'>
                    <Link className='side-bar-menu-content-options-link' to={'/home'}>Perfil</Link>
                    <Link className='side-bar-menu-content-options-link' to={'/reserves'}>Reservas</Link>
                    <Link className='side-bar-menu-content-options-link' to={'/home'}>Dashboard</Link>
                </div>
            break;
            
            case 'ROLE_ADMIN':
                MenuOptions = 
                <div className='side-bar-menu-content-options'>
                    <Link className='side-bar-menu-content-options-link' to={'/home'}>Perfil</Link>
                    <Link className='side-bar-menu-content-options-link' to={'/home'}>Dashboard</Link>
                    <Link className='side-bar-menu-content-options-link' to={'/home'}>Administrador</Link>
                </div>
            break;
    
        default:
            break;
    }


    return(
        <div className='side-bar'>
            <div className='side-bar-background' onClick={onTap}></div>
            <div className='side-bar-menu'>
                <div className='side-bar-menu-content'>
                    <button className='side-bar-menu-content-close-button' type='button' onClick={onTap}>X</button>
                    {MenuOptions}
                    <div className='side-bar-menu-content-logout' onClick={logout}>
                        <p>Logout</p>
                        <img src={LogoutIcon} alt='logout'/>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default SideBar;