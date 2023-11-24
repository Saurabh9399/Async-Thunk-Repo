import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from '../components/UserCard';
import { deleteUser, editUser, getUsers } from '../features/userDetailsSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Users = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const usersList = useSelector(app => app.user.users);

    useEffect(() => {
        dispatch(getUsers());
        if(usersList.length === 0){
            navigate("/ ")
        }
    },[])

    const onEdit = (user) => {
        console.log("edit",user);
        dispatch(editUser(user));
    }
    const onDelete = (user) => {
        dispatch(deleteUser(user.id));
    }

    console.log("users",usersList);

  return (
    <div>
       {
         usersList.map((user,index) => (
            <UserCard user={user} onEdit={onEdit} onDelete={onDelete} key={index} id= {uuidv4()}/>
         ))
       }
    </div>
  )
}

export default Users
