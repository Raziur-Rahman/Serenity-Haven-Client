import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import Bookings from "../Pages/Bookings";
import ErrorPage from "../Pages/ErrorPage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import PrivateRoute from "./PrivateRoute";
import RoomsPage from "../Pages/RoomsPage";
import RoomsDetails from "../Pages/RoomsDetails";
import axios from "axios";
import GiveReview from "../Components/Rooms/GiveReview";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/rooms",
                element: <RoomsPage></RoomsPage>
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
            {
                path: "/roomdetails/:id",
                element:<RoomsDetails></RoomsDetails>,
                loader: ({params})=> axios.get(`https://serenity-haven-server-17och9bqe-raziurrahmans-projects.vercel.app/rooms/${params.id}`)
            },
            {
                path: "/giveReview/:id",
                element: <PrivateRoute><GiveReview></GiveReview></PrivateRoute>,
                loader: ({params})=> axios.get(`https://serenity-haven-server-17och9bqe-raziurrahmans-projects.vercel.app/rooms/${params.id}`)
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: "/signUp",
        element: <SignUpPage></SignUpPage>,
        
    }
])

export default Router;