import React, { use, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
const Profile = () => {
    const {updateUser, setUser, user } = use(AuthContext)
    const [isHovered, setIsHovered] = useState(false);
    const updateProfile = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo);
        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                toast("profile update")
                setUser({ ...user, displayName: name, photoURL: photo })
            })
            .catch((error) => {
                toast.error(error.message || "Update failed");
                setUser(user);
            });

    }
    return (
        <div>
            <Navbar />
           <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 bg-fixed flex items-center justify-center p-4 md:p-6 overflow-hidden relative">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-ping"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Profile Card - Glassmorphic & Vibrant */}
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8 md:p-10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-5">
              <div
                className={`relative w-24 h-24 md:w-28 md:h-28 rounded-full ring-4 ring-offset-4 ring-offset-transparent transition-all duration-500 ${
                  isHovered ? 'ring-pink-400 ring-offset-purple-400' : 'ring-orange-400 ring-offset-pink-300'
                } shadow-xl overflow-hidden group`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  alt={user?.displayName || "User"}
                  src={user?.photoURL || `https://i.pravatar.cc/150?u=${user?.uid || "user"}`}
                  className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg tracking-wide">
              {user?.displayName || "Guest User"}
            </h1>
            <p className="text-sm md:text-base text-white/90 mt-1 drop-shadow">
              {user?.email || "user@example.com"}
            </p>
          </div>

          {/* Update Form Card */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 shadow-inner">
            <form onSubmit={updateProfile} className="space-y-6">
              {/* Name Field */}
              <div className="group">
                <label className="block text-sm font-semibold text-white mb-2 drop-shadow">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-5 py-3 bg-white/20 border border-white/30 rounded-xl placeholder-white/50 text-white font-medium focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 shadow-md"
                />
              </div>

              {/* Photo URL Field */}
              <div className="group">
                <label className="block text-sm font-semibold text-white mb-2 drop-shadow">
                  Profile Picture URL
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Paste image link here"
                  className="w-full px-5 py-3 bg-white/20 border border-white/30 rounded-xl placeholder-white/50 text-white font-medium focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 shadow-md"
                />
                <p className="text-xs text-white/70 mt-2 italic">Use a direct link (e.g., from Imgur, Cloudinary)</p>
              </div>

              {/* Submit Button - Animated & Gradient */}
              <button
                type="submit"
                className="w-full py-4 mt-6 font-bold text-white text-lg rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transform transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
              >
                <span>Save Changes</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Decorative Bottom Glow */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      </div>
    </div>
                    <Footer />
        </div>
    );
};

export default Profile;