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
        <secton className="my-8">
            <SectionTitle
            heading={"বৈচিত্রময় কার্যক্রম"} subHeading={"সহ-শিক্ষামূলক উদ্যোগ"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
                
            >
                <div className="text-xl  ">
                    <SwiperSlide className=''>
                        <img className='h-[300px] w-[280px] border-red-00' src={slide1} alt="" />
                        <h3 className='my-4 text-center -mt-10 uppercase text-white'>ক্ষুদে ডাক্তার</h3>
                    </SwiperSlide>
                    <SwiperSlide> <img src={slide2} alt="" />
                        <h3 className=' text-center -mt-16 uppercase text-white'>চিত্রাংকন প্রতিযোগিতা</h3></SwiperSlide>
                    <SwiperSlide><img src={slide3} alt="" />
                        <h3 className=' text-center -mt-16 uppercase text-white'> বঙ্গমাতা ফুটবল প্রতিযোগিতা</h3></SwiperSlide>
                    <SwiperSlide> <img className='h-[300px] w-[280px]' src={slide4} alt="" />
                        <h3 className=' text-center -mt-10 uppercase text-white'>জাতীয় দিবসে দুআ</h3>
                    </SwiperSlide>
                    <SwiperSlide> <img className='h-[300px] w-[280px]' src={slide5} alt="" />
                        <h3 className=' text-center -mt-10 uppercase text-white'>বৃক্ষ রোপণ</h3>
                    </SwiperSlide>
                    <SwiperSlide> <img className='h-[300px] w-[280px]' src={slide6} alt="" />
                        <h3 className=' text-center -mt-10 uppercase text-white'>ফুটবল প্রতিযোগিতা</h3>
                    </SwiperSlide>
                </div>
            </Swiper>
        </secton>
    )
}

export default Category