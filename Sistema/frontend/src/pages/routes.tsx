import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../styles/variables.css'
import LoginRegister from './loginRegister';
import Home from './home';
import Admin from './admin';
import Profile from './profile';

function AppRoutes () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginRegister/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/reserves' element={<Home reserves/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;