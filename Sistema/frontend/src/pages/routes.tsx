import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../styles/variables.css'
import LoginRegister from './loginRegister';
import Home from './home';

function AppRoutes () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginRegister/>}/>
                <Route path='/home' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;