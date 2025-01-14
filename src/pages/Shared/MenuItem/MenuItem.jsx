

const MenuItem = ({ item }) => {
  const { tName, highest_level_of_education,phone,experience,area_of_interest,subject,tPost, date_of_birth,
    photo_url } = item;
    
  return (
    <div className="mt-4">
      <img src={photo_url} alt="" className="h-1/2 w-full" />
      <div className="text-">
        <h3><span className="text-sky-400">নাম: </span> {tName}</h3>
        <h3><span className="text-sky-400">পদবী: </span> {tPost}</h3>
        <p> <span className="text-sky-400">সর্বোচ্চ ডিগ্রী: </span> {highest_level_of_education}</p>
        <p> <span className="text-sky-400">বিষয়: </span> {subject}</p>
        <p> <span className="text-sky-400">মোবাইল: </span> {phone}</p>
        <p> <span className="text-sky-400">জন্ম তারিখ: </span> {date_of_birth}</p>
        <p> <span className="text-sky-400">অভিজ্ঞতা: </span>{experience}</p>
        <p> <span className="text-sky-400">শখ: </span> {area_of_interest}</p> 
      </div>
    </div>
  )
}

export default MenuItem