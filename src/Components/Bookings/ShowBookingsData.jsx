import swal from "sweetalert";
import PropTypes from 'prop-types';
import { GrDocumentUpdate } from "react-icons/gr";
import 'react-toastify/dist/ReactToastify.css';
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ShowBookingsData = ({ booking, bookings, setBookings }) => {


    const { roomName, reservetionDate, totalRoom, totalPrice, images, _id } = booking;
    const axiosSecure = useAxiosSecure();

    // Handle Cancel
    const handleCancle = deleteId => {
        console.log(deleteId);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosSecure.delete(`/bookings/${deleteId}`)
                        .then(res => {
                            const data = res.data;
                            console.log(data)
                            if (data?.deletedCount > 0) {
                                swal("Your Booking Has Been Canceled...", {
                                    icon: "success",
                                });
                                const remaining = bookings.filter(item => item._id !== _id);
                                setBookings(remaining);
                            }
                        })
                } else {
                    swal("Booking Is Retain!!");
                }
            });
    }

    const handleUpdate = () => {
        document.getElementById('my_modal_5').classList.add('modal-open');
    }

    const handleClose = () => {
        document.getElementById('my_modal_5').classList.remove("modal-open");
    }

    const handleConfirm = id => {
        document.getElementById('my_modal_5').classList.remove("modal-open");
        const newDate = document.getElementById("newdate").value;
        const updatedInfo = { reservetionDate: newDate };
        console.log(id, newDate);
        axiosSecure.patch(`/bookings/${id}`, updatedInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {

                    if (bookings.length > 1) {
                        const remening = bookings.filter(item => item._id !== id);
                        const updatedBook = bookings.find(item => item._id === id);
                        updatedBook.reservetionDate = newDate;
                        const newB = [updatedBook, ...remening];
                        setBookings(newB);
                        swal("Date Update successfull");
                    }
                    else {
                        console.log(booking);
                        const newB = { ...booking };
                        newB.reservetionDate = newDate;
                        setBookings([newB]);
                    }
                }
            })
    }


    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={images} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{roomName}</div>
                    </div>
                </div>
            </td>
            <td>
                {totalRoom}
            </td>
            <td>
                ${totalPrice}
            </td>
            <td>{reservetionDate}</td>
            <th>
                <button title="Cancle Booking" onClick={() => handleCancle(_id)} className="btn btn-circle mr-5">X</button>
                <button title="Update Date" onClick={handleUpdate} className="btn btn-circle text-xl"><GrDocumentUpdate></GrDocumentUpdate></button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <img className="w-[400]" src={images[0]} alt="" />
                        <h3 className="font-bold text-2xl">{roomName}</h3>
                        {/* <p className="py-4">{description}</p> */}
                        <div className="flex justify-between">
                            <h1 className="text-lg">Booked Rooms: {totalRoom}</h1>
                            <h2 className="text-lg">Total Price: {totalPrice}</h2>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Reservation Date</span>
                            </label>
                            <input id="newdate" type="date" name="date" defaultValue={reservetionDate} className="input input-bordered" />
                        </div>
                        <div className="modal-action space-x-5">
                            <button onClick={() => handleConfirm(_id)} className="btn btn-outline">Confirm</button>
                            <button onClick={handleClose} className="btn btn-error">Cancel</button>
                        </div>
                    </div>
                </dialog>
            </th>
        </tr>
    );
};

export default ShowBookingsData;

ShowBookingsData.propTypes = {
    booking: PropTypes.node,
    bookings: PropTypes.node,
    setBookings: PropTypes.node
}