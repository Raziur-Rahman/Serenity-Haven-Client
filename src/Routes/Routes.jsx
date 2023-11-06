import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import Bookings from "../Pages/Bookings";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<HomePage></HomePage>
            },
            {
                path:'/bookings',
                element: <Bookings></Bookings>
            }
        ]
    }
])

export default Router;