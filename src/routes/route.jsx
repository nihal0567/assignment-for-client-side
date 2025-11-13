import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddTransactions from "../pages/AddTransactions";
import ReportPage from "../pages/ReportPage";
import Profile from "../pages/Profile";
import PrivateRoute from "../Context/PrivateRoute";
import Loading from "../components/Loading";
import AllTransactions from "../pages/AllTransactions";
import TransactionDetailPage from "../pages/TransactionDetailPage";
import UpdateTransactionPage from "../pages/UpdateTransactionPage";

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
                element: <PrivateRoute><AllTransactions /></PrivateRoute>,
                loader: ()=> fetch('https://serverside-jet.vercel.app/collections'),
                hydrateFallbackElement: <Loading />
            },
            {
                path: '/transaction-detail-page/:id',
                element: <PrivateRoute><TransactionDetailPage /></PrivateRoute>,
                loader: ({params})=> fetch(`https://serverside-jet.vercel.app/collections/${params.id}`),
                hydrateFallbackElement: <Loading />
            },
            {
                path: '/update-transaction/:id',
                element: <PrivateRoute><UpdateTransactionPage /></PrivateRoute>,
                loader: ({params})=> fetch(`https://serverside-jet.vercel.app/collections/${params.id}`),
                hydrateFallbackElement: <Loading />
            },
            {
                path: '/reports',
                element: <PrivateRoute><ReportPage /></PrivateRoute>
            }
        ]
    },
    {
        path: '/profile',
        element: <Profile />,
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