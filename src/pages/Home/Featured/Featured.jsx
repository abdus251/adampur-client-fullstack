import SectionTitle from '../../../components/SectionTitle'
import featuredImg from '../../../assets/home/motherCon.jpeg'
import './Featured.css'


const Featured = () => {
    return (
        <div className='featured-item bg-fixed pt-10 my-20'>
            <SectionTitle subHeading="আমাদের পাঠশালা" heading="শিক্ষা, সংস্কৃতি, ক্রীড়ার মেলবন্ধন"></SectionTitle>
            <div className="md:flex justify-center items-center bg-purple-100 bg-opacity-30 py-8 px-16 ">
                <div className="">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 text-purple-600 font-semibold">
                    {/* TODO Relevent text needed */}
                    <p>Aug 20, 2023</p>
                    <p>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorem quos harum error animi architecto fugiat, praesentium natus nam expedita. Minus, rem? Minima reiciendis consequatur laudantium nemo quia dolorum, cumque omnis saepe quas ullam, nobis, repudiandae iure! Alias consequuntur quasi doloribus maxime iste laboriosam nesciunt deleniti at cumque qui. Sunt!</p>
                    <button className="btn btn-outline border-0 border-b-4">Order now</button>
                </div>
            </div>
        </div>

    )
}

export default Featured