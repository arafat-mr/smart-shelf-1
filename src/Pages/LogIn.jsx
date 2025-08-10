import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";
import logInLottie from '../assets/logIn.json.json'
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";
const LogIn = () => {
  const navigate = useNavigate()
  const location=useLocation()
  
  const {logIn,googleLogin}= useContext(AuthContext)
const handleSubmit=(e)=>{

e.preventDefault()
const form=e.target
const email=form.email.value
const password= form.password.value

// login 

 logIn(email,password)
 .then(res=>{
  Swal.fire({
          title:`Welcome ${res.user.email}`,
          icon: "success",
          draggable: true,
        });
              navigate(`${location.state? location.state: '/'}`)
 }).catch(err=>{
  Swal.fire({
          title:`Wrong credentials `,
          icon: "error",
          draggable: true,
        });
 })
  
}
const handleGoogleLogIn=()=>{
    googleLogin().then(res=>{
        Swal.fire({
          title: `Welcome ${res.user.email}`,
          icon: "success",
          draggable: true,
        });
         navigate(`${location.state? location.state: '/'}`)
    }).catch(err=>{
        Swal.fire({
          title: `${err.message}`,
          icon: "error",
          draggable: true,
        })
    })
  }
  return (
    <div className="hero bg-base-200 lg:min-h-screen bg-[url('https://i.ibb.co/Kj2LKTNz/particle-lines-futuristic-gradient-background.jpg')] mt-15 ">
    <div className="hero-content flex-col lg:flex-row-reverse w-full rounded-xl">
        <div className="text-center">
      <h1 className="text-5xl font-bold text-center  text-pink-500 mb-5 ">Login now!</h1>
          <Lottie  className=' w-64 lg:w-[400px]' animationData={logInLottie}></Lottie>
        </div>
        <div className="card  bg-transparent w-full max-w-sm md:max-w-md  shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit}>
  <div className="card-body">
            <fieldset className="fieldset">
              <label className="label text-lg bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-semibold">
                Email
              </label>
              <input
                type="email"
                className="input bg-transparent text-black md:w-full"
                placeholder="Email"
                name="email"
              />
              <label className="label text-lg bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-semibold">
                Password
              </label>
              <input
                type="password"
                className="input bg-transparent md:w-full"
                placeholder="Password"
                name="password"
              />
              <div>
                <a className="link link-hover text-lg bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-semibold">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="btn btn-secondary btn-outline mt-4 text-pink-700 border-pink-400 hover:bg-gray-300">
                Login
              </button>
               <div className="divider text-pink-500">OR</div>
              <button onClick={handleGoogleLogIn} type="button" className="btn btn-outline btn-secondary bg-transparent text-lg text-pink-700 border-pink-400 hover:bg-gray-300">
                            <FaGoogle className="text-pink-600"/>
                              Continue  with Google
                            </button>
              <div className="mx-auto mt-2 text-sm bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-semibold">Don't have an account? <Link to='/signup'>Register Now</Link></div>
            </fieldset>
          </div>
            </form>
        
        </div>
      </div>
    </div>
  );
};

export default LogIn;
