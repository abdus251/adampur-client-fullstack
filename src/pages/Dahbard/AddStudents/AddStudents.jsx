import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddStudents = () => {
  const axiosSecure = useAxiosSecure();

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://adampur-server-fullstack-3.onrender.com/carts", {
      params: { email: "email" },
      withCredentials: true, 
    })
    .then(response => {
      setStudents(response.data);
      setLoading(false); // Set loading to false once data is fetched
    })
    .catch(error => {
      setError("Failed to load data");
      setLoading(false);  // Handle error and stop loading
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Show a loading message or spinner
  }
  
  if (error) {
    return <div>{error}</div>;  // Show an error message if any
  }
  

  const handleDelete = (id) => {
    Swal.fire({
      title: "আপনি নিশ্চিত?",
      text: "এটি পূর্বাবস্থায় ফিরিয়ে আনা যাবে না!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "হ্যাঁ, মুছে ফেলুন!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/student/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            setStudents((prev) => prev.filter((student) => student._id !== id));
            Swal.fire({
              title: "মুছে ফেলা হয়েছে!",
              text: "আপনার ফাইল মুছে ফেলা হয়েছে।",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <h3 className="text-3xl text-center text-sky-400 my-10">
        ভর্তিচ্ছুক শিক্ষার্থীদের তালিকা:{" "}
        {students.length
          .toString()
          .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[parseInt(digit, 10)])}{" "}
        জন
      </h3>
      <table className="table">
        {/* Table Head */}
        <thead>
          <tr className="bg-sky-200">
            <th>ক্র.ন.</th>
            <th>ছবি</th>
            <th>নাম</th>
            <th>পিতার নাম</th>
            <th>মোবাইল</th>
            <th>প্রার্থিত শ্রেণি</th>
            <th>মুছে ফেলুন</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {students.map((item, index) => {
            // Convert the index to Bengali numerals
            const bengaliIndex = (index + 1)
              .toString()
              .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[parseInt(digit, 10)]);

            return (
              <tr key={item._id}>
                <th>{bengaliIndex}</th>
                <td>
                  <div className="flex items-center gap-3">
                    {item.photo ? (
                      <img
                        src={item.photo}
                        alt="Student"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    ) : (
                      <p> ছবি সংযুক্ত করা হয়নি।</p>
                    )}
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.fName}</td>
                <td>{item.moNum}</td>
                <td>{item.clas}</td>

                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AddStudents;
