

const MenuItem = ({ item}) => {
    const {name, highest_level_of_education,photo_url,  subject, experience} = item
  return (
    <div className="">
        <img src={photo_url} alt="" />
        <div>
            <h3>{name}--------------</h3>
            <p className="text-pink-300 font-semibold">সর্বোচ্চ ডিগ্রি: {highest_level_of_education}</p>
            <p>{subject}</p>
        </div>
        <p>অভিজ্ঞতা:{experience}</p>
    </div>
  )
}

export default MenuItem