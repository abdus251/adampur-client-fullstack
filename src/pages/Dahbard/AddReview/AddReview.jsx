import React, { useState } from "react";
import Swal from "sweetalert2";

const AddReview = () => {
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    review: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.rating || !formData.review) {
      Swal.fire({
        icon: "error",
        title: "ওপস...",
        text: "সবগুলো ঘর পূরণ করা বাধ্যতামূলক!",
      });
      return;
    }

    // Mock submit logic
    console.log("রিভিউ জমা:", formData);

    Swal.fire({
      icon: "success",
      title: "রিভিউ যোগ করা হয়েছে",
      text: "আপনার মূল্যবান মতামতের জন্য ধন্যবাদ!",
    });

    // Clear form
    setFormData({
      name: "",
      rating: "",
      review: "",
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        রিভিউ দিন
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            আপনার নাম
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="আপনার নাম লিখুন"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 font-medium">
            রেটিং (১-৫)
          </label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          >
            <option value="">একটি রেটিং নির্বাচন করুন</option>
            <option value="1">১ - খারাপ</option>
            <option value="2">২ - ঠিকঠাক</option>
            <option value="3">৩ - ভালো</option>
            <option value="4">৪ - খুব ভালো</option>
            <option value="5">৫ - চমৎকার</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="review" className="block text-gray-700 font-medium">
            আপনার রিভিউ
          </label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            placeholder="আপনার মতামত লিখুন"
            rows="4"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-sky-400 text-white py-2 px-4 rounded-lg hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          রিভিউ জমা দিন
        </button>
      </form>
    </div>
  );
};

export default AddReview;
