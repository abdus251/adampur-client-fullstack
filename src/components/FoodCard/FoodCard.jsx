

const FoodCard = ({item}) => {
    const {name, date_of_birth, photo_url,  category, grade, roll_number, hobbies} = item;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={photo_url} />
                </figure>
                <div className="ml-4 mr-4 pb-4 flex flex-col items-center">
                    <h2 className="card-title">নাম: {name}</h2>
                    <p>শ্রেণি: {grade}</p>
                    <p>রোল: {roll_number}</p>
                    <p>জন্ম তারিখ: {date_of_birth}</p>
                    <p>উচ্চাকাঙ্খা: {category}</p>
                    <p>শখ: {hobbies}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400"> শ্রেণি পরিবর্তন করুন</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard