import SectionTitle from '../../components/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className='my-20 font-noto-sans-bengali'>
            <SectionTitle subHeading="অভিবাবকদের মতামত" heading="প্রশংসা জ্ঞাপন"></SectionTitle>
            
            
            
            
            
            
            
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="mx-24 flex flex-col items-center my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='my-8'>{review.details}</p>
                            <h3 className='text-orange-400'>{review.name}</h3>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    )
}

export default Testimonials