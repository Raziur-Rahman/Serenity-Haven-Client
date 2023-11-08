import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="mt-1">
            <div className="flex justify-center items-center min-h-screen text-center bg-bgImg bg-slate-700 bg-center bg-cover bg-blend-overlay bg-fixed overflow-hidden">

                <div className="flex flex-col justify-center items-center space-y-10">
                    <h1 className="text-6xl text-white">Welcome To Our Hotel</h1>
                    <p className="text-3xl text-white">Enjoy Seemless Comfort with us</p>
                    <div className="flex gap-5">
                        <Link><button className="btn border-white text-white btn-outline">About Us</button></Link>
                        <Link to='/rooms'><button className="px-4 py-3 rounded-md bg-amber-400">Our Rooms</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;