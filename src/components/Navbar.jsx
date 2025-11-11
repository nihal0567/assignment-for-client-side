import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import { HiOutlineDownload } from 'react-icons/hi';
import { FaMoneyBillWave, FaThemeisle, FaUser } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { ImBoxAdd } from 'react-icons/im';
import { format } from 'date-fns';
import { GrTransaction } from 'react-icons/gr';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => toast.success("Logged out successfully!"))
            .catch(err => console.error(err));
    };

    const handleTheme = (checked) => {
        const theme = checked ? "dark" : "light";
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    const navLinks = (
        <>
            <li><NavLink to="/"><GoHomeFill /> Home</NavLink></li>
            <li><NavLink to="/all-transaction"><GrTransaction /> My Transaction</NavLink></li>
            <li><NavLink to="/add-transaction"><ImBoxAdd /> Add Transaction</NavLink></li>
            
            <li><NavLink to="/reports"><HiOutlineDownload /> Reports</NavLink></li>

        </>
    );

    return (
        <div className='bg-gradient-to-r to-indigo-900'>
            <div className="navbar py-0 min-h-0 z-50 shadow-lg rounded-full glass-card max-w-7xl mx-auto pt-4 border border-white/20 backdrop-blur-md">
                {/* Left - Logo + Mobile Menu */}
                <div className="navbar-start">
                    {/* Mobile Hamburger */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white/90 backdrop-blur-md rounded-box z-50 mt-3 w-56 p-1 shadow-xl border border-gray-200">
                            {navLinks}
                        </ul>
                    </div>

                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-2 text-2xl text-gray-800  font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                        FinEase
                    </NavLink>

                </div>

                {/* Center - Desktop Menu */}
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 text-base font-medium">
                        {navLinks}
                    </ul>
                </div>


                {/* Right - User Auth */}
                <div className="navbar-end gap-3">
                    {user ? (
                        <div className="dropdown dropdown-end z-50">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ring ring-orange-500 ring-offset-2 ring-offset-transparent">
                                    <img
                                        alt={user.displayName || "User"}
                                        src={user.photoURL || "https://i.pravatar.cc/150?u=" + (user.uid || "user")}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                            </div>

                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-64 p-4 shadow-2xl border border-gray-200">
                                {/* User Info */}
                                <div className="pb-4 border-b border-gray-300 mb-3">
                                    <p className="font-bold text-lg text-gray-800">{user.displayName || "User"}</p>
                                    <p className="text-sm text-gray-600">{user.email}</p>
                                </div>

                                {/* Menu Items */}
                                <li className="mt-2">
                                    <Link to="/profile" className="flex items-center gap-3 py-2 hover:bg-gray-100 rounded-lg">
                                        <FaUser /> Profile
                                    </Link>
                                </li>

                                {/* Theme Toggle */}
                                <li className="mt-4">
                                    <label className="flex items-center justify-between cursor-pointer py-2">
                                        <span className="flex items-center gap-3">
                                            <FaThemeisle /> Theme
                                        </span>
                                        <input
                                            type="checkbox"
                                            className="toggle toggle-sm toggle-accent"
                                            defaultChecked={localStorage.getItem('theme') === 'dark'}
                                            onChange={(e) => handleTheme(e.target.checked)}
                                        />
                                    </label>
                                </li>

                                {/* Logout */}
                                <li className="mt-4">
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-sm w-full bg-gradient-to-r from-pink-500 to-red-500 text-white border-none hover:from-pink-600 hover:to-red-600 shadow-md"
                                    >
                                        <IoLogOut /> Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="btn btn-sm rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white border-none hover:from-orange-600 hover:to-pink-700 shadow-lg transform hover:scale-105 transition"
                        >
                            <IoLogIn className="text-lg" /> Login
                        </Link>
                    )}
                </div>
            </div>
            <div className='text-center bg-gradient-to-br py-2 to-indigo-900 text-white'>
                {format(new Date(), 'dd MMMM yyyy, EEEE • hh:mm a',)}
            </div>
        </div>
    );
};

export default Navbar;