import React from 'react'
import { Link } from "react-router-dom";
import SignInLinks from "./signInLink";
import SignOutLinks from "./signOutLink";


 const NavBar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Mario Plan</Link>
                <SignInLinks />
                <SignOutLinks />
            </div>
        </nav>
    )
}

export default NavBar