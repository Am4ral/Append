import FormButton from '../formButton/formButton';
import './loginForm.css'
import {useNavigate} from 'react-router-dom';
import {api} from "../../services/API";
import {useState, useRef, useEffect, useContext} from "react";
import {AuthProvider, useAuth} from "../../context/AuthProvider";
import {login} from "../../services/login"
import { error } from 'console';

const LoginForm = () => {
    // @ts-ignore
    const userRef = useRef();
    const { setAuthToken } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // @ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();
            login({
                email: email,
                password: password
            })
            .then((response) => {
                //console.log(response);
                const token = response.data.token;
                const user = response.data.user;
                setAuthToken(token, user);
                console.log(token, user);
                window.open("/home", "_self");
            })
            .catch ((error) => {
            alert('Email ou senha inválidos.');
        });
    }

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <h2 className='login-form-tittle'>Login</h2>

            <div className='login-form-label-input'>
                <label htmlFor="email" className='login-form-label'>Email:</label>
                <input
                    type='email'
                    id="email"
                    className='login-form-input'
                    // @ts-ignore
                    ref={userRef}
                    autoComplete="on"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
            </div>

            <div className='login-form-label-input'>
                <label htmlFor="password" className='login-form-label'>Senha:</label>
                <input
                    type='password'
                    id='password'
                    className='login-form-input'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
            </div>

            <FormButton  text='Enviar' type='submit'/>
        </form>

    );
}

export default LoginForm;