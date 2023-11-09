import swal from "sweetalert";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { GrDocumentUpdate } from "react-icons/gr";
import 'react-toastify/dist/ReactToastify.css';

const ShowBookingsData = ({ booking, bookings, setBookings }) => {

    const { roomName, reservetionDate, totalRoom, id, totalPrice, images, _id } = booking;

    const handleCancle = id => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    fetch(`http://localhost:5000/bookings/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data?.deletedCount > 0) {
                                swal("Your Booking Has Been Canceled", {
                                    icon: "success",
                                });
                                const remaining = bookings.filter(item => item._id !== id);
                                setBookings(remaining);
                            }
                        })
                } else {
                    swal("Product Is Safe!!");
                }
            });
    }

    const handleUpdate  = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0 ){
                toast("Status Updated Succesfully")
                const remaining = bookings.filter(item => item._id !== id);
                const updated = bookings.find(item => item._id === id);
                updated.reservetionDate = "2023-11-12" ;
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);

            }
        })
    }


    return (
        <tr>
            <th>
                <button title="Cancle Booking" onClick={() => handleCancle(_id)} className="btn btn-circle btn-sm">X</button>
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
                <button title="Update Date" onClick={handleUpdate} className="btn btn-circle text-xl"><GrDocumentUpdate></GrDocumentUpdate></button>
            </th>
        </tr>
    );
};

export default ShowBookingsData;

ShowBookingsData.propTypes = {
    booking: PropTypes.object,
    bookings: PropTypes.array,
    setBookings: PropTypes.function
}