import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import Bookings from "../Pages/Bookings";
import ErrorPage from "../Pages/ErrorPage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<HomePage></HomePage>
            },
            {
                path:'/login',
                element: <LoginPage></LoginPage>
            },
            {
                path:'/bookings',
                element: <Bookings></Bookings>
            }
        ]
    },
    {
        path:"/signUp",
        element:<SignUpPage></SignUpPage>
    }
])

export default Router;