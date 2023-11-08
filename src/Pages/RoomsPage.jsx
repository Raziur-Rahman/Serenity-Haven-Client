import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import PageTitle from "../Components/Shared/PageTitle";
import Footer from "../Components/Shared/Footer";
import ShowRooms from "../Components/Rooms/ShowRooms";


const RoomsPage = () => {

    const [rooms, setRooms] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const url = '/rooms'
        axiosSecure.get(url)
            .then(res => {
                const data = res.data;
                console.log(data);
                setRooms(data);

            })

    }, [axiosSecure])

    return (
        <div className="space-y-10">
            <PageTitle title={"Our Rooms"}></PageTitle>
            <div>
                {
                    rooms?.map(item => <ShowRooms key={item._id} roomData={item}></ShowRooms>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RoomsPage;