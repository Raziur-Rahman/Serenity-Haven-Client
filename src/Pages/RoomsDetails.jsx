import { useLoaderData } from "react-router-dom";


const RoomsDetails = () => {

    const LoadedData = useLoaderData();
    const roomData = LoadedData.data;

    const { _id, room_type, description, room_size, amenities, images, reviews, packages, quantity, price_per_night, special_offer, special_offer_price } = roomData;


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
                    <div className="flex justify-center gap-10 my-10">
                        <button className="px-4 py-2 btn-neutral ">Book Now </button>
                        <button className="px-4 py-2 border-2 border-base-content">Rate this Room</button>
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
                            <button className="btn w-full text-white bg-amber-500 hover:btn-outline">Book Now</button>
                        </div>
                    }
                </div>

            </div>
            <div>

            </div>

        </div>
    );
};

export default RoomsDetails;