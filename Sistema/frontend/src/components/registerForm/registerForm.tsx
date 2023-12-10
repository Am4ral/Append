import { useNavigate } from 'react-router-dom';
import './registerForm.css';
import { FC, useEffect, useRef, useState } from 'react';
import { AuthProvider, useAuth } from '../../context/AuthProvider';
import { register } from '../../services/register';
import { User } from '../../interfaces/user';
import { api } from '../../services/API';
interface RegisterProps{
    onClose: () => void;
    admin?: boolean;
    edit?: boolean;
    user?: User;
}

const RegisterForm: FC<RegisterProps> = ({onClose, admin, edit, user}) => {
    const token = localStorage.getItem('token')
   
    const [name, setName] = useState(edit? user?.name : "");
    const [email, setEmail] = useState(edit? user?.email : "");
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
            setRoleID('');
            onClose();
            // eslint-disable-next-line no-lone-blocks
            {admin? window.open("/admin", "_self") : window.open("/", "_self")}
        })
        .catch ((error) => {
          setName('');
          setEmail('');
          setPassword('');
          setRole('');
          setConfirmPassword('');
          setRoleID("");
          console.log(error);
        });
    }

    //@ts-ignore
    const handleEdit = async (e) => {
      e.preventDefault();
      api(token).put(
        `/users/${user?.id}`,
        {
            name: name,
            email: email,
        })
      .then((response) => {
        alert('Atualização efetuada com sucesso!')
        setName('');
        setEmail('');
        setPassword('');
        setRole('');
        setConfirmPassword('');
        setRoleID("");
        alert('Usuário alterado com sucesso.')
        onClose();
        // eslint-disable-next-line no-lone-blocks
        window.open("/admin", "_self")
    })
      .catch ((error) => {
        setName('');
        setEmail('');
        setPassword('');
        setRole('');
        setConfirmPassword('');
        setRoleID("");
        console.log(error);
        alert('Não foi possível alterar o usuário.');
        onClose();
      });
    
    }


    function switchRole (role: string){
        switch (role) {
            case 'ROLE_OWNER':
                    setRoleID('1')
                    setRole(role)
                break;
                
                case 'ROLE_ADMIN':
                    setRoleID('2')
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
    <form className="register-form" onSubmit={!edit ? handleSubmit : handleEdit}>
      <h2 className="register-form-tittle">{!edit? 'Cadastro' : 'Alterar'}</h2>
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
          style={admin ? {backgroundColor: 'var(--color-lightGray'} : {}}
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
          style={admin ? {backgroundColor: 'var(--color-lightGray'} : {}}
        />
      </div>

      {!edit ? 
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
            style={admin ? {backgroundColor: 'var(--color-lightGray'} : {}}/>
        </div> : <></> }

      {!edit ? 
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
            style={admin ? {backgroundColor: 'var(--color-lightGray'} : {}}/>
        </div> : <></>}

        {!edit? 
          <div className="register-form-role-select">
          
          <label htmlFor="role" className="register-form-label">
          {!admin ? 'Eu Desejo:' : 'Função'}
          </label> 
          
          <select
            name="role"
            title="role"
            className="register-form-input-select"
            onChange={(e) => (switchRole(e.target.value))}
            value={role}
            required
            style={admin ? {backgroundColor: 'var(--color-lightGray'} : {}}
          >
            <option defaultChecked value='' disabled>
              Selecione
            </option>
            <option value="ROLE_USER">Alugar imóveis</option>
            <option value="ROLE_OWNER">Ofertar imóveis</option>
            {admin ? 
              <option value="ROLE_ADMIN">Administrar o sistema</option> 
              : <></>
              }
          </select>
          </div> : <></>}

      <button type="submit" className="register-form-button">
        {!edit? 'Cadastrar' : 'Atualizar'}
      </button>
    </form>
  );
}

export default RegisterForm;