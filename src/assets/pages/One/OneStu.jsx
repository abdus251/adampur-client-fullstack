

const OneStu = ({item}) => {
  if (!item) {
    return <div className="error-message"></div>;
}

  const { name, roll_number, grade,  date_of_birth, hobbies, age, photo_url } = item;


  return (
    <div className='gap-5 border pl-4 text-sm bg-slate-100 flex p-4'>
    <div className=''>
    নাম: {name} <br />
      শ্রেণি: {grade} <br />
      রোল: {roll_number} <br />
      জন্ম তারিখ: {date_of_birth} <br />
      বয়স: {age} <br />
      শখ: {hobbies.join(', ')}
    </div>
    <div>
      <img className='h-[200px] w-[200]' src={photo_url} alt="" />
    </div> 
  </div>
  )
}

export default OneStu