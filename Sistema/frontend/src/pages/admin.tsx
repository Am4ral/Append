import { FC, useState } from 'react';
import '../styles/admin.css'
import { createPortal } from 'react-dom';
import NavBar from '../components/navBar/navBar';
import { api } from '../services/API';
import { error } from 'console';

function Admin () {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user') || "")
    const userRole = user.roles[0].authority

    const [email, setEmail] = useState('')
    const [foundUser, setFoundUser] = useState('')

    //@ts-ignore
    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            const response = await api(token).get('/users');

            //@ts-ignore
            const foundUser = response.data.find((user) => user.email === email);

            if (foundUser) {
                //@ts-ignore
                await api(token).delete(`/users/${foundUser.id}`);

                setFoundUser(foundUser);
                setEmail('');

                alert('Usuário excluído com sucesso');
                window.open("/admin", "_self")
            } else {
                alert('Usuário não encontrado');
                window.open("/admin", "_self")
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    //@ts-ignore
    const handlePromote = async (e) => {
        e.preventDefault();

        try {
            const response = await api(token).get('/users');

            //@ts-ignore
            const foundUser = response.data.find((user) => user.email === email);

            if (foundUser) {
                console.log(foundUser)
                
                foundUser.roles[0].authority = 'ROLE_ADMIN'
                foundUser.roles[0].id = 2
                
                //@ts-ignore
                await api(token).put(
                    `/users/${foundUser.id}`, {
                        user: foundUser
                    });
                    
                setEmail('');
                setFoundUser(foundUser)
                alert('Usuário promovido com sucesso');
            } else {
                alert('Usuário não encontrado');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className='admin-dashboard'>
            {createPortal(
                <NavBar/>, document.body
            )}
            <div className='admin-dashboard-forms'>
                <form className='admin-dashboard-forms-content'  onSubmit={handleDelete}>
                    <h2>Excluir usuário</h2>
                    <input type="email" title='email' name='email' placeholder='Insira o email do usuário' onChange={(e) => setEmail(e.target.value)}/>
                    <button type='submit'>Excluir</button>
                </form>
                <form className='admin-dashboard-forms-content' onSubmit={handlePromote}>
                    <h2>Promover usuário</h2>
                    <input type="email" title='email' name='email' placeholder='Insira o email do usuário' onChange={(e) => setEmail(e.target.value)}/>
                    <button type='submit'>Promover</button>
                </form>
            </div>
        </div>
    );
}
 
export default Admin;