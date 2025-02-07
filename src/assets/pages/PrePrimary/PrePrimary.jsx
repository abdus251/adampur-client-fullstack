import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import img from "../../../assets/banner/kid-letter.jpg"
import { Link } from "react-router-dom";
import kidImg from "../../../assets/banner/kids-home.jpg"

const PrePrimary = () => {
  

  return (
    <div className="pt-20 font-noto-sans-bengali px-10 text-justify">
      <h1 className="text-3xl text-center text-sky-400 mt-10">
        {" "}
        প্রাক-প্রাথমিক শ্রেণি <br />{" "}
      </h1>
      <h1 className="text-center text-sky-400 mt-4 text-3xl">(শিশু শ্রেণি)</h1>
      <h3 className="text-xl font-bold mt-10 mb-6">
        আদমপুর সরকারি প্রাথমিক বিদ্যালয়-এ প্রাক-প্রাথমিক শ্রেণি বা গ্রেড ০ এর
        পরিচিতি
      </h3>
      <p className="leading-loose ">
        আমরা আনন্দের সাথে জানাচ্ছি যে, আদমপুর সরকারি প্রাথমিক বিদ্যালয়ে
        প্রাক-প্রাথমিক (বয়স ৫-৬ বছর) শ্রেণিতে ভর্তি কার্যক্রম চালু রয়েছে।{" "}
        <br /> <br />
        প্রাক-প্রাথমিক শ্রেণি, যা অনেক দেশে গ্রেড ০, প্রি-প্রাইমারি বা রিসেপশন
        নামে পরিচিত, আনুষ্ঠানিক শিক্ষার সূচনা হিসেবে বিবেচিত হয়। আদমপুর সরকারি
        প্রাথমিক বিদ্যালয়ে গ্রেড ০ প্রোগ্রামটি শিশুদের স্কুল পরিবেশে খাপ
        খাওয়াতে সাহায্য করার পাশাপাশি মৌলিক ভাষা ও গণিত শিক্ষার একটি শক্তিশালী
        ভিত্তি গড়ে তোলার জন্য তৈরি করা হয়েছে। এর শিক্ষা কার্যক্রমগুলো সামাজিক
        ও আবেগিক বিকাশেও গুরুত্ব দেয়, যা শিশুদের একটি সফল শিক্ষা যাত্রার জন্য
        প্রস্তুত করবে। <br /> <br />
        আমাদের গ্রেড ০ প্রোগ্রামের লক্ষ্য একটি পরিচর্যামূলক এবং উদ্দীপনামূলক
        পরিবেশ তৈরি করা, যেখানে শিশুরা অনুসন্ধান, শিক্ষা এবং বিকাশের সুযোগ পায়।
        আকর্ষণীয় কার্যক্রম এবং বিশেষভাবে পরিকল্পিত পাঠদানের মাধ্যমে আমরা তাদের
        ভবিষ্যতের শিক্ষা এবং ব্যক্তিগত উন্নয়নের জন্য প্রয়োজনীয় দক্ষতাগুলো
        বিকাশের ওপর মনোযোগ দেই। <br /> <br />{" "}
      </p>
      <p className=" text-justify leading-loose">
        {" "}
        পাঁচ বছর বয়সী শিশুদের জন্য এই বিদ্যালয়ে চালু রয়েছে প্রাক-প্রাথমিক
        শ্রেণি। এখানে শিশুরা খেলাচ্ছলে বাংলা বর্ণমালা, প্রাথমিক গণিত, ইংরেজি
        বর্ণমালাসহ প্রাথমিক বিজ্ঞান, পরিবেশ পরিচিতি, স্বাস্থ্য, চিকিৎসা
        প্রযুক্তি, ছড়া, গান, গল্প বলা, হরেক রকম খেলাধুলা ইত্যাদি শিখে থাকে। এই
        শ্রেনির বিশেষ উদ্দেশ্য হচ্ছে শিক্ষার্থীকে বিদ্যালয়মুখী করা এবং তাকে
        প্রথম শ্রেণির উপযোগী করে গড়ে তোলা। প্রাক-প্রাথমিক শ্রেণির দায়িত্বে
        রয়েছেন অত্র শ্রেণির জন্য বিশেষভাবে প্রশিক্ষণ প্রাপ্ত দু’জন শিক্ষক-{" "}
        <span className="text-sky-400 font-bold">
          {" "}
          জনাব, আব্দুস সালাম ও জনাব, নুরজাহান আক্তার।
        </span>{" "}
        তারা উভয়েই মাস্টার্স ডিগ্রিধারী ও বহুমাত্রিক প্রতিভার অধিকারী। সকল
        শিক্ষার্থীকে প্রথম শ্রেণির উপযোগী করে গড়ে তুলতে উভয়ে সিদ্ধহস্ত।
      </p>
      <div className="text-justify pl-10">
        <p>
          {" "}
          <span className="text-sky-400 font-semibold">ভর্তির সময়:</span>{" "}
          নভেম্বর থেকে ফেব্রুয়ারি ,
        </p>
        <p> ভর্তির বয়স: ৫ বছর </p>
        <p className="pt-4">
          <span className="text-sky-400 font-semibold">
            {" "}
            প্রয়োজনীয় কাগজপত্র:
          </span>{" "}
          <br /> ১। শিশুর জন্ম নিবন্ধন ( অনলাইন কপি ); <br />
          ২। শিশুর স্ট্যাম্প ও পাসপোর্ট সাইজের ছবি (১ কপি করে); <br />
          ৩। মা-বাবার জাতীয় পরিচয়পত্রের ফটোকপি এবং <br />
          ৪। মোবাইল নম্বর।
        </p>
        ৫। যোগাযোগের নম্বর: ০১৭০৪০৯০৪৪৪, ০১৯১৩৪৭৫১৭৯
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
        <div>
          <img
            src="https://img.freepik.com/free-photo/small-caucasian-boy-playing-with-colored-plasticine-making-figures-white-table-happy-child-idea_1268-16984.jpg?t=st=1734412528~exp=1734416128~hmac=f56dc15f450ac3b4140e5191ee11613687882a9e3c4c5068206766bade34130d&w=360"
            alt="A small Caucasian boy playing with colored plasticine"
            className="w-full"
          />
        </div>
        <div>
          <h1 className="text-3xl mb-4 text-center">লক্ষ্য ও উদ্দেশ্য</h1>
          <p className="leading-loose text-justify lg:pl-4">
            প্রাক-প্রাথমিক শ্রেণি এর মূল লক্ষ্য হল শিশুদের ভবিষ্যতে আরও
            আনুষ্ঠানিক একাডেমিক শিক্ষার জন্য প্রস্তুত করা। একটি স্নেহময় এবং
            সহায়ক পরিবেশ প্রদান করে, শিশুদের মধ্যে শিক্ষার প্রতি ভালোবাসা গড়ে
            তোলার পাশাপাশি তাদের আত্মবিশ্বাস অর্জনের সুযোগ দেওয়া হয়, যা তাদের
            স্কুলে সফল হতে সহায়তা করে। <br /> 
            আমাদের অভিজ্ঞ শিক্ষকগণ শিশুদের জন্য একটি নিরাপদ এবং আনন্দময় পরিবেশ
            তৈরি করেন, যেখানে তারা স্বাধীনভাবে শিখতে এবং বিকাশ করতে পারে। আমরা
            বিশ্বাস করি যে প্রতিটি শিশু বিশেষ এবং তাদের নিজস্ব গতিতে শেখার
            অধিকার রয়েছে।
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 leading-loose ">
        <div>
          <h1 className="text-3xl mb-4 text-center my-10">পাঠ্যক্রম</h1>
          <p className="text-justify justify-center items-center lg:pr-4">
            আদমপুর সরকারি প্রাথমিক বিদ্যালয়ের গ্রেড ০-এর পাঠ্যক্রম শিশু
            শিক্ষার্থীদের জন্য আনুষ্ঠানিক শিক্ষার একটি সমৃদ্ধ ও আকর্ষণীয় সূচনা
            প্রদানের জন্য বিন্যস্ত করা হয়েছে। এই প্রাথমিক পর্যায়টি ভবিষ্যতের
            একাডেমিক সফলতা ও ব্যক্তিগত বিকাশের জন্য প্রয়োজনীয় দক্ষতা বিকাশের
            উপর জোর দেয়। 
            <br />{" "}
          </p>

          <span>
            <span className="font-bold">
              একাডেমিক ভিত্তি: <br />
            </span>{" "}
             <span className="flex items-center gap-2 pl-6"> <FaCircle className="h-2 w-2"/> সাক্ষরতা ও সংখ্যাজ্ঞান:</span>
            <p className="pl-10  pr-20">শিশুদের অক্ষর এবং সংখ্যাগুলি চেনা, প্রাথমিক গণিতের ধারণা বোঝা এবং
            ইন্টারঅ্যাকটিভ কার্যকলাপের মাধ্যমে প্রাথমিক পড়া ও লেখার দক্ষতা
            অর্জনের সুযোগ প্রদান করা হয়। <br /></p>

            <span className="flex items-center gap-2 pl-6"> <FaCircle className="h-2 w-2 "/> সামাজিক দক্ষতা:</span>
            <p className="pl-10 pr-20">
 শিশুদের মধ্যে
            শেয়ারিং, পালা নেওয়া এবং নিয়ম মেনে চলার মতো মৌলিক সামাজিক দক্ষতা
            গড়ে তোলার উপর গুরুত্ব দেওয়া হয়, যাতে তারা সহপাঠী এবং
            প্রাপ্তবয়স্কদের সঙ্গে ইতিবাচকভাবে মেলামেশা করতে পারে।</p>
            <br />
    
            <p className="">
            <span className="font-bold">
              শারীরিক এবং সৃজনশীল বিকাশ: <br />
            </span>{" "}

<span className="flex items-center gap-2 pl-6"> <FaCircle className="h-2 w-2 "/> খেলার মাধ্যমে শিক্ষা:</span>
<p className="pl-10 pr-20 -mt-8">
            <br /> পাঠ্যক্রমে খেলা ও অনুসন্ধানের মাধ্যমে সূক্ষ্ম এবং বৃহৎ মোটর
            দক্ষতার উন্নয়নে সহায়তা করা হয়। ড্রয়িং, পেইন্টিং এবং সংগীতের মতো
            কার্যকলাপ সৃজনশীলতা এবং সমন্বয় উন্নত করতে সাহায্য করে। <br /> </p>
            </p>
            <span className="font-bold flex items-center gap-2 mt-4 pl-6">
              <FaCircle className="h-2 w-2" />
              শারীরিক শিক্ষা:
            </span>
            <p className="pl-10 pr-20">
            কাঠামোবদ্ধ শারীরিক কার্যকলাপগুলি স্বাস্থ্যকর বিকাশ এবং শারীরিক
            ফিটনেস বাড়ানোর জন্য ডিজাইন করা হয়েছে, যা বৃহৎ এবং ক্ষুদ্র দক্ষতাকে
            সমর্থন করে।</p>
            <br /> 
            <span className="font-bold">সামগ্রিক বিকাশ:</span> <br />
            <span className="font-bold flex items-center gap-2 pl-6">
              <FaCircle className="h-2 w-2" />
              আবেগিক বিকাশ:
            </span>{" "}
            <p className="pl-10 pr-20">
            একটি সহায়ক পরিবেশ প্রদান করা হয়, যেখানে শিশুরা আত্মবিশ্বাস,
            আত্ম-সচেতনতা এবং সহনশীলতা গড়ে তুলতে পারে ইতিবাচক প্রতিক্রিয়া ও
            পরিচালিত ইন্টারঅ্যাকশনের মাধ্যমে।
            </p>
            <br />
            <span className="font-bold flex items-center gap-2 pl-6">
              <FaCircle className="h-2 w-2" />
              অন্বেষণ ও কৌতূহল:
            </span>{" "}
            <p className="pl-10 pr-20">
            শেখার প্রতি আগ্রহ এবং কৌতূহলকে উৎসাহিত করা হয়, যাতে শিশুদের
            হাতে-কলমে কার্যকলাপ এবং আবিষ্কারের মাধ্যমে তাদের আগ্রহ অন্বেষণের
            সুযোগ দেওয়া হয়, যা শিক্ষার প্রতি আজীবন ভালোবাসা গড়ে তোলে। 
            </p>
          </span>
        </div>
        <div>
          <img
            src={kidImg}
            alt="A small Caucasian boy playing with colored plasticine"
            className="w-full h-[1340px]"
          />
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:`url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center ">
          <div className="max-w-md bg-base-200 text-black h-80 ">
            <h1 className="mb-5 text-3xl font-bold my-4 mt-8">আবেদনকাল</h1>
            <p className="mb-5 leading-loose px-5">
            
            প্রাক-প্রাথমিক শেণিতে ভর্তির আবেদনকাল 
            নভেম্বর মাসে শুরু হয়ে ফেব্রুয়ারির শেষ দিন পর্যন্ত চলমান থাকে। আপনার আদুরে সোণামণিকে এই আদর্শ শিক্ষা প্রতিষ্ঠানে ভর্তির জন্য, অনুগ্রহ করে এই <button>
                <Link to='/applicationForm' className="text-sky-400"> আবেদন ফর্মটি</Link>
                </button> পূরণ করুন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrePrimary;
