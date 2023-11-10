import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import PageTitle from "../Components/Shared/PageTitle";
import Footer from "../Components/Shared/Footer";
import ShowRooms from "../Components/Rooms/ShowRooms";


const RoomsPage = () => {
    const [url, setUrl] = useState('/rooms')
    const [rooms, setRooms] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                const data = res.data;
                console.log(data);
                setRooms(data);

            })

    }, [axiosSecure, url])

    const handleSort = e => {
        e.preventDefault();
        const a = parseInt(e.target.value);
        if(a === 1){
            setUrl(`/rooms?sort=asc`)
        }
        else if(a === -1){
            setUrl(`/rooms?sort=desc`)
        }
        else{
            setUrl('/rooms')
        }

    }

    return (
        <div className="space-y-10">
            <PageTitle title={"Our Rooms"}></PageTitle>
            <div className="flex justify-center">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-xl">Sort By Price</span>
                    </label>
                    <select onChange={handleSort} className="select select-bordered">
                        <option defaultValue={0} disabled selected>Select Sorting Method</option>
                        <option value={1}>Price Low to High</option>
                        <option value={-1}>Price High to Low</option>
                    </select>
                </div>
            </div>
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