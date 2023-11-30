import React, {useState} from 'react';
import '../styles/loginRegister.css'
import logo from '../assets/orangeLogo.svg'
import LoginForm from '../components/loginForm/loginForm';
import RegisterForm from '../components/registerForm/registerForm';
import api from "../services/API";


function LoginRegister() {
    const [useLoginForm, setUseLoginForm] = useState(true);

    function formChange() {
        setUseLoginForm(!useLoginForm);
    }

    return (
        <section className='login-register-page'>
            <section className='login-register-page-content'>
                <section className='login-register-logo-content'>
                    <img src={logo} alt='logo' className='login-register-logo-image'/>
                    <p className='login-register-logo-slogan'>encontrando o lugar ideal para você</p>
                </section>

                <section className='form-component'>
                    {useLoginForm ? <LoginForm/> : <RegisterForm/>}

                    <p className='form-component-text'>
                        {useLoginForm ? "Não possui cadastro?" : "Já possui cadastro?"}
                        <span onClick={formChange}>
                {useLoginForm ? " Cadastre-se" : " Faça login"}
              </span>
                    </p>

                </section>
            </section>
        </section>
    );
}

export default LoginRegister;
