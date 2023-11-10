import axios from 'axios';

// https://serenity-haven-server-17och9bqe-raziurrahmans-projects.vercel.app
// "http://localhost:5000" 
const axiosSecure = axios.create({
    baseURL: "https://serenity-haven-server-17och9bqe-raziurrahmans-projects.vercel.app",
    withCredentials: true
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;