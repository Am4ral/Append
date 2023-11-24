import React from 'react';
import '../styles/login.css'
import logo from '../assets/orangeLogo.svg'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className='login-page'>
      <section className='login-page-content'>
          <section className='login-logo-content'>
            <img src={logo} alt='logo' className='login-logo-image'/>
            <p className='login-logo-slogan'>encontrando o lugar ideal para você</p>
          </section>
            <form method='POST' className='login-form'>
              <h2 className='login-form-tittle'>Login</h2>

              <div>
                <label htmlFor="email" className='login-form-label'>Email:</label><br/>
                <input type='email' name='email' title='email' className='login-form-input' required></input>
              </div>
              
              <div>
                <label htmlFor="password" className='login-form-label'>Senha:</label><br/>
                <input type='password' name='password' title='password' className='login-form-input' required></input>
              </div>

              <button type='submit' className='login-form-button'>Enviar</button>

              <p className='login-form-register'>Não possui cadastro?<span> <Link to={'/app'} className='login-form-register login-form-register-link'>
                    Cadastre-se
                  </Link></span>
                </p>
            </form>
        </section>
    </section>
      );
}

export default Login;
