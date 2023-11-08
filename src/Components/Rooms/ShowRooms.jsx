import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const ShowRooms = ({roomData}) => {

    const {room_type, reviews, description} = roomData;

    return (
        <div>
            <div className="card lg:card-side bg-base-300 my-8 overflow-hidden shadow-xl">
                <Link><figure><img className="h-[350px] md:h-full lg:h-[500px] lg:w-[700px]" src={roomData.images[0]} /></figure></Link>
                <div className="card-body">
                    <h2 className="card-title text-5xl mb-5">{room_type}</h2>
                    <p className="text-2xl">{description}</p>
                    <p className="text-xl">Total Reviews: {reviews.length}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowRooms;

ShowRooms.propTypes = {
    roomData: PropTypes.object
}
