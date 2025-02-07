

const FiveStu = ({item}) => {
    const { photo_url, name, roll_number, grade, date_of_birth, hobbies, age } = item;
    return (
      <div >
      {/* <div className=''>
      নাম: {name} <br />
        শ্রেণি: {grade} <br />
        রোল: {roll_number} <br />
        জন্ম তারিখ: {date_of_birth} <br />
        বয়স: {age} <br />
        শখ: {Array.isArray(hobbies) ? hobbies.join(', ') : 'N?A'}
      </div>
      <div>
        <img className='h-[200px] w-[200]' src={photo_url} alt="" />
      </div>  */}
    </div>
  )
}

export default FiveStu