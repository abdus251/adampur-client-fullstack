import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddItems = () => {
  const { register, handleSubmit, reset, formState: { errors} } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  
  const onSubmit = async (data) => {
    console.log("Form Submitted:", data);
  
    if (!data.image || data.image.length === 0) {
      Swal.fire({
        icon: "error",
        title: "ছবি যুক্ত করুন",
        text: "আপনার শিক্ষার্থীর ছবি নির্বাচন করুন।",
      });
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);
  
      console.log("Uploading image to ImgBB...");
      const res = await axiosPublic.post(image_hosting_api, formData);
      console.log("Image Upload Response:", res.data);
  
       if (res.data && res.data.success) {
        const menuItem = {
          name: data.name,
          roll: data.roll,
          birthDate: data.birthDate,
          age: data.age,
          exSchoolName: data.exSchoolName,
          grade: data.grade,
          price: parseFloat(data.price),
          paymentMode: data.paymentMode,
          currency: data.currency,
          mobile: data.mobile,
          category: data.category,
          description: data.description,
          image: res.data.data.display_url,
        };
  
        console.log("Saving menu item to database:", menuItem);
        const menuRes = await axiosSecure.post("/menu", menuItem);
        console.log("Database Response:", menuRes.data);
  
        if (menuRes.data.insertedId) {
          reset(); // Reset form
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

   // Calculate min and max birth dates based on the age range (5-16 years)
   const today = new Date();
   const minDate = new Date(today.getFullYear() - 16, today.getMonth(), today.getDate())
     .toISOString()
     .split("T")[0];
   const maxDate = new Date(today.getFullYear() - 5, today.getMonth(), today.getDate())
     .toISOString()
     .split("T")[0];
  
  
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
              lang="bn"
              placeholder="নাম"
              {...register("name", {required: true})}
              required
              className="input input-bordered w-full"
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>
            {/* roll */}
          <div className="flex gap-5">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">শিক্ষার্থীর রোল*</span>
            </label>
            <input
              type="number"
              lang="bn"
              placeholder="রোল"
              {...register("roll", {required: true})}
              required
              className="input input-bordered w-full"
            />
            {errors.roll && <span className="text-red-500">{errors.roll.message}</span>}
             </div>

             {/* date of birth */}
             <div className="form-control w-full my-6">
      <label className="label">
        <span className="label-text">জন্ম তারিখ*</span>
      </label>
      <input
        type="date"
        {...register("birthDate", {
          required: "জন্ম তারিখ অবশ্যই প্রদান করতে হবে",
          validate: (value) => {
            const birthDate = new Date(value);
            if (birthDate < new Date(minDate)) {
              return "জন্ম তারিখ খুব পুরানো, সর্বোচ্চ বয়স ১৬ বছর";
            }
            if (birthDate > new Date(maxDate)) {
              return "ভর্তির ন্যূনতম বয়স ৫ বছর";
            }
            return true;
          }
        })}
        className="input input-bordered w-full"
      />
      {errors.birthDate && <span className="text-red-500">{errors.birthDate.message}</span>}
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
              lang="bn"
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
              lang="bn"
              placeholder="পূর্ববর্তী বিদ্যালয়ের নাম"
              {...register("exSchoolName", {required: true})}
              required
              className="input input-bordered w-full"
            />
          </div>
         
          </div>
          <div className="flex gap-6">

               {/* grade Selection */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">ভর্তিকৃত শ্রেণি*</span>
            </label>
            <select
              defaultValue={"default"}
              {...register("grade", { required: "শ্রেণি নির্বাচন আবশ্যক" })}
              className="select select-bordered w-full"
            >
              <option disabled value="default">শ্রেণি নির্বাচন করুন</option>
              <option value="প্রাক-প্রাথমিক (শিশু)">প্রাক-প্রাথমিক (শিশু)</option>
              <option value="প্রথম">প্রথম</option>
              <option value="দ্বিতীয়">দ্বিতীয়</option>
              <option value="তৃতীয়">তৃতীয়</option>
              <option value="চতুর্থ">চতুর্থ</option>
              <option value="পঞ্চম">পঞ্চম</option>
            </select>
            {errors.class && <span className="text-red-500">{errors.class.message}</span>}
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

          {/*  */}
          <div className="flex gap-5">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text"> মোবাইল*</span>
            </label>
            <input
              type="number"
              lang="bn"
              placeholder="মোবাইল"
              {...register("mobile", {required: true})}
              required
              className="input input-bordered w-full"
            />
          </div>
           {/* Category Selection */}
           <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">ক্যাটাগরি*</span>
            </label>
            <select
              defaultValue={"default"}
              {...register("category", { required: "ক্যাটাগরি নির্বাচন আবশ্যক" })}
              className="select select-bordered w-full"
            >
              <option disabled value="default">ক্যাটাগরি নির্বাচন করুন</option>
              <option value="prePrimary">Pre Primary</option>
              <option value="classOne">class One</option>
              <option value="classTwo">class Two</option>
              <option value="classThree">class Three</option>
              <option value="classFour">class Four</option>
              <option value="classFive">class Five</option>
              <option value="popular">Popular</option>
            </select>
            {errors.class && <span className="text-red-500">{errors.class.message}</span>}
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
            <input {...register('image', {required: true})} type="file"  className="file-input w-full max-w-xs" />
            </div>
          <button className="btn bg-gray-800 text-white">Add Item <FaUtensils className=""/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
