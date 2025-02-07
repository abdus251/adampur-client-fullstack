

const MenuItem = ({ item }) => {
  const { name, roll, mobile, age, grade, birthDate,
    image } = item;
    
  return (
    <div className="mt-4 grid grid-cols-1">
  <div className="flex flex-col sm:flex-row  bg-base-100 border rounded-none shadow-md ">
    {/* Image Section */}
    <figure className="sm:w-[40%] flex justify-center items-center">
      <img
        src={image}
        alt="stuPic"
        className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-cover rounded-none"
      />
    </figure>

    {/* Text Section */}
    <div className="card-body p-4 sm:p-6 w-full">
      <h2 className="card-title text-lg sm:text-xl">নাম: {name}</h2>
      <p className="text-sm sm:text-base">শ্রেণি: {grade}</p>
      <p className="text-sm sm:text-base">রোল: {roll}</p>
      <p className="text-sm sm:text-base">জন্ম তারিখ: {birthDate}</p>
      <p className="text-sm sm:text-base">বয়স: {age}</p>
      <p className="text-sm sm:text-base">মোবাইল: {mobile}</p>
    </div>
  </div>
</div>

  )
}

export default MenuItem