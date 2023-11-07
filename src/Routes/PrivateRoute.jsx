import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <div className="flex justify-center">
            <progress className="progress w-56"></progress>
        </div>
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login' replace ></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes ={
    children: PropTypes.node
}