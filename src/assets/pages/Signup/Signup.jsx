import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import SocialLogin from '../../../components/SocialLogin/SocialLogin';

const Signup = () => {
  const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

const onSubmit = data => {
    // console.log(data)
    createUser(data.email, data.password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name)
        .then(() => {
// create user entry in the database
const userInfo = {
  name: data.name,
  email: data.email
}
axiosPublic.post('/users', userInfo )
.then(res =>{
  if(res.data.insertedId){
    console.log('user added to the database')
    reset();
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "সফলভাবে ইউসার তৈরি হয়েছে।",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/');
  }
})
        })
        .catch(error => console.log(error))
    })
};


   return (
      <>
        <Helmet>
          <title>আদমপুর সপ্রাবি | সাইনআপ</title>
        </Helmet>

        <div className="hero min-h-screen bg-base-200 font-noto-sans-bengali mt-36">
          <div className="hero-content flex-col md:flex-row-reverse">
            <div className="text-center md:w-1/2 lg:text-left">
              <h1 className="text-5xl font-bold"> সাইনআপ</h1>
              <p className="py-6">
               বিদ্যালয় প্রদত্ত সকল পরিসেবা গ্রহণ করার জন্য অনুগ্রহপূর্বক সাইনআপ করুন। 
              </p>
            </div>
            <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100 mt-5">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
  <label className="label">
    <span className="label-text">নাম</span>
  </label>
  <input type="text" {...register("name", { required: true })} 
  name='name'
    placeholder="নাম" 
    className="input input-bordered" 
  />
  {errors.name && <span className="text-red-500">নাম অবশ্যই দিতে হবে!</span>}
</div>
     <div className="form-control">
                  <label className="label">
                    <span className="label-text">ইমেইল</span>
                  </label>
                  <input type="email" {...register("email", { required: true })} name="email" placeholder="ইমেইল" className="input input-bordered" required />
                  {errors.email && <span className="text-red-500">ইমেইল দেয়া আবশ্যক!</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">পাসওয়ার্ড</span>
                  </label>
                  <input type="password" {...register("password", {required:true, minLength: 6,
                  maxLength: 20 })} name="password" placeholder="পাসওয়ার্ড" className="input input-bordered" />  
                  {errors.password?.type === 'required' && <span className="text-red-500">পাসওয়ার্ড দেয়া আবশ্যক!</span>}
                  
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
                  <input disabled={false} className="btn bg-sky-400 text-white" type="submit" value="সাইনআপ" />
                </div>
              </form>
              <p className="pl-8 pb-4">
                <small >এই ওয়েবসাইটে পূর্বে সাইনআপ করে থাকলে, <Link to="/login"><span className="text-orange-400 font-bold">লগইন করুন</span></Link></small>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </>
    )
}

export default Signup