import { useNavigate } from 'react-router-dom';
import './registerForm.css'
import useAuth from "../../hooks/useAuth";
import {useEffect, useRef, useState} from "react";
import api from "../../services /API";

function ResgisterForm() {
    // @ts-ignore
    const { setAuth } = useAuth();
    const userRef = useRef();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    // @ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(
                "/auth/register",
                {
                    name: name,
                    email: email,
                    password: password,
                    roles: {
                        role: "ROLE_ADMIN"
                    }
                });
            console.log(JSON.stringify(response.data));
            // @ts-ignore
            setAuth(response.data)
            setName('');
            setEmail('');
            setPassword('');
            navigate('/home');
        } catch (err) {
            console.log("EITA BIXO, E AGORA ?????", err)
        }
    }
  
    return (
        <form className='register-form' onSubmit={handleSubmit}>
              <h2 className='register-form-tittle'>Cadastro</h2>
              
              <div className='register-form-label-input'>
                <label htmlFor="name" className='register-form-label'>Nome:</label>
                <input
                    type='text'
                    name='name'
                    title='name'
                    className='register-form-input'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />
              </div>

              <div className='register-form-label-input'>
                <label htmlFor="email" className='register-form-label'>Email:</label>
                <input
                    type='email'
                    name='email'
                    title='email'
                    className='register-form-input'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
              </div>

              <div className='register-form-label-input'>
                <label htmlFor="password" className='register-form-label'>Senha:</label>
                <input
                    type='password'
                    name='password'
                    title='password'
                    className='register-form-input'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
              </div>
              
              <div className='register-form-label-input'>
                <label htmlFor="confirmpassword" className='register-form-label'>Confirmar Senha:</label>
                <input
                    type='password'
                    name='confirmpassword'
                    title='confirmpassword'
                    className='register-form-input'
                    required
                />
              </div>

              <button type='submit' className='register-form-button' onClick={()=> navigate('/')}>Enviar</button>

            </form>
    );
}

export default ResgisterForm;


/*<Link to={'/register'} className='register-form-register register-form-register-link'>*/