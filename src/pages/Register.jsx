import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import Navbar from '../components/Navbar';
import { AuthContext } from '../Context/AuthContext';
import { MdRemoveRedEye } from 'react-icons/md';
import { IoMdEyeOff } from 'react-icons/io';
import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../components/Firebase/firebase.config';

const Register = () => {
    const [show, setShow] = useState(false);
    const provider= new GoogleAuthProvider()
    const navigate = useNavigate()
    const { createUser, setUser, updateUser } = use(AuthContext)
    const registerAccount = (e) => {
        e.preventDefault()
        const photo = e.target.photo.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
       
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.error("Password must have uppercase, lowercase & min 6 characters");
            return
        }
        createUser(email, password, name, photo)
            .then(result => {
                const user = result.user
                setUser({...user, photoURL: photo, displayName: name})
                updateUser({photoURL: photo, displayName: name})
                navigate("/")
                toast("Successful Registration and Login Website")
            }).catch(err => {
                alert(err)
            })
    }

    const googleRegister=()=>{
        signInWithPopup(auth, provider)
        .then((result)=>{
            console.log(result);
            navigate("/")
            toast("Login Successful")
        }).catch(err=>{
            toast.warning(err)
        })
    }

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex
             items-center justify-center px-4 py-12">

                <div className="w-full max-w-md">
                    {/* Glassmorphic Card */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 
                            bg-clip-text text-transparent">
                                Create Account
                            </h2>
                            <p className="text-gray-600 mt-2">Join us today!</p>
                        </div>

                        <form onSubmit={registerAccount} className="space-y-5">
                            {/* Photo URL */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Photo URL</label>
                                <input
                                    type="text"
                                    name="photo"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300
                                     focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all 
                                     duration-200 outline-none bg-white/70"
                                    placeholder="https://example.com/avatar.jpg"
                                />
                            </div>

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300
                                     focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all
                                      duration-200 outline-none bg-white/70"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300
                                     focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all
                                      duration-200 outline-none bg-white/70"
                                    placeholder="you@example.com"
                                />
                            </div>

                            {/* Password */}
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

                            {/* Register Button */}
                            <button
                                type="submit"
                                className="w-full py-3.5 mt-6 rounded-xl bg-gradient-to-r from-indigo-600
                                 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform
                                  hover:scale-[1.02] transition-all duration-200"
                            >
                                Register
                            </button>

                            {/* Divider */}
                            <div className="flex items-center my-6">
                                <div className="flex-1 h-px bg-gray-300"></div>
                                <span className="px-4 text-sm text-gray-500">or</span>
                                <div className="flex-1 h-px bg-gray-300"></div>
                            </div>

                            {/* Google Button */}
                            <button
                                onClick={googleRegister}
                                type="button"
                                className="w-full py-3.5 rounded-xl border border-gray-300 flex items-center 
                                justify-center gap-3 hover:border-indigo-400 hover:bg-indigo-50 transition-all 
                                duration-200 group"
                            >
                                <FcGoogle size={24} />
                                <span className="font-medium text-gray-700 group-hover:text-indigo-700">
                                    Continue with Google
                                </span>
                            </button>

                            {/* Links */}
                            <div className="flex justify-between items-center text-sm mt-5">
                                <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium 
                                transition-colors">
                                    Forgot password?
                                </a>
                                <Link
                                    to="/login"
                                    className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
                                >
                                    Already have an account? Login
                                </Link>
                            </div>
                        </form>
                    </div>

                    {/* Background Blobs */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute top-10 -left-10 w-80 h-80 bg-indigo-300 
                        rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                        <div className="absolute bottom-10 -right-10 w-80 h-80 bg-purple-300 rounded-full
                         mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;