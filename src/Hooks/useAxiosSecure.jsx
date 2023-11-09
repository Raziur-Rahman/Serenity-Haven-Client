import axios from 'axios';

// https://serenity-haven-server-96p91pfot-raziurrahmans-projects.vercel.app
// "http://localhost:5000" 
const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;