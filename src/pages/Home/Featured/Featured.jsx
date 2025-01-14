import SectionTitle from '../../../components/SectionTitle'
import featuredImg from '../../../assets/home/motherCon.jpeg'
import './Featured.css'


const Featured = () => {
    return (
        <div className='featured-item bg-fixed pt-10 my-20 font-noto-sans-bengali '>
            <SectionTitle  subHeading="আমাদের পাঠশালা" heading="শিক্ষা, সংস্কৃতি, ক্রীড়ার মেলবন্ধন"></SectionTitle>
            <div className="md:flex justify-center items-center bg-purple-100 bg-opacity-30 py-8 px-16 ">
                <div className="">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 mt-10 text-orange-400 font-noto-sans-bengali text-justify">
                    {/* TODO Relevent text needed */}
                    <p> শিক্ষা, সংস্কৃতি এবং ক্রীড়া একে অপরের সঙ্গে মিশে একটি ভারসাম্যপূর্ণ এবং সমৃদ্ধ সমাজ গড়ে তোলে।</p>
                    <p>শিক্ষা
জ্ঞান অর্জনের মূল ভিত্তি। এটি মানুষকে সচেতন, সুশৃঙ্খল এবং নৈতিকভাবে দায়িত্বশীল করে তোলে।

সংস্কৃতি
মানুষের চেতনা, নীতি, বিশ্বাস, এবং ঐতিহ্যের সমন্বয়। সংস্কৃতি আমাদের সমাজের শিকড়কে দৃঢ় করে এবং আমাদের পরিচয়কে সমৃদ্ধ করে।

ক্রীড়া
শারীরিক ও মানসিক বিকাশের গুরুত্বপূর্ণ মাধ্যম। ক্রীড়া ব্যক্তি ও দলের মধ্যে শৃঙ্খলা, সহযোগিতা, এবং প্রতিযোগিতার চেতনাকে উৎসাহিত করে।</p>
                    <p>
এই তিনটি ক্ষেত্র একসঙ্গে কাজ করলে ব্যক্তিগত এবং সামাজিক জীবনে ভারসাম্য আনে।

ক্রীড়া ও সংস্কৃতি শিক্ষা কার্যক্রমের মধ্যে যোগ হলে শিক্ষার প্রতি আকর্ষণ বাড়ে।

ক্রীড়া শারীরিক স্বাস্থ্যের জন্য অপরিহার্য, আর সংস্কৃতি সৃজনশীলতার বিকাশ ঘটায়।

এই ধারণাটি বাস্তবায়নের জন্য বিদ্যালয় এবং সমাজকে উদ্যোগী হওয়া প্রয়োজন, যেখানে শিক্ষা কার্যক্রমের পাশাপাশি সাংস্কৃতিক এবং ক্রীড়া কার্যক্রমকেও সমান গুরুত্ব দেওয়া হবে।</p>
                </div>
            </div>
        </div>

    )
}

export default Featured