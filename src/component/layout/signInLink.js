import React from 'react'
import { NavLink } from "react-router-dom";


const SignInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/'>LogOut</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating cyan lighten-1'>S</NavLink></li>
        </ul>
    )
}

export default SignInLinks