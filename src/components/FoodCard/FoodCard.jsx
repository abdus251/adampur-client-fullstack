import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecur from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const {
    photoUrl,
    name,
    description,
    price,
    currency,
    remarks,
    paymentMode,
    _id,
  } = item;

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecur();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image: photoUrl,
        price,
      };

      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} আইটেমটি আপনার কার্টে যুক্ত হয়েছে! `,
              showConfirmButton: false,
              timer: 1500,
            });
            // refetch cart to update the cart items count
            refetch();
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "ত্রুটি",
            text: "কার্টে আইটেম যুক্ত করা সম্ভব হয়নি।",
          });
          console.error("Error adding to cart:", error);
        });
    } else {
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
    }
  };

  return (
    <div>
      <div className="card bg-base-100 w-10/12 shadow-xl justify-start rounded-none mt-10 flex flex-col min-h-[400px]">
        <figure className="h-60 w-full overflow-hidden">
          <img
            src={photoUrl}
            alt={name}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="ml-4 mr-4 pb-4 font-noto-sans-bengali mt-2 flex-grow">
          <h2 className="card-title">
            <span className="text-orange-400">ধরন:</span> অনুদান
          </h2>
          <p>
            ‍<span className="text-orange-400">প্রদানের মাধ্যম:</span>{" "}
            {paymentMode}
          </p>
          <p>
            ‍<span className="text-orange-400">পরিমাণ:</span> {price} টাকা
          </p>
          <p>
            ‍<span className="text-orange-400">উদ্দেশ্য:</span> {description}
          </p>
          <p>
            ‍<span className="text-orange-400">মুদ্রা:</span> {currency}
          </p>
          <p>
            ‍<span className="text-orange-400">ফলাফল:</span> {remarks}
          </p>
          <div className="card-actions justify-center mt-auto">
            <button
              onClick={handleAddToCart}
              className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400"
              aria-label={`Add ${name} to cart`}
            >
              প্রদান করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
