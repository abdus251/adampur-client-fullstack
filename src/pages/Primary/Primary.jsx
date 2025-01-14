import { FaCircle } from "react-icons/fa"
import art from "../../assets/home/artCom.jpeg"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useMenu from "../../hooks/useMenu"
import FoodCard from "../../components/FoodCard/FoodCard"
import PopularMenu from "../../../src/pages/Home/PopularMenu";
import Featured from "../../../src/pages/Home/Featured/Featured";
import OneStu from "../../assets/pages/One/OneStu"


const Primary = ({}) => {
  const [menu] = useMenu();
 

  return (
    <>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-20 '>
      <div className='w-full mt-5  '>
<img src={art} alt="" className="mt-20 sm:pl-10"></img>
      </div>
      <div className='w-full mt-52 font-noto-sans-bengali'>
        <h1 className="text-5xl text-sky-400 mb-10">
      প্রাথমিক বিদ্যালয় <br />(গ্রেড ১-৫)</h1>
      <p className="mr-20 leading-loose">
এখানে আমরা আমাদের স্কুলে প্রথম থেকে পঞ্চম শ্রেণি বা গ্রেড ১-৫ এর শিক্ষার্থীদের অভিজ্ঞতার একটি সংক্ষিপ্ত বিবরণ প্রদান করবো। আমরা শিশু মনের যত্ন নেওয়া, মৌলিক দক্ষতা গড়ে তোলা এবং শিক্ষার প্রতি ভালোবাসা সৃষ্টি করার উপর গুরুত্বারোপ করি।
</p>
      </div>
    </div>

      <div className="my-20 bg-base-300 p-10">
       <div className="py-5 px-10 bg-white grid font-noto-sans-bengali">  
        <h2 className="text-xl font-bold mb-4">
       পাঠ্যক্রমের সংক্ষিপ্ত বিবরণ</h2>
<p>আমাদের প্রাথমিক বিদ্যালয়ের পাঠ্যক্রম এমনভাবে তৈরি করা হয়েছে যা শিক্ষার্থীদের একটি সার্বিক শিক্ষার সঙ্গে যুক্ত করে, যেখানে একাডেমিক অর্জন, সৃজনশীলতা, এবং ব্যক্তিগত বিকাশের উপর জোর দেওয়া হয়।</p>
<section className="pl-4">
<h3 className="text-lg font-semibold mt-5 flex gap-2 items-center underline"> <FaCircle className="h-2 -2"/>
ভাষা শিল্প:</h3>
<p className="pl-6">
শিক্ষার্থীরা আকর্ষণীয় গল্প, অনুধাবনমূলক অনুশীলন এবং সৃজনশীল লেখার মাধ্যমে  মাতৃভাষা বাংলা পড়া, লেখা, শোনা এবং বলার দক্ষতা অর্জন করে।
</p>
<h3 className="text-lg font-semibold mt-5 flex gap-2 items-center underline"> <FaCircle className="h-2 -2"/>
 ইংরেজি:</h3>
<p className="pl-6">
আন্তর্জাতিক ভাষা হিসেবে শিক্ষার্থীরা বাংলার পাশাপাশি  ইংরেজিও পড়া, লেখা, শোনা এবং বলার দক্ষতা অর্জন করে।
</p>

<h3 className="text-lg font-semibold mt-5 flex gap-2 items-center underline"> <FaCircle className="h-2 -2"/>
গণিত:</h3>
<p className="pl-6">
প্রাথমিক গণনা থেকে সমস্যার সমাধানের কৌশল পর্যন্ত একটি শক্তিশালী গণিতের ভিত্তি গড়ে তোলার উপর গুরুত্বারোপ করা হয়।
</p>


<h3 className="text-lg font-semibold mt-5 flex gap-2 items-center underline"> <FaCircle className="h-2 -2"/>
বিজ্ঞান:</h3>
<p className="pl-6">
  প্রাকৃতিক বিশ্বের বিস্ময়ের সাথে পরিচিতি, অনুসন্ধান, পর্যবেক্ষণ এবং হাতে-কলমে পরীক্ষার মাধ্যমে বিজ্ঞানচর্চায় উৎসাহ দেওয়া।
</p>

<h3 className="text-lg font-semibold mt-5 flex gap-2 items-center underline"> <FaCircle className="h-2 -2"/>
বাংলাদেশ ও বিশ্বপরিচয়:</h3>
<p className="pl-6">
নিজ দেশ ও বহির্বিশ্বের বিবিধ বিষয়াবলী, সার্ক, জাতিসংঘের মতো আন্তর্জাতিক সংস্থার প্রাথমিক কার্যাবলী ছাড়াও ইতিহাস, ভূগোল এবং নৃতাত্বিক সম্প্রদায় সম্পর্কে শিক্ষার্থীদের পাঠদান করা হয়। এসব জ্ঞান সম্প্রসারণের মাধ্যমে তাদের চারপাশের বিশ্বকে বুঝতে সাহায্য করা হয়।
</p>

<h3 className="text-lg font-semibold mt-5 flex gap-2 items-center underline"> <FaCircle className="h-2 -2"/>
কলা ও হস্তশিল্প:</h3>
<p className="pl-6">
চিত্রশিল্প, সঙ্গীত, নাটক এবং নৃত্যের মাধ্যমে সৃজনশীলতাকে উত্সাহিত করা।
</p>

<h3 className="text-lg font-semibold mt-5 flex gap-2 items-center underline"> <FaCircle className="h-2 -2"/>
শারীরিক শিক্ষা:</h3>
<p className="pl-6">
শারীরিক স্বাস্থ্য উন্নয়নে এমন কার্যকলাপ অন্তর্ভুক্ত যা সমন্বয়, দলগত কাজ, এবং ফিটনেস বিকাশে সাহায্য করে।
</p>

<h3 className="text-lg font-semibold mt-5 flex gap-2 items-center underline"> <FaCircle className="h-2 -2"/>
শ্রেণি অনুযায়ী প্রত্যাশা:</h3>

<p className="pl-6">
প্রত্যেক শ্রেণি পূর্ববর্তী বছরের দক্ষতা এবং জ্ঞানের উপর ভিত্তি করে তৈরি হয়, নির্দিষ্ট শিক্ষাগত লক্ষ্য এবং মাইলফলকের মাধ্যমে।
</p>

<h3 className="text-lg font-semibold mt-5 flex gap-2 items-center underline"> <FaCircle className="h-2 -2"/>
প্রথম শ্রেণি:</h3>
<p className="pl-6">
বাংলা বর্ণমালা শুদ্ধ উচ্চারণে পড়া এবং প্রবাহ ও মাত্রাসহ সঠিকভাবে লেখার অনুশীলন করানো হয়। ইংরেজি বর্ণমালা শুদ্ধ উচ্চারণে পড়া এবং বেড় হাতের ও ছোটহাতের ইংরেজি বর্ণমালা সঠিকভাবে লেখার অনুশীলন করানো হয়। ছোট ছোট বাক্য পড়তে ও লিখতে পারার উপরও বিশেষ গুরুত্ব দেওয়া হয়। প্রাথমিক গণিতের দক্ষতার সাথে পরিচয় করানো, সামাজিক বিকাশ এবং ব্যক্তিগত দায়িত্বের উপর জোর দেওয়া।
</p>

<h3 className="text-lg font-semibold mt-5 flex gap-2 items-center underline"> <FaCircle className="h-2 -2"/>
দ্বিতীয় শ্রেণি:</h3>

<p className="pl-6">
সাক্ষরতা এবং সংখ্যার প্রতি আত্মবিশ্বাস তৈরি করা এবং বিজ্ঞানে প্রাকৃতিক বিশ্বের অনুসন্ধান।
</p>

<h3 className="text-lg font-semibold mt-5 flex gap-2 items-center underline"> <FaCircle className="h-2 -2"/>
তৃতীয় শ্রেণি:</h3>
<p className="pl-6">
স্বাধীন চিন্তা বিকাশ, পাঠ অনুধাবন দক্ষতার উন্নতি এবং সমাজবিজ্ঞানের বিষয়গুলি অন্বেষণ।
</p>

<h3 className="text-lg font-semibold mt-5 flex gap-2 items-center underline"> <FaCircle className="h-2 -2"/>
চতুর্থ শ্রেণি:</h3>

<p className="pl-6">
লেখা এবং গবেষণার দক্ষতা উন্নত করা, ইতিহাসের গভীরতর অন্বেষণ এবং জ্যামিতি ও পরিমাপের ধারণার সাথে পরিচয়।
</p>

<h3 className="text-lg font-semibold mt-5 flex gap-2 items-center underline"> <FaCircle className="h-2 -2"/>
পঞ্চম শ্রেণি:</h3>
<p className="pl-6">
গণিতে জটিল সমস্যার সমাধান, পাঠ এবং লেখায় সমালোচনামূলক চিন্তা এবং বিজ্ঞানের জ্ঞান প্রসারিত করা। মাধ্যমিক বিদ্যালয়ে উত্তরণের প্রস্তুতি, নেতৃত্ব, সহযোগিতা এবং উচ্চতর স্তরের চিন্তাধারার বিকাশের উপর গুরুত্বারোপ।
</p>
</section>

<h3 className="text-lg font-semibold mt-5 flex gap-2 items-center underline justify-center">
যোগাযোগ করুন:</h3>


<p className="pl-10 items-center">
স্কুলে ভর্তির জন্য আবেদন সারাবছর খোলা থাকে।
আপনার আগ্রহ প্রকাশ করতে এবং আপনার যোগাযোগের তথ্য প্রদান করতে, অনুগ্রহ করে এই আবেদন ফর্মটি পূরণ করুন অথবা একটি ইমেইল পাঠান admin@nordenschool.com-এ।
</p>
</div>
      </div>

<PopularMenu></PopularMenu>
<OneStu></OneStu>
<Featured></Featured>

<div className="my-20 bg-base-300 p-4 sm:p-6 md:p-10 font-noto-sans-bengali">
  <div className="py-5 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80 bg-white">
    <h1 className="text-xl sm:text-2xl lg:text-3xl text-center mb-4 mt-6">
      যোগাযোগ করুন
    </h1>
    <p className="pb-4 text-center text-sm sm:text-base lg:text-lg">
      স্কুলে ভর্তির জন্য আবেদন সারাবছর খোলা থাকে। <br />
      আপনার আগ্রহ প্রকাশ করতে এবং আপনার যোগাযোগের তথ্য প্রদান করতে, অনুগ্রহ করে এই   
       <button>
        <Link to="/applicationForm" className="text-sky-400 underline"> 
          আবেদন ফর্মটি
        </Link>
      </button> 
      পূরণ করুন। অথবা একটি ইমেইল পাঠান 
      <span className="text-sky-400"> adampurgps6.com</span>-এ।
    </p>
  </div>
</div>

    
    </>
  )
}

export default Primary