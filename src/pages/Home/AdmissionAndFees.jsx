import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AdmissionAndFees = () => {
  return (
    <>
      <div className="bg-sky-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 text-center px-8 font-noto-sans-bengali">
        <div className="my-10 ">
          <h1 className="text-2xl text-sky-400">আমাদের সম্পর্কে</h1>
          <p className="mt-10">
            আদমপুর সরকারি প্রাথমিক বিদ্যালয়, <br /> বন্দর, নারায়ণগঞ্জ একটি
            সরকারি প্রাথমিক বিদ্যালয়, যা ১৯৬৯ সালে শিক্ষার মহানব্রত নিয়ে চালু
            হয়। এটি বন্দরের আদমপুর এলাকায় অবস্থিত এবং এই বিদ্যালয়ে সহজেই
            জনপরিবহনের মাধ্যমে পৌঁছানো যায়।
          </p>
        </div>
        <div className="my-10">
          <h1 className="text-2xl text-sky-400">ভর্তি এবং ফি</h1>
          <p className="mt-10"></p>
          <p className="mt-10">
            আদমপুর সরকারি প্রাথমিক বিদ্যালয়ে শিক্ষাবর্ষ জানুয়ারি মাসে শুরু হয়।
            প্রাক-প্রাথমিক থেকে ৫ম শ্রেণি পর্যন্ত শিক্ষার্থীদের সারা বছরই ভর্তি
            করা হয়, যদি আসন খালি থাকে এবং শিক্ষার্থীরা ভর্তির যোগ্যতা ও
            শর্তাবলী পূরণ করে। সরকারি বিধি অনুসারে এখানে শিক্ষার্থীরা সম্পূর্ণ বিনা ফিতে ভর্তি হয়ে থাকে এবং পাঠ গ্রহণের বিনিময়ে বিদ্যালয়ে কোন ধরনের অর্থ প্রদান করতে হয় না।
          </p>
        </div>
        <div className="my-10 ">
          <h1 className="text-2xl text-sky-400">মিশন</h1>
          <p className="mt-10">
            আমাদের মিশন হল একটি আন্তর্জাতিক, অনুসন্ধানী এবং সহায়ক পরিবেশে
            উচ্চমানের শিক্ষা প্রদান করা। আমরা শিক্ষার্থীদের অনুপ্রাণিত করতে এবং
            তাদের প্রয়োজনীয় দক্ষতা প্রদান করতে লক্ষ্য রাখি, যাতে তারা
            দায়িত্বশীল বৈশ্বিক নাগরিক হিসেবে তাদের সম্ভাবনা পূর্ণরূপে ধারণ করতে
            পারে।
          </p>
        </div>
      </div>

      <div className="font-noto-sans-bengali">
        <p className="my-20 px-28 italic text-sky-400 text-xl">
          আমরা শিক্ষার্থীদের ক্ষমতায়ন করি যাতে তারা জীবনভর শেখার জন্য
          প্রয়োজনীয় জ্ঞান এবং দক্ষতা অর্জন, প্রদর্শন, ব্যাখ্যা এবং মূল্যায়ন
          করতে পারে। এর মাধ্যমে তারা বৈশ্বিক সম্প্রদায়ে অংশগ্রহণ এবং অবদান
          রাখতে সক্ষম হয়, যখন তারা আমাদের স্কুলের মৌলিক মূল্যবোধগুলি যেমন:
          শ্রদ্ধা, সহনশীলতা, অন্তর্ভুক্তি এবং বহু সংস্কৃতির পরিবেশে উৎকর্ষতা
          চর্চা করে।
        </p>
      </div>

      <div className="my-10 pt-20 pb-20 bg-sky-50 text-center font-noto-sans-bengali ">
        <h1 className="text-3xl text-sky-400">যোগাযোগ করুন</h1>
        <p className="mt-5">
          আদমপুর সরকারি প্রাথমিক বিদ্যালয়, <br /> বন্দর, নারায়ণগঞ্জ, বাংলাদেশ
          <br />
          মোবাইল: + ১৯১৩০৯৮৮৪২ (অফিস সময়ে)
          <br />
          অফিস ইমেইল: admin@nordenschool.com
        </p>
        <div className="flex gap-5 my-10 justify-center">
        <Link><FaFacebookF /></Link>
        <Link><FaInstagram /></Link>
        <Link><FaLinkedinIn /></Link>
        </div>
        <section className="mt-20">
          {/* form */}
          <form className=" px-8">
            {/* name */}
            <div className=" gap-5 ">
              <fieldset className="form-control w-full">
                <input
                  type="text"
                  className="grow bg-sky-50 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                  placeholder="নাম"
                />

                {/* email */}
                <input
                  type="email"
                  className="grow bg-sky-50 border-b border-gray-300 focus:border-blue-500 focus:outline-none my-4"
                  placeholder="ইমেইল"
                />

                {/* mobile */}
                <input
                  type="text"
                  className="grow bg-sky-50 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                  placeholder=" মোবাইল "
                />
                {/* date */}
                <input
                  type="date"
                  className="grow bg-sky-50 border-b border-gray-300 focus:border-blue-500 focus:outline-none mt-4"
                  placeholder="Date"
                />
              </fieldset>

              {/* subject */}
              <fieldset className="form-control w-full">
                <input
                  type="text"
                  className="grow bg-sky-50 border-b border-gray-300 focus:border-blue-500 focus:outline-none mt-4"
                  placeholder="বিষয়"
                />
                <textarea className="textarea  border-red-400 h-40 rounded-none mt-4 bg-red-100" placeholder="অনুগ্রহপূর্বক বার্তাটি এখানে লিখুন---"></textarea>
              </fieldset>
            </div>
            <button className=" mt-8 bg-black text-white py-3 rounded-none w-full font-bold">
              জমা দিন
            </button>
          </form>
        </section>
      </div>
      
  {/* MAP */}
  <div style={{width: '100%'}}>
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%E0%A6%86%E0%A6%A6%E0%A6%AE%E0%A6%AA%E0%A7%81%E0%A6%B0,%20%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%B0,+(%E0%A6%86%E0%A6%A6%E0%A6%AE%E0%A6%AA%E0%A7%81%E0%A6%B0%20%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF%20%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%A5%E0%A6%AE%E0%A6%BF%E0%A6%95%20%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
    </div>  
    </>
  );
};

export default AdmissionAndFees;
