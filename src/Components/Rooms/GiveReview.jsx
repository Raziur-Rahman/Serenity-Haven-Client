import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import moment from "moment";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import swal from "sweetalert";
import PageTitle from "../Shared/PageTitle";


const GiveReview = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [rate, setRate] = useState(0);
    const [bookings, setBookings] = useState(null);
    const loadedRoom = useLoaderData();
    const loadedData = loadedRoom.data;
    const navigate = useNavigate();


    const url = `/bookings?email=${user?.email}`
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                const data = res?.data;
                const matched = data.find(item => item.id === loadedData._id)
                console.log(res.data);
                setBookings(matched);
            })

    }, [url, axiosSecure, loadedData._id])

    const handleReview = () => {
        const text = document.getElementById('text').value;
        const time = moment();
        const timestamp = moment(time).toString();

        const rewiew = { user: user?.displayName, rating: rate, comment: text, timestamp }
        
        // console.log(newReviews)
        if (bookings) {
            const newReviews = [rewiew, ...loadedData.reviews]
            axiosSecure.patch(`/rooms/${loadedData._id}`, newReviews)
                .then(res => {
                    console.log(res.data)
                    navigate('/rooms');
                })
        }
        else{
            swal({
                title: "Oppss...",
                text: "You can't Give Review Without Using the Room",
                icon: "warning",
            })
            navigate('/rooms')
        }
    }

    return (
        <div className="min-h-[80vh] flex justify-center items-center">
            <PageTitle title="User Review"></PageTitle>
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">How was your experience?</span>
                        <div className="flex space-x-3">
                            <button onClick={() => setRate(1)} type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-10 h-10 ${rate >= 1 ? "dark:text-yellow-500" : "dark:text-gray-600"}`}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button onClick={() => setRate(2)} type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-10 h-10 ${rate >= 2 ? "dark:text-yellow-500" : "dark:text-gray-600"}`}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button onClick={() => setRate(3)} type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-10 h-10 ${rate >= 3 ? "dark:text-yellow-500" : "dark:text-gray-600"}`}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button onClick={() => setRate(4)} type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-10 h-10 ${rate >= 4 ? "dark:text-yellow-500" : "dark:text-gray-600"}`}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button onClick={() => setRate(5)} type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-10 h-10 ${rate >= 5 ? "dark:text-yellow-500" : "dark:text-gray-600"}`}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <textarea id="text" rows="3" placeholder="Message..." className="p-4 border rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                        <button onClick={handleReview} type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400 hover:bg-violet-600">Leave feedback</button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Link to='/'><button rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-400">Maybe later</button></Link>
                </div>
            </div>
        </div>
    );
};

export default GiveReview;