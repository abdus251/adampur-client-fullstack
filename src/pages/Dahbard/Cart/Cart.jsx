import { TbCurrencyTaka } from "react-icons/tb";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  console.log(cart)
  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  const axiosSecure = useAxiosSecure();

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
        axiosSecure.delete(`/carts/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch(); 
              Swal.fire("মুছে ফেলা হয়েছে!", "আপনার আইটেমটি মুছে ফেলা হয়েছে।", "success");
            }
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire("ত্রুটি!", "আইটেম মুছে ফেলা যায়নি।", "error");
          });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly items-center mb-10">
        <h2 className="text-xl text-sky-400">বিবিধ খাত: {cart.length}</h2>
        <h2 className="text-xl  text-sky-400"> মোট অর্থ: <span className="text-3xl">৳</span> {totalPrice}</h2>
      {cart.length ? <Link to="/dashboard/payment">
       <button className="btn btn-primary">Pay</button>
       </Link>
       :
       <button disabled className="btn btn-primary">Pay</button>
       }
      </div>
      {cart.length === 0 ? (
        <div className="text-center mt-4">
          <h3 className="text-xl">Your cart is empty!</h3>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>ক্র.নং.</th>
                <th>ছবি</th>
                <th>নাম</th>
                <th>টাকা</th>
                <th>ডিলিট</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>৳ {item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
