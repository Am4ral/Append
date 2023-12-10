import { createPortal } from 'react-dom'
import '../styles/profile.css'
import NavBar from '../components/navBar/navBar'

function Profile () {
    const user = JSON.parse(localStorage.getItem('user') || "")

    return (
        <div>
            {createPortal(
                <NavBar/>, document.body
            )}
            <div className='hjklmk'>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.roles[0].authority}</p>
            </div>
        </div>
    )
}

export default Profile