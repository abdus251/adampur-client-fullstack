import Swal from "sweetalert2";
import stu1 from "../../../assets/prePhoto/pre5.jpg";

const PrePrimaryStu = ({ item }) => {
  const { _id, photo_url, name, roll_number, grade, date_of_birth, hobbies, age } = item;

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`https://adampur-server-fullstack-3.onrender.com/menu/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
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
    <>
      <div className="gap-5 border-2 pl-4 bg-blue-100 flex p-4">
        <div>
          নাম: {name} <br />
          শ্রেণি: {grade} <br />
          রোল: {roll_number} <br />
          জন্ম তারিখ: {date_of_birth} <br />
          বয়স: {age} <br />
          শখ: {hobbies.join(", ")}
        </div>
        <div>
          <img className="h-[200px] w-[200px]" src={photo_url} alt="" />
        </div>
        <div className="card-actions justify-start">
          <div className="btn-group btn-group-vertical space-y-4 grid">
            <button className="btn">View</button>
            <button className="btn">Edit</button>
            <button onClick={() => handleDelete(_id)} className="btn btn-danger">
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrePrimaryStu;
