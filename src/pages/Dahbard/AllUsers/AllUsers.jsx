import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });


  const handleMakeAdmin = user =>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch();
               Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${formData.name} কে এডমিন করা হয়েছে!`,
                        showConfirmButton: false,
                        timer: 1500,
                      });
        }
    })
  }

  const handleDeleteUser = user => {
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
          axiosSecure.delete(`/users/${user._id}`).then((res) => {
            if (res.data.deletedCount > 0) {
                refetch();
              setStudents((prev) =>
                prev.filter((student) => student._id !== id)
              );
              Swal.fire({
                title: "মুছে ফেলা হয়েছে!",
                text: "আপনার ফাইল মুছে ফেলা হয়েছে।",
                icon: "success",
              });
            }
          });
        }
      });
  }

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">AllUsers</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr  key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
              { user.role === 'admin' ? 'Admin' :  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-lg bg-orange-500"
                  >
                    <FaUsers className="text-white"></FaUsers>
                  </button>}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
