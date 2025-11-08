

import { NavLink, Link } from 'react-router';

const Navbar = () => {
  
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Features', path: '/features' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply blur-3xl opacity-30 -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply blur-3xl opacity-30 translate-x-32 translate-y-32"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
            </div>

            {/* DAISYUI NAVBAR */}
            <div className="navbar bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
                {/* Left: Logo + Mobile Menu */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-4 shadow-lg bg-white/20 backdrop-blur-md rounded-box w-52">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.path}
                                        className="text-white hover:text-orange-400"
                                        end
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link to="/" className="btn btn-ghost text-2xl font-bold text-white normal-case">
                        FinEase
                    </Link>
                </div>

                {/* Center: Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `text-white font-semibold text-lg transition duration-300 ${isActive
                                            ? 'text-orange-400 underline underline-offset-8 decoration-4'
                                            : 'hover:text-orange-300'
                                        }`
                                    }
                                    end
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: CTA Button */}
                <div className="navbar-end">
                    <label
                        htmlFor="profile-modal"
                        className="btn btn-circle btn-ghost avatar online ring ring-orange-400 ring-offset-2 ring-offset-transparent"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="User"
                                src=""
                            />
                        </div>
                    </label>
                </div>
            </div>

            {/* HERO BANNER */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                            Manage Your<br />
                            <span className="text-orange-400">Finances Smarter</span>
                        </h1>
                        <p className="mt-8 text-lg text-gray-200 max-w-xl">
                            FinEase helps you track income, expenses, and savings goals — all in one simple, intuitive dashboard.
                        </p>
                        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                            <button className="btn btn-lg btn-neutral text-white shadow-2xl hover:shadow-orange-500/50">
                                Start Free Trial
                            </button>
                            <button className="btn btn-lg btn-ghost text-white border-2 border-white hover:bg-white hover:text-gray-900">
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <img
                                src="https://i.ibb.co.com/bjhk4KmD/istockphoto-950986656-612x612.jpg"
                                alt="Dashboard"
                                className="w-full max-w-lg rounded-3xl shadow-2xl object-cover border-8 border-white/20"
                            />
                            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-orange-500 rounded-full blur-3xl opacity-40"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 320" className="w-full h-32 text-white">
                    <path
                        fill="currentColor"
                        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Navbar;