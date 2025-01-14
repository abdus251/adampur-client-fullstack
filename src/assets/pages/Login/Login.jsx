import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";

const Login = () => {
// const [disabled, setDisabled] = useState(true); 
const {signIn} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();

const from = location.state?.from?.pathname || "/";
console.log('state in the location login page', location.state)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          Swal.fire({
            title: "User Login Successful.",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from, { replace: true});
        })
    }
  return (
    <>
      <Helmet>
        <title>আদমপুর সপ্রাবি | লগইন</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen  font-noto-sans-bengali">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left pl-5">
            <h1 className="text-5xl font-bold ">লগইন</h1>
            <p className="py-6">
             বিদ্যালয় প্রদত্ত সকল পরিসেবা গ্রহণ করার জন্য অনুগ্রহপূর্বক লগইন করুন। 
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">ইমেইল</span>
                </label>
                <input type="email" name="email" placeholder="ইমেইল" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">পাসওয়ার্ড</span>
                </label>
                <input type="password" name="password" placeholder="পাসওয়ার্ড" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">পাসওয়ার্ড ভুলে গেছেন?</a>
                </label>
              </div>
              <div className="form-control">
                {/* <label className="label">
                  <LoadCanvasTemplate />
                </label> */}
                {/* <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" required /> */}
              </div>
              <div className="form-control mt-6">
                {/* TODO make button disable for captcha */}
                <input disabled={false} className="btn bg-sky-400 text-white" type="submit" value="লগইন" />
              </div>
            </form>
            <p className="pl-8 pb-4">
              <small >এই ওয়েবসাইটে নতুন? <Link to="/signup"><span className="text-orange-400 font-bold">একাউন্ট তৈরি করুন</span></Link></small>

            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login