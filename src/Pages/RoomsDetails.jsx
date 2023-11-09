import { useLoaderData } from "react-router-dom";


const RoomsDetails = () => {

    const LoadedData = useLoaderData();
    console.log(LoadedData.data);


    return (
        <div>
            
            
        </div>
    );
};

export default RoomsDetails;