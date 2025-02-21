import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import useCart from "../../hooks/useCart";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ApplicationForm = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();

  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    birthDate: "",  
    bcn: "",
    fName: "",
    mName: "",
    fNid: "",
    moNum: "",
    email: user?.email || "", 
    clas: "",
    price: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    const formData = new FormData(); // This redefines formData, overwriting state
    formData.append("image", file);
  
    try {
      const response = await axios.post(image_hosting_api, formData);
      if (response.data.success) {
        const imageUrl = response.data.data.display_url;
        setFormData((prevData) => ({ ...prevData, photo: imageUrl })); // Correct way
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  

  const handleAddToCart = (event) => {
    event.preventDefault();

    if (!user || !user.email) {
      Swal.fire({
        title: "আপনি লগইন করেন নি।",
        text: "অনুগ্রহপূর্বক লগইন করুন!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "লগইন",
        cancelButtonText: "বাতিল",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
      
      return;
    }

    axiosSecure
      .post("/student", formData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${formData.name} আপনার আবেদনটি গৃহীত হয়েছে।`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
      })
      .catch((err) => {
        Swal.fire({
          title: "ত্রুটি!",
          text: "আবেদন জমা দিতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
          icon: "error",
        });
        console.error(err);
      });
  };

  return (
    <div>
       <Helmet>
              <title>আদমপুর |  ভর্তি ফরম</title>
            </Helmet>
  <div
    className="hero min-h-screen mt-36"
    style={{
      backgroundImage:
        "url(https://img.freepik.com/free-photo/children-paint-eggs-mother-teaches-children-sitting-white-table_1157-46104.jpg?t=st=1734354938~exp=1734358538~hmac=968799a562e759f033f1d343254db960e6a631ba8ddc91ed485118b4a1c077ad&w=826)",
    }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="w-full px-4 md:px-8 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto py-12">
        <div className="font-noto-sans-bengali bg-white p-6 md:p-10 rounded-lg shadow-lg">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold text-sky-400 text-center">
            ভর্তি ফরম
          </h1>
          <section className="mt-10">
            <form onSubmit={handleAddToCart} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {/* Name */}
              <label className="input input-bordered rounded-none flex items-center gap-2 bg-sky-100">
                <input
                  type="text"
                  name="name"
                  className="grow"
                  placeholder=" শিক্ষার্থীর নাম"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>

              {/* Photo */}
              <label className="input input-bordered rounded-none flex items-center gap-2 bg-sky-100">
                <input
                  type="text"
                  name="photo"
                  className="grow"
                  placeholder=" শিক্ষার্থীর ছবি URL"
                  value={formData.photo}
                  readOnly
                />
                <input
                  type="file"
                  className="file-input w-full max-w-xs"
                  onChange={handleFileChange}
                />
              </label>

              {/* Birth Date */}
              <label className="input input-bordered rounded-none flex items-center gap-2 bg-sky-100">
                শিক্ষার্থীর জন্ম তারিখ
                <input
                  type="date"
                  name="birthDate"
                  className="grow"
                  value={formData.birthDate || ""}
                  onChange={handleChange}
                />
              </label>

              {/* Birth Certificate No */}
              <label className="input input-bordered rounded-none flex items-center gap-2 bg-sky-100">
                <input
                  type="text"
                  name="bcn"
                  className="grow"
                  placeholder="শিক্ষার্থীর ১৭ সংখ্যার জন্ম নিবন্ধন নম্বর"
                  value={formData.bcn}
                  onChange={handleChange}
                  minLength="17"
                  maxLength="17"
                  pattern="\d{17}"
                  required
                />
              </label>

              {/* Father's Name */}
              <label className="input input-bordered rounded-none flex items-center gap-2 bg-sky-100">
                <input
                  type="text"
                  name="fName"
                  className="grow"
                  placeholder="পিতার নাম"
                  value={formData.fName}
                  onChange={handleChange}
                />
              </label>

              {/* Father's NID No */}
              <label className="input input-bordered rounded-none flex items-center gap-2 bg-sky-100">
                <input
                  type="text"
                  name="fNid"
                  className="grow"
                  placeholder="পিতার জাতীয় পরিচয়পত্র নম্বর"
                  value={formData.fNid}
                  onChange={handleChange}
                  minLength="13"
                  maxLength="17"
                  pattern="\d{17}"
                />
              </label>

              {/* Mother's Name */}
              <label className="input input-bordered rounded-none flex items-center gap-2 bg-sky-100">
                <input
                  type="text"
                  name="mName"
                  className="grow"
                  placeholder="মাতার নাম"
                  value={formData.mName}
                  onChange={handleChange}
                />
              </label>

              {/* Mother's NID No */}
              <label className="input input-bordered rounded-none flex items-center gap-2 bg-sky-100">
                <input
                  type="text"
                  name="mNid"
                  className="grow"
                  placeholder="মাতার জাতীয় পরিচয়পত্র নম্বর"
                  value={formData.mNid}
                  onChange={handleChange}
                  minLength="13"
                  maxLength="17"
                  pattern="\d{17}"
                />
              </label>

              {/* Mobile Number */}
              <label className="input input-bordered rounded-none flex items-center gap-2 bg-sky-100">
                <input
                  type="text"
                  name="moNum"
                  className="grow"
                  placeholder="মোবাইল নম্বর"
                  value={formData.moNum}
                  onChange={handleChange}
                  minLength="11"
                  maxLength="11"
                  pattern="\d{11}"
                  title="অনুগ্রহপূর্বক ১১ সংখ্যার সঠিক মোবাইল নম্বর দিন।"
                />
              </label>

              {/* Email */}
              <label className="input input-bordered rounded-none flex items-center gap-2 bg-sky-100">
                <input
                  type="email"
                  name="email"
                  className="grow"
                  placeholder="ইমেইল"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>

              {/* Class */}
              <label className="input input-bordered rounded-none flex items-center gap-2 bg-sky-100">
                <input
                  type="number"
                  name="clas"
                  className="grow"
                  placeholder="যে শ্রেণিতে ভর্তি হতে ইচ্ছুক"
                  value={formData.clas}
                  onChange={handleChange}
                />
              </label>

              {/* Price */}
              <label className="input input-bordered rounded-none flex items-center gap-2 bg-sky-100">
                <input
                  type="text"
                  name="price"
                  className="grow"
                  placeholder="উন্নয়ন ফি (টাকা)"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </label>

              {/* Submit Button */}
              <div className="col-span-1 md:col-span-2">
                <button type="submit" className="btn w-full rounded-none bg-black text-white">
                  জমা দিন
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default ApplicationForm;
