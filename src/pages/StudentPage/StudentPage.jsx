// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StudentPage = () => {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // const response = await axios.get('https://adampur-server-fullstack-3.onrender.com/menu');
//         setStudents(response.data);
//       } catch (error) {
//         setError('Failed to fetch students');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>Student List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {students.map((student) => (
//           <div key={student._id} className="card card-compact bg-base-100 w-96 shadow-xl">
//             <figure>
//               <img src={student.image} alt={student.name} />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">নাম: {student.name}</h2>
//               <p> শ্রেণি: {student.class}</p>
//               <p> রোল: {student.roll}</p>
//               <p> বয়স: {student.age}</p>
//               <p> জন্ম তারিখ: {student.birthDate}</p>
//               <p> মোবাইল: {student.mobile}</p>
//               <p> ক্যাটাগরি: {student.category}</p>
//               <div className="card-actions justify-end">
//                 <button className="btn btn-primary">Details</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StudentPage;
