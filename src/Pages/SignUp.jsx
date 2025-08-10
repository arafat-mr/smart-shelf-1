import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";
import signUpLottie from "../assets/signup.json.json";
import Lottie from "lottie-react";

const SignUp = () => {
  const { createUser,googleLogin,updateUser,setUser,user } = useContext(AuthContext);
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.user_name.value;
    const email = form.user_email.value;
    const password = form.password.value;
    const passwordReq = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (passwordReq.test(password)) {
      ("");
    } else {
      Swal.fire({
        title:
          "Password must contain  a Uppercase,a LowerCase and at least 6 digits",
        icon: "error",
        draggable: true,
      });
      return;
    }
    const photo = form.photo.value;
 

    // createuser
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "User Created Successfully",
          icon: "success",
          draggable: true,
        });
        updateUser({displayName:name,photoURL:photo})
        .then(()=>{
          setUser({...user,displayName:name,photoURL:photo})
        }
        ).catch(err=>{
        
          setUser(user)
        })
      navigate('/')
      })
      .catch((err) => {
        Swal.fire({
          title: `${err.message}`,
          icon: "error",
          draggable: true,
        });
      });
  };
  const handleGoogleLogIn=()=>{
    googleLogin().then(res=>{
        Swal.fire({
          title: `Welcome ${res.user.email}`,
          icon: "success",
          draggable: true,
        });
      
        navigate('/')
    }).catch(err=>{
        Swal.fire({
          title: `${err.message}`,
          icon: "error",
          draggable: true,
        })
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen bg-[url('https://i.ibb.co/Kj2LKTNz/particle-lines-futuristic-gradient-background.jpg')]  mt-15 ">
      <div className="hero-content flex-col lg:flex-row-reverse w-full rounded-xl">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-center  text-pink-500 mb-5 ">
            SignUp now!
          </h1>
          <Lottie
            animationData={signUpLottie}
            className=" w-64 lg:w-[500px]"
          ></Lottie>
        </div>
        <div className="card  bg-transparent w-full max-w-sm md:max-w-lg   shrink-0 shadow-2xl mt-3 lg:mt-0 ">
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <fieldset className="fieldset">
                <div>
                  <label className="label text-lg bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-semibold">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="input bg-transparent md:w-full"
                    placeholder="Name"
                    name="user_name"
                  />
                </div>
                <label className="label text-lg bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="input bg-transparent text-black md:w-full"
                  placeholder="Email"
                  name="user_email"
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
                  <label className="label text-lg bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-semibold">
                    Photo URL
                  </label>
                  <input
                    type="url"
                    className="input bg-transparent md:w-full"
                    placeholder="Photo URL"
                    name="photo"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-secondary btn-outline mt-4 text-pink-700 border-pink-400 hover:bg-gray-300"
                >
                  Signup
                </button>
                <div className="divider text-pink-500">OR</div>
                <button
                onClick={handleGoogleLogIn}
                  type="button"
                  className="btn btn-outline btn-secondary text-pink-700 border-pink-400 hover:bg-gray-300"
                >
                  <FaGoogle className="text-pink-600" />
                  Continue with Google
                </button>
                <div className="mx-auto mt-2 text-sm bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-semibold">
                  Already have an account? <Link to="/login">Login Now</Link>
                </div>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
