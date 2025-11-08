import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header />
            </header>

            <Outlet></Outlet>

            <footer></footer>
        </div>
    );
};

export default MainLayout;