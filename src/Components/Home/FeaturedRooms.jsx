

const FeaturedRooms = () => {
    return (
        <div>
            <div className="text-center my-6 lg:w-1/3 mx-auto">
                <h1 className="text-4xl text-amber-500 font-bold">Featured Rooms</h1>
                <p className="pt-5 text-xl font-semibold">Stay With Us and Experince Effortless Comfort</p>
            </div>
            <div className="flex min-h-screen my-5 px-32">
                <div className="w-2/5 mt-5 md:mt-40 justify-center items-center">
                    <h1 className="text-5xl">Deluxe Double Room </h1>
                    <p className="text-2xl">A spacious room with a queen-sized bed, ideal for couples.</p>
                    <ul>
                        <li>Room Sizes: 200 Sqf</li>
                    </ul>

                </div>
                <div className="flex-1  bg-bgImg_3 bg-center bg-cover bg-fixed">

                </div>
            </div>
            
        </div>
    );
};

export default FeaturedRooms;