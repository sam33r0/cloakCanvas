import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from "../../store/authSlice"
import { useNavigate } from 'react-router-dom'
function LogoutBtn() {
    const navigate= useNavigate();
    const dispath= useDispatch();
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispath(logout());
            navigate("/login");
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn