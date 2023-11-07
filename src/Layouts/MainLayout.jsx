import { Outlet } from "react-router-dom";
import Navber from "../Components/Shared/Navber";
// import Footer from "../Components/Shared/Footer";


const MainLayout = () => {
    return (
        <div className="px-5 lg:w-5/6 lg:mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;