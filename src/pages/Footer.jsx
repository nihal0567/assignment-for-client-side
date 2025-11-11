

import { ImFacebook } from 'react-icons/im';
import { IoLogoYoutube } from 'react-icons/io5';
import { RiTwitterXFill } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white">
      {/* Wave Shape Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[40px] md:h-[60px] lg:h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,80 900,40 1200,0 L1200,120 L0,120 Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="px-6 pt-16 pb-10 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Services */}
          <nav>
            <h6 className="footer-title text-orange-500 text-lg mb-4">Services</h6>
            <a className="link link-hover block mb-2 text-gray-300 hover:text-white">Branding</a>
            <a className="link link-hover block mb-2 text-gray-300 hover:text-white">Design</a>
            <a className="link link-hover block mb-2 text-gray-300 hover:text-white">Marketing</a>
            <a className="link link-hover block mb-2 text-gray-300 hover:text-white">Advertisement</a>
          </nav>

          {/* Company */}
          <nav>
            <h6 className="footer-title text-orange-500 text-lg mb-4">Company</h6>
            <a className="link link-hover block mb-2 text-gray-300 hover:text-white">About us</a>
            <a className="link link-hover block mb-2 text-gray-300 hover:text-white">Contact</a>
            <a className="link link-hover block mb-2 text-gray-300 hover:text-white">Jobs</a>
            <a className="link link-hover block mb-2 text-gray-300 hover:text-white">Press kit</a>
          </nav>

          {/* Legal */}
          <nav>
            <h6 className="footer-title text-orange-500 text-lg mb-4">Legal</h6>
            <a className="link link-hover block mb-2 text-gray-300 hover:text-white">Terms of use</a>
            <a className="link link-hover block mb-2 text-gray-300 hover:text-white">Privacy policy</a>
            <a className="link link-hover block mb-2 text-gray-300 hover:text-white">Cookie policy</a>
          </nav>

          {/* Newsletter / CTA */}
          <div>
            <h6 className="footer-title text-orange-500 text-lg mb-4">Stay Updated</h6>
            <p className="text-gray-400 mb-4">Subscribe to get tips on managing finances smarter.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
              <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <aside className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-lg">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-orange-500"
              >
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
              </svg>
            </div>
            <p className="text-gray-400 text-sm">
              FinEase Industries Ltd.
              <br />
              <span className="text-xs">Providing reliable finance tools since 2020</span>
            </p>
          </aside>
          <div>
            <h5 className='flex items-center'>created-website : 08 November 2025</h5>
          </div>
          <div>
            <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              FinEase
            </NavLink>
          </div>

          {/* Social Icons */}
          <nav className="flex gap-6">
            <a href="#" aria-label="Twitter" className="hover:text-orange-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <RiTwitterXFill size={24} />
              </svg>
            </a>
            <a href="https://www.youtube.com/@alexnillchowdhury" aria-label="YouTube" className="hover:text-orange-500 transition">
              <IoLogoYoutube size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61581237916296" target='_blank' aria-label="Facebook" className="hover:text-orange-500 transition">
              <ImFacebook size={24} />
            </a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p className='text-xl '>Website Developed-By : <a href='https://www.facebook.com/profile.php?id=61581237916296' target='_blank' className='text-red-300'>Alex Nill Chowdhury</a></p>
          © 2025 FinEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;