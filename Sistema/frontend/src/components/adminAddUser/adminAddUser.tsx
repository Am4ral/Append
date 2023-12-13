import { FC, useEffect, useState } from 'react';
import './adminAddUser.css'
import RegisterForm from '../registerForm/registerForm';
import { api } from '../../services/API';
import { User } from '../../interfaces/types';

interface AdminAddUserProps {
    onClose: () => void;
    edit?: boolean;
    userID?: number;
}

export const AdminAddUser: FC<AdminAddUserProps> = ({onClose, edit, userID}) => {
    const token = localStorage.getItem('token')

    const [user, setUser] = useState<User>()
       

    useEffect(() => {
        const fetchData = async () => {
            const response = await api(token).get(`/users/${userID}`)
            const gettedUser: User = await response.data;
            setUser(gettedUser)
        }
        fetchData()
    }, [token]);
    
    if (!user) {
        return null;
    }
    
    return (
        <div className='admin-add-user'>
            <div className='admin-add-user-background' onClick={onClose}></div>
            <div className='admin-add-user-form'>
                <RegisterForm onClose={onClose} admin edit={edit} user={user}/>
            </div>
        </div>
    )
}