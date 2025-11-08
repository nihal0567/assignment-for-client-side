import React from 'react';
import { NavLink, Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply blur-3xl opacity-30 -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply blur-3xl opacity-30 translate-x-32 translate-y-32"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
      </div>

      {/* Navbar - DaisyUI + Tailwind */}
      <div className="navbar bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-white/20 backdrop-blur-md rounded-box w-52">
              {['Home', 'About Us', 'FAQs', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white hover:text-orange-400"
                    end
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl font-bold text-white">
            LawFirm
          </Link>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            {['Home', 'About Us', 'FAQs', 'Contact'].map((item) => (
              <li key={item}>
                <NavLink
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className={({ isActive }) =>
                    `text-white font-medium transition duration-300 ${isActive ? 'text-orange-400 underline underline-offset-4 decoration-2' : 'hover:text-orange-400'}`
                  }
                  end
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              BEST LAW<br />
              <span className="text-orange-400">SERVICE</span>
            </h1>
            <p className="mt-6 text-lg text-gray-200 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="relative group px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-full shadow-2xl overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition duration-300 blur"></span>
                <span className="relative">FREE CONSULTATION</span>
              </button>
              <button className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-gray-900 transition">
                MORE INFO
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://i.ibb.co/1nZ7YkP/lawyer-photo.jpg"
                alt="Lawyer"
                className="w-full max-w-sm lg:max-w-lg rounded-3xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 320" className="w-full h-32 text-white">
          <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Navbar