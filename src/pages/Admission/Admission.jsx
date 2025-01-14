import docc1 from "../../assets/mini-doctor/docc1.jpg";
import eyeTest from "../../assets/mini-doctor/eye.jpg";
import tree from "../../assets/Other/treePlant.jpeg";
import child from "../../assets/Other/2child.jpeg";

const Admission = () => {
  return (
    <>
      <div className="font-noto-sans-bengali">
        {/* admission */}
        <div className="text-center px-6 md:px-16 lg:px-48 leading-loose mt-40 items-center justify-center">
  <h1 className="text-3xl md:text-3xl lg:text-3xl text-sky-400 mb-16">ভর্তি ও নিবন্ধন</h1>
  <p className="text-justify">
    আদমপুর সরকারি প্রাথমিক বিদ্যালয়ের আনন্দের সঙ্গে আগামী শিক্ষাবর্ষের জন্য ভর্তি কার্যক্রম শুরু করেছে। নিচে ভর্তি প্রক্রিয়া, প্রয়োজনীয় কাগজপত্র, এবং শিক্ষাগত যোগ্যতার বিষয়ে তথ্য দেওয়া হয়েছে। আরও জানার জন্য আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না।
  </p>
</div>

        {/* academic */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10  px-48">
          <div>
            <h1 className="text-3xl text-sky-400 mb-8 mt-32 text-center">
              একাডেমিক <br />
              যোগ্যতা
            </h1>
            <p className="text-justify pr-6">
              {" "}
              শিক্ষার্থীদের সর্বশেষ ফলাফল কার্ড বা মার্কশিট জমা দিতে হবে। ভর্তির
              পূর্বে শিক্ষকগণ বাংলা, ইংরেজি ও গণিত বিষয়ে পারঙ্গমতা যাচাই করে
              ভর্তি নিশ্চিত করবেন। এক্ষেত্রে কর্তৃপক্ষের সিদ্ধান্তই চূড়ান্ত বলে
              বিবেচিত হবে। সকল সম্ভাব্য শিক্ষার্থীদের একটি স্তর নির্ধারণ
              পরীক্ষার মধ্য দিয়ে যেতে হবে। স্তর নির্ধারণ পরীক্ষা অনুরোধের
              ভিত্তিতে আয়োজন করা হয়।
            </p>
          </div>
          <div>
            <img
              src={docc1}
              className="w-full"
            />
          </div>
        </div>

        {/* cost */}
        <div className="grid grid-cols-1 md:grid-cols-2   px-48">
          <div>
            <img
              src={tree}
              className="w-full"
            />
          </div>
          <div>
            <h1 className="text-3xl text-sky-400 mt-32 mb-8 text-center">
              খরচ ও ভর্তুকি
            </h1>

            <p className="pl-6">
              স্কুলের কোন ভর্তি ফি নেই। নেই কোন মাসিক বেতন কিংবা বার্ষিক ফি। বরং ভর্তি হওয়ার পরপরিই দেওয়া হয়ে বিনামূল্যে একসেট পাঠ্যপুস্তক। এছাড়াও মাসিক ১৫০ টাকা হারে প্রতি তিন মাস অন্তর অন্তর সরকারি উপবৃত্তি পাবে। এছাড়াও সকল শিক্ষার্থী ৩ টি প্রান্তিক মূল্যায়নের জন্য প্রয়োজনীয় সংখ্যক খাতা বিনামূল্যে পাবে। বছরে একবার নূন্যতম একটি করে নোট খাতা স্কুল কর্তৃক তাদেরকে প্রদান করা হবে।  এছাড়াও বিনামূল্যে ছাত্র-ছাত্রীদের জন্য ক্রিকেট, ফুটবল, কেরোমবোর্ড, ব্যডমিন্টন খেলার সামগ্রী সরবরাহ করা হয়।
              আরও জানতে চান, আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না।
            </p>
          </div>
        </div>
        {/* enrolment */}
        <div className="grid grid-cols-1 md:grid-cols-2   px-48">
          <div>
            <h1 className="text-3xl text-sky-400 mt-32 mb-8 text-center">
            ভর্তির প্রক্রিয়া
            </h1>
            <p className="text-justify pr-6">
              {" "}
              স্কুলে আবেদন করার প্রক্রিয়া: <br />

১. নিবন্ধন ফর্ম পূরণ করুন। আপনি একটি নিশ্চিতকরণ বার্তা পাবেন যেখানে উল্লেখ থাকবে যে আপনি স্তর মূল্যায়নের জন্য একটি স্থান পেয়েছেন। মূল্যায়নের তারিখ পরে জানানো হবে। <br />

২. স্তর মূল্যায়ন সম্পন্ন করুন। <br />

৩. নিবন্ধন ফি প্রদান করুন। <br />

৪. স্কুল চুক্তিতে স্বাক্ষর করুন।
            </p>
          </div>
          <div>
            <img
              src={child}
              className="w-full"
            />
          </div>
        </div>
        {/* application */}
        <div className="grid grid-cols-1 md:grid-cols-2   px-48">
          <div>
            <img
              src={eyeTest}
              className="w-full"
            />
          </div>
          <div>
            <h1 className="text-3xl text-sky-400 mt-48 mb-8 text-center">
            আবেদন ফরম
            </h1>
            <p className="text-justify pl-16 underline">
            আবেদন ফরম পূরণ করতে এখানে ক্লিক করুন!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
