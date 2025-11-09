import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar />

            <Outlet></Outlet>

            <footer></footer>
        </div>
    );
};

export default MainLayout;