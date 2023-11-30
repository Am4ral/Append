import './loginForm.css'
import {useNavigate} from 'react-router-dom';
import api from "../../services /API";
import {useState, useRef, useEffect, useContext} from "react";
import AuthContext from "../../context/AuthProvider";

const LoginForm = () => {
    const setAuth = useContext(AuthContext);
    const userRef = useRef();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        // @ts-ignore
        userRef.current.focus();
    }, [])


    // @ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(
                "/auth/login",
                {
                    email: email,
                    password: password
                });
            console.log(JSON.stringify(response.data));
            // @ts-ignore
            setAuth(response.data)
            setEmail('');
            setPassword('');
            setSuccess(true);
            navigate('/home');
        } catch (err) {
            console.log("EITA BIXO, E AGORA ?????", err)
        }
    }

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <h2 className='login-form-tittle'>Login</h2>

            <div className='login-form-label-input'>
                {email}
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
                {password}
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

            <button type='submit' className='login-form-button'>Entrar</button>

        </form>

    );
}

export default LoginForm;


/*<Link to={'/register'} className='login-form-register login-form-register-link'>*/