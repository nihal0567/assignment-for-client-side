import React, { use } from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import { AuthContext } from '../Context/AuthContext';
const Profile = () => {
    const { user } = use(AuthContext)
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 bg-fixed flex items-center justify-center p-6">
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-md w-full border border-white border-opacity-30">
                    <h1 className="text-4xl font-bold text-white text-center  drop-shadow-md">
                        <div className='flex justify-center '>
                            <div className="w-20 mb-5 flex justify-center items-center  rounded-full ring ring-orange-500 ring-offset-2 ring-offset-transparent">
                                <img
                                    alt={user?.displayName || "User"}
                                    src={user?.photoURL || "https://i.pravatar.cc/150?u=" + (user.uid || "user")}
                                    className="rounded-full object-cover"
                                />
                            </div>
                        </div>
                                <div className='text-black'>{user.displayName}</div>
                                <div className='text-black text-xl'>{user.email}</div>
                    </h1>

                </div>
            </div>
                    <Footer />
        </div>
    );
};

export default Profile;