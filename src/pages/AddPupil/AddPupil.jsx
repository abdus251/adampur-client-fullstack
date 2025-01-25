import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const StudentsComponent = () => {
  const { register, handleSubmit, reset } = useForm();
  const [students, setStudents] = useState({});

  // Fetch students data
  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/student");
    //   console.log("Fetched students:", response.data);
      // Organize students by class
      const groupedStudents = response.data.reduce((acc, student) => {
        const grade = student.class;
        if (!acc[grade]) {
          acc[grade] = [];
        }
        acc[grade].push(student);
        return acc;
      }, {});
      setStudents(groupedStudents);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };
  
  const deleteStudent = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/student/${id}`);
      console.log("Deleted student:", response.data);
      fetchStudents(); // Reload students after deleting
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };
  

  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle form submission
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("father", data.father);
    formData.append("roll", data.roll);
    formData.append("class", data.class);
    formData.append("mobile", data.mobile || ""); // Optional fields
    formData.append("birth", data.birth || ""); // Optional fields
    formData.append("photo", data.photo[0]); // File
  
    try {
      const response = await axios.post("http://localhost:5000/student", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Student added:", response.data);
      fetchStudents(); // Reload students after adding
    } catch (error) {
      console.error("Error adding student:", error.response || error.message);
    }
  };  
  
  
  return (
    <div>
      {/* Add Student Form */}
      <form
    onSubmit={handleSubmit(onSubmit)}
    className="p-5 border rounded-lg max-w-md mx-auto"
    encType="multipart/form-data" // Required for file uploads
  >
        <div className="mb-4">
          <label className="block mb-2">* নাম:</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="border p-2 rounded w-full"
            placeholder="নাম"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">* পিতার নাম:</label>
          <input
            type="text"
            {...register("father", { required: true })}
            className="border p-2 rounded w-full"
            placeholder="পিতার নাম"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2"> শ্রেণি:</label>
          <select
            {...register("class", { required: true })}
            className="border p-2 rounded w-full"
          >
            <option value="prePrimary">প্রাক-প্রাথমিক</option>
            <option value="classOne">প্রথম </option>
            <option value="classTwo">দ্বিতীয় </option>
            <option value="classThree">তৃতীয় </option>
            <option value="classFour">চতুর্থ </option>
            <option value="classFive">পঞ্চম </option>
          </select>
        </div>
       
        <div className="mb-4">
          <label className="block mb-2">* রোল:</label>
          <input
            type="text"
            {...register("roll", { required: true })}
            className="border p-2 rounded w-full"
            placeholder=" রোল"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">* জন্ম তারিখ:</label>
          <input
            type="date"
            {...register("birth", { required: true })}
            className="border p-2 rounded w-full"
            placeholder="বয়স"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">*  মোবাইল:</label>
          <input
            type="text"
            {...register("mobile", { required: true })}
            className="border p-2 rounded w-full"
            placeholder=" মোবাইল"
          />
        </div>

          {/* Add Photo Field */}
    <div className="mb-4">
      <label className="block mb-2">ছবি আপলোড:</label>
      <input
        type="file"
        {...register("photo", { required: true })}
        className="border p-2 rounded w-full"
        accept="image/*" 
      />
    </div>
      
        <div className="text-center">
          <button
            type="submit"
            className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-700"
          >
            Add Student
          </button>
        </div>
      </form>

      {/* Render Students by Grade */}
      {Object.keys(students).map((gradeKey) => (
      <div key={gradeKey}>
      <h1 className="text-center mt-20 mb-5 underline text-3xl text-sky-400">
        {gradeKey === "prePrimary"
          ? "Pre-Primary Students"
          : `Class ${gradeKey.replace("class", "")} Students`}
      </h1>
      <div className="grid md:grid-cols-2 gap-10">
        {students[gradeKey].map((student) => (
          <div
            key={student.id}
            className="border p-3 rounded shadow-md bg-white"
          >
            <p className="">নাম: {student.name}</p>
            <p className="">পিতার নাম: {student.father}</p>
            <p className="">রোল: {student.roll}</p>
            <p className="">
              শ্রেণি:{" "}
              {gradeKey === "prePrimary" ? "Pre-Primary" : gradeKey.replace("class", "")}
            </p>
            <p className="">মোবাইল: {student.mobile || "N/A"}</p>
            <p className="">জন্ম তারিখ: {student.birth || "N/A"}</p>
            
            {/* Display photo with fallback */}
            {student.photo ? (
              <img
                src={student.photo}
                alt={`${student.name}'s photo`}
                className="w-full h-auto rounded mt-2"
              />
            ) : (
              <div className="w-full h-32 bg-gray-200 flex items-center justify-center rounded mt-2">
                <p className="text-gray-500">No Photo Available</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    
      ))}
    </div>
  );
};

export default StudentsComponent;
