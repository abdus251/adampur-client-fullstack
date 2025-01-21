
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  // const onSubmit = async (data) => {
  //   console.log("Form Data:", data);
    
  //   // Image upload to imagebb
  //   const imageFile = { image: data.image[0] }
   

  //   try {
  //     const res = await axiosPublic.post(image_hosting_api, imageFile, {
  //       headers: { 'Content-Type': 'multipart/form-data' },
  //     });
  //     console.log(res.data);

  //     if (res.data && res.data.success) {
  //       const menuItem = {
  //         name: data.name,
  //         name: data.roll,
  //         name: data.date,
  //         name: data.age,
  //         category: data.category,
  //         price: parseFloat(data.price), 
  //         description: data.description, 
  //         image: res.data.data.display_url         
  //       };
      
  //       // Further API call to save menuItem to the database
  //       const menuRes = await axiosSecure.post('/menu', menuItem);
  //       console.log(menuRes.data)
  //       if (menuRes.data.insertedId) {
  //         // show success popup
  //         reset();
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: `${data.name} has been added successfully.`,
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //         reset()
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: `${data.name} is added to the menu.`,
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     } else {
  //       throw new Error("Image upload failed");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Operation Failed",
  //       text: "Please try again.",
  //     });
  //   }
  // };
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);
  
      // Upload image to image hosting service
      const res = await axiosPublic.post(image_hosting_api, formData);
      if (res.data && res.data.success) {
        const menuItem = {
          name: data.name,
          roll: data.roll,
          birthDate: data.birthDate,
          age: data.age,
          category: data.category,
          price: parseFloat(data.price),
          description: data.description,
          image: res.data.data.display_url,
        };
  
        // Save menu item to the database
        const menuRes = await axiosSecure.post("/menu", menuItem);
        if (menuRes.data.insertedId) {
          reset(); // Reset the form
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} has been added successfully.`,
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
        title: "অপারেশন ব্যর্থ",
        text: "দয়া করে আবার চেষ্টা করুন।",
      });
    }
  };
  
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-3xl text-center text-sky-400">নতুন শিক্ষার্থী যুক্ত করুন</h1>
            {/* name */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">শিক্ষার্থীর নাম*</span>
            </label>
            <input
              type="text"
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
              {...register("roll", {required: true})}
              required
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
              <select defaultValue={"default"}
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
              <select
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
              ></textarea>
            </label>
            <div className="form-control w-full my-6">
              ছবি যুক্ত করুন
            <input type="file" {...register('image', {required: true})} className="file-input w-full max-w-xs" />
            </div>
          <button className="btn bg-gray-800 text-white">যুক্ত করুন <FaUtensils className=""/></button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
