import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout
    },
    {
        path: '*',
        Component: ErrorPage
    }
])