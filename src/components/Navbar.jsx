import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => {
                alert("Log Out Successful")
            }).catch(err => {
                console.log(err)
            })
    }

    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost text-xl bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white">FinEase</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                    <div className='flex '>
                            <button onClick={handleLogout} className="btn rounded-full bg-blue-200 text-white
                             hover:bg-blue-500">Log Out</button>
                            <img className='text-xs w-10 ml-3' src="https://i.ibb.co.com/wh2H62mw/219969.png" alt="" />
                        </div>
                        :
                        <NavLink to="login" className="btn rounded-full bg-blue-300 text-white
                           hover:bg-blue-500">Sign Up</NavLink>
                }

            </div>
        </div>
    );
};

export default Navbar;