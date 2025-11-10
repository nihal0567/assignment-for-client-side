import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddTransactions from "../pages/AddTransactions";
import MyTransactions from "../pages/MyTransactions";
import ReportPage from "../pages/ReportPage";
import Profile from "../pages/Profile";
import PrivateRoute from "../Context/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/add-transaction',
                element: <PrivateRoute><AddTransactions /></PrivateRoute>
            },
            {
                path: '/my-transaction',
                element: <PrivateRoute><MyTransactions /></PrivateRoute>
            },
            {
                path: '/reports',
                element: <PrivateRoute><ReportPage /></PrivateRoute>
            }
        ]
    },
    {
        path: '/profile',
        element: <Profile /> 
    },
    {
        path: '/register',
        Component: Register
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '*',
        Component: ErrorPage
    }
])