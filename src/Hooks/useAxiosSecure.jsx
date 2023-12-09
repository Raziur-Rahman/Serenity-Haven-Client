import axios from 'axios';

// https://serenity-haven-server.vercel.app
// "http://localhost:5000" 
const axiosSecure = axios.create({
    baseURL: "https://serenity-haven-server.vercel.app",
    withCredentials: true
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;