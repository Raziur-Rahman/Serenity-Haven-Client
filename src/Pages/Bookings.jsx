import { Link } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import { IoReturnUpBack, IoTrashOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import ShowBookingsData from "../Components/Bookings/ShowBookingsData";
import PageTitle from "../Components/Shared/PageTitle";



const Bookings = () => {

    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();

    const url = `/bookings?email=${user?.email}`
    useEffect(() => {
        axiosSecure.get(url)
        .then(res =>{
            setBookings(res.data);
        })
    }, [url, axiosSecure])

    return (
        <div>
            <PageTitle title="Bookings"></PageTitle>
            {
                bookings.length > 0 ? <div>
                    <p className="text-7xl">Total Bookings: {bookings?.length}</p>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th>Room Name</th>
                                        <th>Room Booked</th>
                                        <th>Price</th>
                                        <th>Boarding Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bookings.map(booking => <ShowBookingsData key={booking._id} booking={booking} bookings={bookings} setBookings={setBookings}></ShowBookingsData>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex justify-between items-center my-5">
                        <Link className="flex space-x-3" to='/rooms'><span className="text-xl"><IoReturnUpBack></IoReturnUpBack></span> <span >Continue Booking</span> </Link>
                        <Link className="flex space-x-3" to='/'><span className="text-xl"><IoTrashOutline></IoTrashOutline></span> <span >Clear Bookings</span> </Link>
                    </div>
                </div> : <div className="flex justify-center my-10">
                    <span className="loading loading-bars loading-xs"></span>
                    <span className="loading loading-bars loading-sm"></span>
                    <span className="loading loading-bars loading-md"></span>
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Bookings;