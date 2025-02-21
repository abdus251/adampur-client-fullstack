import React from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router-dom';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const {_id, name, roll_number, age, exSchoolName,date_of_birth, price, description,  currency,  paymentMode } = useLoaderData();
  const loaderData = useLoaderData();
console.log("Loader Data:", loaderData);

    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log("Form Data:", data);
        
        // Image upload
        const formData = new FormData();
        formData.append("image", data.photo_url[0]);
    
        try {
          const res = await axiosPublic.post(image_hosting_api, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          console.log("Image Upload Response:", res);
    
          if (res.data && res.data.success) {
            const menuItem = {
              name: data.name,
              grade: data.grade,
              age:data.age,
              category: data.category,
              price: parseFloat(data.price), 
              description: data.description,      
              image: res.data.data.display_url, 
              currency: data.currency,      
              isOptional: true,             
              paymentMode: data.paymentMode,
              remarks: data.remarks,        
            };
          
            
            // now send the nenu item to the server with the image url  to the database
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            if (menuRes.data.modifiedCount > 0) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} has been updated to the menu.`,
                showConfirmButton: false,
                timer: 1500,
              });
              // reset()
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the menu.`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          } else {
            throw new Error("Image upload failed");
          }
        } catch (error) {
          console.error("Error:", error);
          Swal.fire({
            icon: "error",
            title: "Operation Failed",
            text: "Please try again.",
          });
        }
      };
   
  return (
    <div>
        <div>
        <div className='font-noto-sans-bengali'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-3xl text-center text-sky-400">শিক্ষার্থীর তথ্য সংশোধন করুন</h1>
            {/* name */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">শিক্ষার্থীর নাম*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="নাম"
              {...register("name", {required: true})}
              required
              className="input input-bordered w-full"
            />
          </div>
            {/* roll */}
          <div className="flex gap-5">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">শিক্ষার্থীর রোল*</span>
            </label>
            <input
              type="number"
              defaultValue={roll_number}
              placeholder="রোল"
              {...register("roll", {required: true})}
              required
              className="input input-bordered w-full"
            />
             </div>
             <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">জন্ম তারিখ*</span>
            </label>
            <input
              type="date"
              placeholder="জন্ম তারিখ"
              {...register("date_of_birth",
              {required: true})}
              defaultValue={date_of_birth}
            
              className="input input-bordered w-full"
            />
          
          </div>
          </div>
          {/* age  */}
          <div className="flex gap-5">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">শিক্ষার্থীর বয়স*</span>
            </label>
            <input
              type="number"
              defaultValue={age}
              placeholder="বয়স"
              {...register("age", {required: true})}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">পূর্ববর্তী বিদ্যালয়ের নাম (যদি থাকে)*</span>
            </label>
            <input
              type="text"
              defaultValue={exSchoolName}
              placeholder="পূর্ববর্তী বিদ্যালয়ের নাম"
              {...register("exSchoolName", {required: true})}
              required
              className="input input-bordered w-full"
            />
          </div>
         
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">ভর্তিকৃত শ্রেণি*</span>
              </label>
              <select defaultValue={"category"}
                {...register("category", {required: true})}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  শ্রেণি নির্বাচন করুন
                </option>
                <option value="donate">প্রাক-প্রাথমিক (শিশু)</option>
                <option value="logo">প্রথম</option>
                <option value="scoutFee">দ্বিতীয় </option>
                <option value="partyFee">তৃতীয়</option>
                <option value="tourFee">চতুর্থ</option>
                <option value="tourFee">পঞ্চম</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">অনুদানের (টাকার) পরিমাণ*</span>
              </label>
              <input
                type="number"
                placeholder="টাকা"
                defaultValue={price}
                {...register("price",{required: true})}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* currency and payment mood */}
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">প্রদানের মাধ্যম*</span>
              </label>
              <select defaultValue={paymentMode}
                {...register("paymentMode", {required: true})}
                className="select select-bordered w-full"
              >
                <option value="" disabled>
                  {" "}
                  Select a payment mode
                </option>
                <option value="donate">নগদ</option>
                <option value="logo">ব্যাংকের মাধ্যমে</option>
                <option value="scoutFee">অনলাইনের মাধ্যমে </option>
              </select>
            </div>
            
            {/* currency */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">মুদ্রা*</span>
              </label>
              <input
                type="text"
                placeholder="মুদ্রা (যেমন, BDT)"
                defaultValue={currency}
                {...register("currency",{required: true})}
                className="input input-bordered w-full"
              />
            </div>
          
          </div>
           {/*  description */}
           <label className="form-control">
              <div className="label">
                <span className="label-text">বিস্তারিত </span>
              </div>
              <textarea {...register('description')} className="textarea textarea-bordered h-24"
                placeholder="বিস্তারিত"
                defaultValue={description}
              ></textarea>
            </label>
            <div className="form-control w-full my-6">
              ছবি যুক্ত করুন
            <input type="file" {...register('photo_url', {required: true})}
            className="file-input w-full max-w-xs" />
            </div>
          <button className="btn bg-gray-800 text-white">Update Menu Item</button>
        </form>
      </div>
          </div>
    </div>
  )
}

export default UpdateItem

