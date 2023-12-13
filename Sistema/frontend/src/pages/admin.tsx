import { FC, useEffect, useState } from 'react';
import '../styles/admin.css'
import { createPortal } from 'react-dom';
import NavBar from '../components/navBar/navBar';
import { api } from '../services/API';
import editIcon from '.././assets/editIcon.svg'
import deleteIcon from '.././assets/deleteIcon.svg'
import DeleteHouseConfirm from '../components/deleteHouseConfirm/deleteHouseConfirm';
import { AdminAddUser } from '../components/adminAddUser/adminAddUser';

type User = any;

function Admin () {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user') || "")

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await api(token).get('/users');
            setUsers(response.data);
        };

        fetchData();
    }, [token]);

    //@ts-ignore
    async function deleteUser() {
        try {
            if(user.id !== userId){
                await api(token).delete(`/users/${userId}`);
                showConfirmForm();
                window.open("/admin", "_self");
            }
            else{
                alert('Não é possível excluir o usuário ativo.')
                showConfirmForm();
            }
        } catch (error) {
            alert('Não foi possível excluir o usuário.')
            showConfirmForm();
        }
    }

    const [userId, setUserId] = useState('')

    const [showConfirm, setShowConfirm] = useState(false)

    function showConfirmForm  () {
        setShowConfirm(!showConfirm)
    }
    
    const [showAddUser, setShowAddUser] = useState(false)

    function showAddUserForm  () {
        setUserId('')
        setShowAddUser(!showAddUser)
        setEdit(false)
    }
    
    const [edit, setEdit] = useState(false)
    
    function editForm () {
        setEdit(!edit)
        setShowAddUser(!showAddUser)
    }

    return (
        <div className='admin-dashboard'>
            {createPortal(
                <NavBar/>, document.body
            )}
            {createPortal(
                showConfirm ? 
                    <DeleteHouseConfirm onDelete={() => deleteUser()} showConfirm={showConfirmForm}/> 
                    : <></>, document.body
            )}
            {createPortal(
                showAddUser ? 
                    <AdminAddUser onClose={showAddUserForm} edit={edit} userID={userId}/> 
                    : <></>, document.body
            )}
            <div className='admin-dashboard-table'>
                <table className='admin-dashboard-table-content'>
                    <thead className='admin-table-head'>
                        <tr className='admin-table-head-content'>
                            <th className='admin-table-head-content-tittles'>Nome</th>
                            <th className='admin-table-head-content-tittles'>Email</th>
                            <th className='admin-table-head-content-tittles'>Cargo</th>
                            <th className='admin-table-head-content-tittles'>
                                <button type='button' className='admin-table-head-content-button' onClick={showAddUserForm}> NOVO</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='admin-table-body'>
                        {users.map((user, item) => (
                            <tr key={user.id} className='admin-table-body-content'>
                                <th className='admin-table-body-content-item'>{user.name}</th>
                                <th className='admin-table-body-content-item'>{user.email}</th>
                                <th className='admin-table-body-content-item'>{user.roles[0].authority}</th>
                                <th className='admin-table-body-content-item'>
                                    <div className='admin-table-body-content-item-icons'>
                                        <img className="admin-table-body-content-item-icons-delete-edit" src={editIcon} alt="edit icon" onClick={() =>{setUserId(user.id); editForm()}}/>
                                        <img className="admin-table-body-content-item-icons-delete-edit" src={deleteIcon} alt="delete icon" onClick={() =>{setUserId(user.id); showConfirmForm()}}/>
                                    </div>
                                </th>
                            </tr>
                        ))}
                    </tbody>


                </table>
            </div>
        </div>
    );
}
 
export default Admin;