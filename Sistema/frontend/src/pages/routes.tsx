import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../styles/variables.css'
import App from '../pages/App';
import Login from './login';

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/app' element={<App/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;