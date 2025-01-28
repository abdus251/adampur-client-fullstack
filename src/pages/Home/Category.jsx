import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../assets/mini-doctor/doc1.jpg'
import slide2 from '../../assets/home/artCom.jpeg'
import slide3 from '../../assets/home/girlsFoot.jpeg'
import slide4 from '../../assets/home/doastu.jpeg'
import slide5 from '../../assets/mini-doctor/garden5.jpg'
import slide6 from '../../assets/home/dengo.jpeg'
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
  {[
    { src: slide1, alt: "ক্ষুদে ডাক্তার", text: "ক্ষুদে ডাক্তার" },
    { src: slide2, alt: "চিত্রাংকন প্রতিযোগিতা", text: "চিত্রাংকন প্রতিযোগিতা" },
    { src: slide3, alt: "প্রাথমিক বিদ্যালয় গোল্ডকাপ", text: "প্রাথমিক বিদ্যালয় গোল্ডকাপ" },
    { src: slide4, alt: "জাতীয় দিবসে দুআ", text: "জাতীয় দিবসে দুআ" },
    { src: slide5, alt: "বৃক্ষ রোপণ", text: "বৃক্ষ রোপণ" },
    { src: slide6, alt: "ফুটবল প্রতিযোগিতা", text: "ডেঙ্গু প্রতিরোধে সচেতনতা সৃষ্টি" },
  ].map((slide, index) => (
    <SwiperSlide key={index}>
      <div className="relative h-[300px] w-[280px] overflow-hidden bg-gray-800">
        <img
          className="w-full h-full object-cover"
          src={slide.src}
          alt={slide.alt}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h3 className="text-center text-orange-400 uppercase">{slide.text}</h3>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>



        </section>
    )
}

export default Category