import orderCoverImg from "../../../assets/home/building.jpg";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet-async";
import logo from "../../../../public/Adompur logo.jpg";
import DownloadFiles from "../DownloadFiles/DownloadFiles";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5} },
};



const Order = () => {
  return (
    <motion.div variants={intro} initial="hidden" animate="visible">
      <Helmet>
        <title>আদমপুর | আমাদের বিদ্যালয়</title>
      </Helmet>

      <div className="text-center">
        <motion.h3
          className="text-2xl mt-40 font-noto-sans-bengali font-semibold"
          variants={introChildren}
        >
          আমাদের <br />
          সম্পর্কে{" "}
        </motion.h3>
        <motion.small
          className="font-noto-sans-bengali text-lg text-orange-400"
          variants={introChildren}
        >
          জাতি গঠনে নিরন্তর প্রচেষ্টা চালিয়ে যাওয়া
        </motion.small>
       <div>
       <img
          src={orderCoverImg}
          className="rounded-full w-96 h-96 mx-auto items-center justify-center my-2"
        />
       </div>
        <div className="-mt-60 -ml-80 flex gap-2 justify-center items-center">
          <img
            className="h-28 w-28 ml-60 mt rounded-full"
            src={logo}
            alt="Logo"
          />
          <h1 className="text-sky-400 font-bold text-xl font-noto-sans-bengali">
            আদমপুর <br />
            সরকারি প্রাথমিক <br />
            বিদ্যালয়
          </h1>
        </div>
      </div>
      <div className="mt-32 px-20 text-justify leading-loose font-noto-sans-bengali">
        <section>
          আদমপুর সরকারি প্রাথমিক বিদ্যালয়, যা ১৯৬৯ সালে প্রতিষ্ঠিত হয়,
          একটি স্বনামধন্য সরকারি শিক্ষা প্রতিষ্ঠান। এটি গণপ্রজাতন্ত্রী বাংলাদেশ
          সরকারের প্রাথমিক ও গণশিক্ষা মন্ত্রণালয়ের অধীনে প্রাথমিক শিক্ষা বিভাগের
          সহযোগিতায় জেলা প্রাথমিক শিক্ষা অফিসার কর্তৃক পরিচালিত হয় এবং এর
          শিক্ষা কার্যক্রম সরাসরি তত্ত্বাবধান করে উপজেলা প্রাথমিক শিক্ষা অফিস,
          বন্দর। এখানে, শিক্ষার প্রধান ভাষা হিসেবে বাংলা ব্যবহৃত হয়, পাশাপাশি
          ইংরেজি ভাষাও গুরুত্ব দিয়ে শেখানো হয়। স্কুলটি
          প্রাক-প্রাথমিক থেকে পঞ্চম শ্রেণি পর্যন্ত প্রাথমিক শিক্ষা প্রদান করে
          এবং বর্তমানে এসব শ্রেণির শিক্ষার্থীদের ভর্তি নিচ্ছে।
          <br />
          <br />
          ২০১১ সালে পরিমার্জিত শিক্ষাক্রমে প্রাথমিক শিক্ষার লক্ষ্য ও উদ্দেশ্য
          বাস্তবায়নে আদমপুর সরকারি প্রাথমিক বিদ্যালয় নিরলসভাবে কাজ করে যাচ্ছে।
          এটি জাতীয় শিক্ষা নীতি, পাঠ্যক্রম এবং প্রস্তাবিত পাঠঘণ্টা অনুসরণ করে।
          শিক্ষা বিভাগের সঙ্গে ঘনিষ্ঠভাবে সহযোগিতা করে। জেলা ও উপজেলা প্রাথমিক
          শিক্ষা অফিসের কর্মকর্তারা আদমপুর স্কুলের শিক্ষার ফলাফল ও লক্ষ্যসমূহ
          মূল্যায়ন করেন, যা জাতীয় প্রত্যাশার সঙ্গে সামঞ্জস্যপূর্ণ। তারা
          শিশুকেন্দ্রিক শিক্ষার ওপর গুরুত্বারোপ করেন। আমরা প্রতিটি শিক্ষার্থীর
          ব্যক্তিগত প্রতিভা চিহ্নিত ও লালন করার চেষ্টা করি এবং নিবেদিতপ্রাণ ও
          দক্ষ শিক্ষকদের মাধ্যমে উচ্চমানের শিক্ষা প্রদান করি। আমাদের সমন্বিত
          পাঠ্যক্রমের পাশাপাশি, আমরা বিভিন্ন আকর্ষণীয় সহশিক্ষামূলক কার্যক্রম
          প্রদান করি যা শিক্ষার্থীদের বছরজুড়ে অনুপ্রাণিত ও উৎসাহী রাখে।
          <br />
          <br />
          বৈচিত্র্যময় শিক্ষার্থী পরিবেশে আদমপুর স্কুলের শিক্ষার্থী বৈচিত্র্যময়
          পরিবেশে, যেখানে বিভিন্ন ধর্ম, বর্ণ ও সংস্কৃতির শিশুদের অন্তর্ভুক্তি
          রয়েছে। আমরা সকল পটভূমির শিক্ষার্থীদের আন্তরিকভাবে স্বাগত জানাই এবং
          বৈচিত্র্য উদযাপন করি। আমাদের কার্যক্রম একাডেমিক সাফল্য বৃদ্ধির
          পাশাপাশি শিক্ষার্থীদের সমাজের সক্রিয় ও দায়িত্বশীল সদস্য হয়ে উঠতে
          উৎসাহিত করে।
          <br />
          <br />
          শিক্ষা সেবা ও কার্যক্রমের আওতায় আমরা বিভিন্ন শিক্ষা সেবা প্রদান করি,
          যার মধ্যে প্রাথমিক শিক্ষা সপ্তাহ উদযাপন, প্রাথমিক বিদ্যালয় গোল্ডকাপ
          প্রতিযোগিতায় অংশগ্রহণ, শিক্ষা সফর, দুর্বল শিক্ষার্থীদের বিশেষ যত্ন,
          শ্রেণি কার্যক্রমের বাইরেও অপারগ শিক্ষার্থীদের বিশেষ পাঠদান, ওজন মাপা,
          কৃমিনাশক ঔষধ সেবন করানো, চক্ষু পরীক্ষার মতো গুরুত্বপূর্ণ সেবা প্রদান
          করে থাকি।
        </section>
      </div>
      {/* <ImageGallery /> */}
      <DownloadFiles />
    </motion.div>
  );
};

export default Order;
