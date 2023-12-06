import { useNavigate } from 'react-router-dom';
import './registerForm.css';
import { FC, useEffect, useRef, useState } from 'react';
import { AuthProvider, useAuth } from '../../context/AuthProvider';
import { register } from '../../services/register';

interface RegisterProps{
    onClose: () => void
}

const RegisterForm: FC<RegisterProps> = ({onClose}) => {
   
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");
    const [roleID, setRoleID] = useState("")

    //@ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();
        register({
            name: name,
            email: email,
            password: password,
            roles: [{
                id: roleID, 
                role: role
            }]
        })

        .then((response) => {
            alert('Cadastro efetuado com sucesso!')
            setName('');
            setEmail('');
            setPassword('');
            setRole('');
            setConfirmPassword('');
            setRoleID("");
            onClose();
        })
        .catch ((error) => {
            console.log(error);
        });
    }

    function switchRole (role: string){
        switch (role) {
            case 'ROLE_OWNER':
                    setRoleID('1')
                    setRole(role)
                break;
                
                case 'ROLE_USER':
                    setRoleID('3')
                    setRole(role)
                break;

            default:
                break;
        }
    }
  

    return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2 className="register-form-tittle">Cadastro</h2>

      <div className="register-form-label-input">
        <label htmlFor="name" className="register-form-label">
          Nome:
        </label>
        <input
          type="text"
          name="name"
          title="name"
          className="register-form-input"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      </div>

      <div className="register-form-label-input">
        <label htmlFor="email" className="register-form-label">
          Email:
        </label>
        <input
          type="email"
          name="email"
          title="email"
          className="register-form-input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>

      <div className="register-form-label-input">
        <label htmlFor="password" className="register-form-label">
          Senha:
        </label>
        <input
          type="password"
          name="password"
          title="password"
          className="register-form-input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>

      <div className="register-form-label-input">
        <label htmlFor="confirmPassword" className="register-form-label">
          Confirmar Senha:
        </label>
        <input
          type="password"
          name="confirmPassword"
          title="confirmPassword"
          className="register-form-input"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      <div className="register-form-role-select">
        <label htmlFor="role" className="register-form-label">
          Eu Desejo:
        </label>
        <select
          name="role"
          title="role"
          className="register-form-input-select"
          onChange={(e) => (switchRole(e.target.value))}
          value={role}
          required
        >
          <option defaultChecked value='' disabled>
            Selecione
          </option>
          <option value="ROLE_USER">Alugar imóveis</option>
          <option value="ROLE_OWNER">Ofertar imóveis</option>
        </select>
      </div>

      <button type="submit" className="register-form-button">
        Enviar
      </button>
    </form>
  );
}

export default RegisterForm;
