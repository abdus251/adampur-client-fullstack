import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 font-noto-sans-bengali sm:ml-5">
        <div className="w-2/3 text-center mt-40 ">
          <h1 className="text-2xl text-center text-sky-400 my-10 ">
            যোগাযোগ করুন
          </h1>
         <div className="leading-loose pl-2">
         আদমপুর সরকারি প্রাথমিক বিদ্যালয় <br />
         সর্বদা  তার দরজা খোলা রাখে।
          আমাদের একাডেমিক কার্যক্রম, ইভেন্ট, শিক্ষার্থী, <br />
          কর্মচারী বা অন্য যেকোনো বিষয়ে প্রশ্ন থাকলে নির্দ্বিধায় যোগাযোগ করুন।{" "}
          <br />
          <br />
          <br />
          <br />
          ঠিকানা: আদমপুর, বন্দর, নারায়ণগঞ্জ, বাংলাদেশ <br />
          ইমেইল: adampurgps6@gmail.com <br />
          ফোন নম্বর: (+৮৮০)১৯১৩০৯৮৮৪২
         </div>
          <div className="flex gap-5 my-10 justify-center mt-20">
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
            <AiOutlineMail />
            </Link>
          </div>
        </div>
        <div className="mt-60 gap-20 w-2/3 ">
          <section className=" ">
            {/* form */}
            <form className="ml-5">
              {/* name */}
              <div className="gap-5 sm:pl-10">
                <fieldset className="form-control w-full">
                  <input
                    type="text"
                    className="grow border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                    placeholder="নাম"
                  />

                  {/* email */}
                  <input
                    type="email"
                    className="grow border-b border-gray-300 focus:border-blue-500 focus:outline-none my-4"
                    placeholder="ইমেইল"
                  />

                  {/* mobile */}
                  <input
                    type="text"
                    className="grow border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                    placeholder=" মোবাইল "
                  />
                  {/* date */}
                  <input
                    type="date"
                    className="grow border-b border-gray-300 focus:border-blue-500 focus:outline-none mt-4"
                    placeholder="Date"
                  />
                </fieldset>

                {/* subject */}
                <fieldset className="form-control w-full">
                  <input
                    type="text"
                    className="grow border-b border-gray-300 focus:border-blue-500 focus:outline-none mt-4"
                    placeholder="বিষয়"
                  />
                  <textarea
                    className="textarea  border-black h-40 rounded-none mt-4"
                    placeholder="অনুগ্রহপূর্বক বার্তাটি এখানে লিখুন---"
                  ></textarea>
                </fieldset>
              </div>
              <div className=" lg:ml-5">
  <button className="mt-8 sm:ml-5 bg-black text-white py-2 sm:py-3 rounded-none sm:w-[100px] lg:w-[360px] w-full font-bold mb-20">
    Submit
  </button>
</div>
            </form>
          </section>
        </div>
      </div>
      {/* MAP */}
      <div className="relative w-full pb-[56.25%] rounded-none">
  <iframe
    title="Responsive Google Map"
    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%E0%A6%86%E0%A6%A6%E0%A6%AE%E0%A6%AA%E0%A7%81%E0%A6%B0,%20%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%B0,+(%E0%A6%86%E0%A6%A6%E0%A6%AE%E0%A6%AA%E0%A7%81%E0%A6%B0%20%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF%20%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%A5%E0%A6%AE%E0%A6%BF%E0%A6%95%20%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    className="absolute top-0 left-0 w-full h-full border-none"
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>

    </>
  );
};

export default Contact;
