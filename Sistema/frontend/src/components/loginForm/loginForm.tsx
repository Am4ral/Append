import './loginForm.css'
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  
    return (
        <form className='login-form'>
              <h2 className='login-form-tittle'>Login</h2>

              <div className='login-form-label-input'>
                <label htmlFor="email" className='login-form-label'>Email:</label>
                <input type='email' name='email' title='email' className='login-form-input' required></input>
              </div>
              
              <div className='login-form-label-input'>
                <label htmlFor="password" className='login-form-label'>Senha:</label>
                <input type='password' name='password' title='password' className='login-form-input' required></input>
              </div>

              <button type='submit' className='login-form-button' onClick={()=>navigate('/home')}>Enviar</button>

            </form>
    );
}

export default LoginForm;


/*<Link to={'/register'} className='login-form-register login-form-register-link'>*/