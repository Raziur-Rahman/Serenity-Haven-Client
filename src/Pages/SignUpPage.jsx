import { Link } from "react-router-dom";
import img from "../assets/login.svg"
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BiLogoLinkedin } from "react-icons/bi";


const SignUpPage = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10">
                    <img src={img} alt="" className="h-full" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md border bg-base-200 shadow-transparent">
                    <h1 className="text-5xl text-center mt-10 font-bold">Sign Up</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
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
                            <button className="btn btn-circle text-xl text-[#0A66C2]"> <FaFacebookF></FaFacebookF> </button>
                            <button className="btn btn-circle text-xl text-[#0A66C2]"><BiLogoLinkedin></BiLogoLinkedin></button>
                            <button className="btn btn-circle text-xl"><FcGoogle></FcGoogle></button>
                        </div>
                        <p>Already have an account? <Link className="text-[#FF3811]" to='/login'>Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;