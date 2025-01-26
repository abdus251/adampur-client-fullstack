import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../assets/mini-doctor/doc1.jpg'
import slide2 from '../../assets/home/artCom.jpeg'
import slide3 from '../../assets/home/girlsFoot.jpeg'
import slide4 from '../../assets/home/doastu.jpeg'
import slide5 from '../../assets/mini-doctor/garden5.jpg'
import slide6 from '../../assets/home/boyfoot.jpeg'
import SectionTitle from '../../components/SectionTitle';
const Category = () => {
    return (
        <section className="my-8 font-noto-sans-bengali text-sky-400">
            <SectionTitle
            heading={"বৈচিত্রময় কার্যক্রম"} subHeading={"সহ-শিক্ষামূলক উদ্যোগ"}></SectionTitle>

<Swiper
  slidesPerView={4} // Default for larger screens
  spaceBetween={30}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 10 }, // Small screens
    480: { slidesPerView: 2, spaceBetween: 15 }, // Slightly larger phones
    640: { slidesPerView: 2, spaceBetween: 20 }, // Small tablets
    768: { slidesPerView: 3, spaceBetween: 25 }, // Large tablets
    1024: { slidesPerView: 4, spaceBetween: 30 }, // Desktop
  }}
  className="mySwiper mb-24"
>
  <SwiperSlide>
    <div className="h-[300px] w-[280px] overflow-hidden  bg-gray-800">
      <img
        className="w-full h-full object-cover"
        src={slide1}
        alt="ক্ষুদে ডাক্তার"
      />
    </div>
    <h3 className="mt-4 text-center uppercase text-white">
      ক্ষুদে ডাক্তার
    </h3>
  </SwiperSlide>

  <SwiperSlide>
    <div className="h-[300px] w-[280px] overflow-hidden  bg-gray-800">
      <img
        className="w-full h-full object-cover"
        src={slide2}
        alt="চিত্রাংকন প্রতিযোগিতা"
      />
    </div>
    <h3 className="mt-4 text-center uppercase text-white">
      চিত্রাংকন প্রতিযোগিতা
    </h3>
  </SwiperSlide>

  <SwiperSlide>
    <div className="h-[300px] w-[280px] overflow-hidden  bg-gray-800">
      <img
        className="w-full h-full object-cover"
        src={slide3}
        alt="প্রাথমিক বিদ্যালয় গোল্ডকাপ"
      />
    </div>
    <h3 className="mt-4 text-center uppercase text-white">
      প্রাথমিক বিদ্যালয় গোল্ডকাপ
    </h3>
  </SwiperSlide>

  <SwiperSlide>
    <div className="h-[300px] w-[280px] overflow-hidden  bg-gray-800">
      <img
        className="w-full h-full object-cover"
        src={slide4}
        alt="জাতীয় দিবসে দুআ"
      />
    </div>
    <h3 className="mt-4 text-center uppercase text-white">
      জাতীয় দিবসে দুআ
    </h3>
  </SwiperSlide>

  <SwiperSlide>
    <div className="h-[300px] w-[280px] overflow-hidden  bg-gray-800">
      <img
        className="w-full h-full object-cover"
        src={slide5}
        alt="বৃক্ষ রোপণ"
      />
    </div>
    <h3 className="mt-4 text-center uppercase text-white">
      বৃক্ষ রোপণ
    </h3>
  </SwiperSlide>

  <SwiperSlide>
    <div className="h-[300px] w-[280px] overflow-hidden  bg-gray-800">
      <img
        className="w-full h-full object-cover"
        src={slide6}
        alt="ফুটবল প্রতিযোগিতা"
      />
    </div>
    <h3 className="mt-4 text-center uppercase text-white">
      ফুটবল প্রতিযোগিতা
    </h3>
  </SwiperSlide>
</Swiper>


        </section>
    )
}

export default Category