import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/login.svg"
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {

    const {GoogleLogin, UserLogIn} = useAuth();
    const loaction = useLocation();
    const navigate = useNavigate();

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        UserLogIn( email, password)
        .then(result =>{
            toast("Login Successful!!")
            console.log(result.user);
            navigate(loaction?.state ? loaction?.state : '/')
        })
        .catch(error => {
            toast(`${error.message}`)
            console.error(error);
        })
    }

    const handleGoogleLogin =() =>{
        GoogleLogin()
        .then(result =>{
            console.log(result.user);
            toast("Login SuccessFull!!!")
            navigate(loaction?.state ? loaction?.state : '/')

        })
        .catch(error => {
            console.error(error);
            toast(`${error}`)
        })
    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex justify-between flex-col lg:flex-row">
                <div className="w-1/2 mr-10">
                    <img src={img} alt="" className="h-full" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md border bg-base-200 shadow-2xl">
                    <h1 className="text-5xl text-center mt-10 font-bold">Login!</h1>
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="card-body items-center text-center pt-0">
                        <p>Or Sign In with</p>
                        <div className="space-x-5">
                            <button onClick={handleGoogleLogin} className="btn btn-outline text-xl">
                                Log In With Google <FcGoogle></FcGoogle>
                            </button>
                        </div>
                        <p>{`Don't have an account?`} <Link className="text-[#FF3811]" to='/signUp'>Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;