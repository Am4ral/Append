import { useNavigate } from 'react-router-dom';
import './registerForm.css'

function ResgisterForm() {
  const navigate = useNavigate();
  
    return (
        <form className='register-form'>
              <h2 className='register-form-tittle'>Cadastro</h2>
              
              <div className='register-form-label-input'>
                <label htmlFor="name" className='register-form-label'>Nome:</label>
                <input type='text' name='name' title='name' className='register-form-input' required></input>
              </div>

              <div className='register-form-label-input'>
                <label htmlFor="email" className='register-form-label'>Email:</label>
                <input type='email' name='email' title='email' className='register-form-input' required></input>
              </div>

              <div className='register-form-label-input'>
                <label htmlFor="password" className='register-form-label'>Senha:</label>
                <input type='password' name='password' title='password' className='register-form-input' required></input>
              </div>
              
              <div className='register-form-label-input'>
                <label htmlFor="confirmpassword" className='register-form-label'>Confirmar Senha:</label>
                <input type='password' name='confirmpassword' title='confirmpassword' className='register-form-input' required></input>
              </div>

              <button type='submit' className='register-form-button' onClick={()=> navigate('/')}>Enviar</button>

            </form>
    );
}

export default ResgisterForm;


/*<Link to={'/register'} className='register-form-register register-form-register-link'>*/