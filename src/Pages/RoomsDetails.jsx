import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import ShowReview from "../Components/Rooms/ShowReview";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAxiosSecure from "../Hooks/useAxiosSecure";

const RoomsDetails = () => {

    const { user } = useAuth();
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});
    const axiosSecure = useAxiosSecure();

    const LoadedData = useLoaderData();
    const roomData = LoadedData.data;
    const navigate = useNavigate();

    const { _id, room_type, description, room_size, amenities, images, reviews, quantity, price_per_night, special_offer, special_offer_price } = roomData;

    const handleBook = event => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const totalRoom = form.number.value;
        const totalPrice = price_per_night * totalRoom;
        const info = { roomName: room_type, email: user?.email, reservetionDate: date, totalRoom, id: _id, totalPrice, images };
        setData(info);
        if (user) {
            document.getElementById('my_modal_5').showModal();
        }
        else {
            toast("Before Booking You Need Log In Our WebSite");
            navigate("/login")
        }
        console.log(date, totalRoom);
        setShow(!show)
    }

    const handleConfirm = () => {
        console.log("hit the button")
        const updatedQuantity = quantity - data.totalRoom;

        axiosSecure.post("/bookings", data)
            .then(res => {
                console.log(res.data);
                if (res?.data?.insertedId) {
                    toast("Your Order Confirmed..");
                    axiosSecure.patch(`/rooms/${_id}`, updatedQuantity)
                        .then(res => {
                            console.log(res.data)
                            navigate('/bookings');
                        })
                }
            });
    }


    return (
        <div>
            <div className="min-h-screen flex flex-col justify-center items-center bg-center bg-cover bg-fixed rounded-lg " style={{ backgroundImage: `URL('${images[1]}')` }}>
                {/* <img src={images[1]} alt="" /> */}
                <div className=" lg:w-1/3 text-center space-y-5">
                    <h1 className="text-2xl lg:text-4xl text-amber-700 font-bold">{room_type}</h1>
                    <p className="text-xl lg:text-2xl text-blue-700 font-bold">{description}</p>
                </div>

            </div>
            <div className="bg-base-300 flex flex-col-reverse md:flex-row rounded-lg my-2 py-10">
                <div className="w-1/2 p-10">
                    <div className="grid grid-cols-2 gap-10">
                        <h1><span className="text-xl">Room Size:</span> {room_size}</h1>
                        <h2><span className="text-xl">Price Per Night:</span> {price_per_night}</h2>
                        <h1><span className="text-xl">Availablity:</span> {quantity}</h1>
                        <p><span className="text-xl">Reviews:</span> {reviews.length}</p>
                    </div>
                    {/* Getting input */}
                    <div className={`my-10 ${!show ? "hidden" : ""}`}>
                        <form onSubmit={handleBook}>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Enter Date</span>
                                    </label>
                                    <input type="date" name="date" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Enter Room Quantity</span>
                                    </label>
                                    <input type="number" name="number" placeholder="How Much Room" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Confirm Booking</button>
                            </div>
                        </form>
                    </div>
                    <div className={`flex justify-center gap-10 my-10 ${!show ? "" : "hidden"}`}>
                        <button onClick={() => setShow(!show)} className="px-4 py-2 btn-neutral ">Book Now</button>
                        <Link to={`/giveReview/${_id}`}><button className="px-4 py-2 border-2 border-base-content">Rate this Room</button></Link>
                    </div>

                </div>
                <div className="w-1/2 p-10">
                    <h1 className="text-3xl">Amenities: </h1>
                    <ul className="list-item list-inside space-y-2 indent-10 text-xl">
                        {
                            amenities.map((item, index) => <li className="list-decimal" key={index}>{item}</li>)
                        }
                    </ul>

                    {
                        special_offer && <div className="space-y-2">
                            <h1 className="text-3xl text-center font-bold text-amber-600">Special Offer</h1>
                            <h1 className="text-xl">{special_offer}</h1>
                            <p>Offer Price: {special_offer_price}</p>
                            <button className="btn w-full text-white bg-amber-500 hover:btn-outline">get offer</button>
                        </div>
                    }
                </div>

            </div>
            <div className="flex flex-grow justify-center items-center gap-5 my-5">
                {
                    reviews.map((item, index) => <ShowReview key={index} review={item}></ShowReview>)
                }
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <img className="w-[400]" src={images[0]} alt="" />
                    <h3 className="font-bold text-2xl">{room_type}</h3>
                    <p className="py-4">{description}</p>
                    <div className="flex justify-between">
                        <h1 className="text-lg">Booking date: {data.reservetionDate}</h1>
                        <h2 className="text-lg">Total Price: {price_per_night * data.totalRoom}</h2>
                    </div>
                    <div className="modal-action">
                        <button onClick={handleConfirm} className="btn btn-outline">Confirm</button>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default RoomsDetails;