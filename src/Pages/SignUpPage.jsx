import { Link, useNavigate } from "react-router-dom";
import img from "../assets/login.svg"
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "../Components/Shared/PageTitle";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const SignUpPage = () => {

    const { UserRegitration, GoogleLogin } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        UserRegitration(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast("User created Successfuly....")

                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })
                const tokenUser = { email }
                // Get Jwt Token
                axiosSecure.post('/jwt', tokenUser)
                    .then(res => {
                        console.log(res?.data);
                        if (res?.data?.Success) {
                            navigate('/')
                        }
                    })
            })
            .catch(error => {
                console.error(error);
                toast("Registration failed...")
            })
    }

    const handleGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                console.log(result.user);
                toast("Login SuccessFull!!!")
                const user = { email: result?.user?.email }
                // Get Jwt Token
                axiosSecure.post('/jwt', user)
                    .then(res => {
                        console.log(res?.data);
                        if (res?.data?.Success) {
                            navigate('/')
                        }
                    })
            })
            .catch(error => {
                console.error(error);
                toast(`${error}`)
            })
    }


    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10">
                    <img src={img} alt="" className="h-full" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md border bg-base-200 shadow-transparent">
                    <h1 className="text-5xl text-center mt-5 font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body py-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                        </div>
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
                            <button className="btn btn-primary">Sign Up</button>
                        </div>

                    </form>
                    <div className="card-body items-center text-center pt-0">
                        <p>Or Sign In with</p>
                        <div className="space-x-5">
                            <button onClick={handleGoogleLogin} className="btn btn-outline text-xl">Log in with <FcGoogle></FcGoogle></button>
                        </div>
                        <p>Already have an account? <Link className="text-[#FF3811]" to='/login'>Login</Link> </p>
                    </div>
                </div>
            </div>
            <PageTitle title={"SignUp"}></PageTitle>
        </div>
    );
};

export default SignUpPage;