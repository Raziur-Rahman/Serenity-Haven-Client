import { Outlet } from "react-router-dom";
import Navber from "../Components/Shared/Navber";


const MainLayout = () => {
    return (
        <div className="w-5/6 mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;