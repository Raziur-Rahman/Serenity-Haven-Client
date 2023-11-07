import { Outlet } from "react-router-dom";
import Navber from "../Components/Shared/Navber";


const MainLayout = () => {
    return (
        <div className="px-5">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;