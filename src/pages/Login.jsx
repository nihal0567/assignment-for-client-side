import React, {  use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link,   } from 'react-router';
import Navbar from '../components/Navbar';

import { MdRemoveRedEye } from 'react-icons/md';
import { IoMdEyeOff } from 'react-icons/io';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
    const {signInUser} = use(AuthContext)
    const [show, setShow] = useState(false);

   const loginUser=(e)=>{
        e.preventDefault()
        const form= e.target 
        const email = form.email.value 
        const password = form.password.value 

        signInUser(email, password).then((result)=>{
            const user = result.user
            console.log(user);
        }).catch(err=>{
            alert(err)
        })
   }
   

    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center px-4 py-12">
       
                <div className="w-full max-w-md">
                    {/* Card with glassmorphism effect */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Welcome Back
                            </h2>
                            <p className="text-gray-600 mt-2">Login to your account</p>
                        </div>

                        <form onSubmit={loginUser} className="space-y-5">
                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 outline-none bg-white/70"
                                    placeholder="you@example.com"
                                />
                            </div>

                            {/* Password Field */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <input
                                    type={show ? "text" : "password"}
                                    name="password"
                                    required
                                    className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 outline-none bg-white/70"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShow(!show)}
                                    className="absolute right-3 top-10 text-gray-500 hover:text-purple-600 transition-colors"
                                >
                                    {show ? <MdRemoveRedEye size={22} /> : <IoMdEyeOff size={22} />}
                                </button>
                            </div>

                            {/* Links */}
                            <div  className="flex justify-between items-center text-sm">
                                <button type='submit' className="text-purple-600 cursor-pointer hover:text-purple-800 font-medium transition-colors">
                                    Forgot password?
                                </button>
                                <Link
                                    to="/register"
                                    className="text-pink-600 hover:text-pink-800 font-medium transition-colors"
                                >
                                    Register Now
                                </Link>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full py-3.5 mt-6 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                            >
                                Login
                            </button>

                            {/* Divider */}
                            <div className="flex items-center my-6">
                                <div className="flex-1 h-px bg-gray-300"></div>
                                <span className="px-4 text-sm text-gray-500">or</span>
                                <div className="flex-1 h-px bg-gray-300"></div>
                            </div>

                            {/* Google Button */}
                            <button
                                type="button"
                                className="w-full py-3.5 cursor-pointer rounded-xl border border-gray-300 flex items-center justify-center gap-3 hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 group"
                            >
                                <FcGoogle size={24} />
                                <span className="font-medium text-gray-700 group-hover:text-purple-700">
                                    Continue with Google
                                </span>
                            </button>
                        </form>
                    </div>

                    {/* Subtle background decoration */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;