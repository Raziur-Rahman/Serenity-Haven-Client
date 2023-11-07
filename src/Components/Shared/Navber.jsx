import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";


const Navber = () => {

    const { user } = useAuth();

    const navlinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/bookings'>My Bookings</Link></li>
    </>

    return (
        <div className="mt-2">
            <div className="navbar bg-base-100 py-5 shadow-2xl rounded-md items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <div title="Serenity Haven" className="flex justify-center items-center">
                        <img className="w-[50px] rounded-full" src="https://i.ibb.co/swq5B4c/Logo-1.png" alt="" />
                        <Link className="btn btn-ghost normal-case text-xl">Serenity Haven</Link>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link>Profile</Link></li>
                                <li><Link>LogOut <span><IoLogOutOutline></IoLogOutOutline></span></Link></li>
                            </ul>
                        </div> : <div>
                            <Link to='/login'>
                                <button type="button" className="px-5 py-3 flex items-center hover:bg-amber-500 font-semibold border rounded "><span className="text-2xl mr-1"> <IoLogInOutline></IoLogInOutline></span> Log In</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;