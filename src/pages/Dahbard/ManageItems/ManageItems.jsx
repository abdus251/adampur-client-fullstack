import { FaEdit, FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";


const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  if (loading) {
    return <p>Loading...</p>; 
  }

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "আপনি কি নিশ্চিত?",
      text: "এটি আপনি আর পুনরুদ্ধার করতে পারবেন না!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "হ্যাঁ, মুছে ফেলুন!",
    }).then( async (result) => {
      if (result.isConfirmed) {
        // delete req
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount > 0) {
          refetch(); 
          // refetch 
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} সফলভাবে মুছে ফেলা হয়েছে`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
    
        }

  return (
    <div>
      <h3 className="text-3xl text-sky-400 text-center mb-10">শিক্ষার্থীদের তথ্য হালনাগাদ অথবা মুছে ফেলুন</h3>
     
      <div>
        <div className="overflow-x-auto">
        <table className="table w-full">
  <thead>
    <tr>
      <th>ক্র.নং.</th>
      <th>ছবি</th>
      <th>শিক্ষার্থীর নাম</th>
      <th>শ্রেণি</th>
      <th className="w-20 text-center">হালনাগাদ</th>
      <th className="w-20 text-center">মুছে ফেলুন</th>
    </tr>
  </thead>
  <tbody>
    {menu.map((item, index) => (
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.photo_url || "/fallback.jpg"}
                  alt={item.name || item.tName}
                />
              </div>
            </div>
          </div>
        </td>
        <td>{item.name || item.tName}</td>
        <td>{item.grade || item.tPost}</td>
        <td className="text-center">
          {item.grade ? (
            <Link to={`/dashboard/updateItem/${item._id}`}>
              <button className="btn btn-ghost btn-sm bg-sky-400">
                <FaEdit className="text-white" />
              </button>
            </Link>
          ) : (
            <button className="btn btn-disabled">হালনাগাদ নেই</button>
          )}
        </td>
        <td className="text-center">
          <button
            onClick={() => handleDeleteItem(item)}
            className="btn btn-ghost btn-sm"
          >
            <FaTrashAlt className="text-red-600" />
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      </div>
    </div>
  );
};

export default ManageItems;
