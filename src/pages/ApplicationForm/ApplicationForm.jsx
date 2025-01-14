import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import useCart from "../../hooks/useCart";
import axios from "axios";

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
    bcn: "",
    fName: "",
    mName: "",
    fNid: "",
    moNum: "",
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

  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.post(image_hosting_api, formData);
    if (response.data.success) {
      const imageUrl = response.data.data.display_url;
      setFormData((prevData) => ({ ...prevData, photo: imageUrl }));
      Swal.fire({
        title: "Image Uploaded!",
        text: "Your image has been successfully uploaded.",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Upload Failed",
        text: "There was an issue uploading your image. Please try again.",
        icon: "error",
      });
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    Swal.fire({
      title: "Error",
      text: "Failed to upload the image. Please try again later.",
      icon: "error",
    });
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
      <div
        className="hero min-h-screen mt-36"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/children-paint-eggs-mother-teaches-children-sitting-white-table_1157-46104.jpg?t=st=1734354938~exp=1734358538~hmac=968799a562e759f033f1d343254db960e6a631ba8ddc91ed485118b4a1c077ad&w=826)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="w-5/12 pb-20">
          <div className="font-noto-sans-bengali">
            <h1 className="mb-5 text-5xl font-bold pt-10 text-sky-400 ">ভর্তি ফরম</h1>
            <section className="mt-20">
              <form onSubmit={handleAddToCart}>
                {/* Name */}
                <label className="input input-bordered rounded-none pb-2 flex items-center gap-2 bg-sky-100">
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

                {/* birth certificate no */}
                <label className="input input-bordered rounded-none pb-2 flex items-center gap-2 bg-sky-100">
                  শিক্ষার্থীর জন্ম তারিখ
                  <input
                    type="date"
                    name="birthDate"
                    className="grow"
                    value={formData.birthDate || ""} // Ensures it doesn't show `undefined`
                    onChange={handleChange}
                  />
                </label>
                {/* birth certificate no */}
                <label className="input input-bordered rounded-none pb-2 flex items-center gap-2 bg-sky-100">
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
                {/* father's name */}
                <label className="input input-bordered rounded-none pb-2 flex items-center gap-2 bg-sky-100">
                  <input
                    type="text"
                    name="fName"
                    className="grow"
                    placeholder="পিতার নাম"
                    value={formData.fName}
                    onChange={handleChange}
                  />
                </label>
                {/* father's nid no */}
                <label className="input input-bordered rounded-none pb-2 flex items-center gap-2 bg-sky-100">
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
                {/* mother's name */}
                <label className="input input-bordered rounded-none pb-2 flex items-center gap-2 bg-sky-100">
                  <input
                    type="text"
                    name="mName"
                    className="grow"
                    placeholder="মাতার নাম"
                    value={formData.mName}
                    onChange={handleChange}
                  />
                </label>
                {/* mother's nid no */}
                <label className="input input-bordered rounded-none pb-2 flex items-center gap-2 bg-sky-100">
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
                {/* mobile number */}
                <label className="input input-bordered rounded-none pb-2 flex items-center gap-2 bg-sky-100">
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
                {/* email */}
                <label className="input input-bordered rounded-none pb-2 flex items-center gap-2 bg-sky-100">
                  <input
                    type="email"
                    name="email"
                    className="grow"
                    placeholder="ইমেইল"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>
                {/* class */}
                <label className="input input-bordered rounded-none pb-2 flex items-center gap-2 bg-sky-100">
                  <input
                    type="number"
                    name="clas"
                    className="grow"
                    placeholder="যে শ্রেণিতে ভর্তি হতে ইচ্ছুক"
                    value={formData.clas}
                    onChange={handleChange}
                  />
                </label>
                {/* price */}
                <label className="input input-bordered rounded-none pb-2 flex items-center gap-2 bg-sky-100">
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
                <button className="btn w-full rounded-none bg-black text-white">জমা দিন</button>
              </form>
            </section>
          </div>
        </div>
      </div>
      {/* <h1>Our New Students are:{students.length}</h1> */}
    </div>
  );
};

export default ApplicationForm;
