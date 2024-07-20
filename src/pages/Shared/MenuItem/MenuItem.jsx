

const MenuItem = ({ item }) => {
  const { name, _id, roll_number, grade, date_of_birth, hobbies,
    photo_url } = item;
  return (
    <div className="mt-4">
      <img src={photo_url} alt="" />
      <div>
        <h3>নাম: {name}--------------</h3>
        <p>শ্রেণি: {grade}</p>
        <p>রোল: {roll_number}</p>
        <p>জন্ম তারিখ: {date_of_birth}</p>
        <p>শখ: {hobbies}</p>
        <p>ছবি:{photo_url}</p>
        
      </div>
    </div>
  )
}

export default MenuItem