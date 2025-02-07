import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/building.jpg';
import img2 from '../../../assets/mini-doctor/received_1098666741461416.jpeg';
import img3 from '../../../assets/home/h3.jpg';
import img4 from '../../../assets/home/h4.jpg';
import img5 from '../../../assets/home/exam.jpeg';
import img6 from '../../../assets/home/h6.jpg';

const Banner = () => {
  return (
    <div className="w-full">
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
      className="w-full rounded-lg shadow-lg"
    >
      <div>
        <img className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-top" src={img1} alt="Building"/>
      </div>
      <div>
        <img className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-top" src={img2} alt="Image 2"/>
      </div>
      <div>
        <img className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-top" src={img3} alt="Image 3"/>
      </div>
      <div>
        <img className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-top" src={img4} alt="Image 3"/>
      </div>
      <div>
        <img className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-top" src={img5} alt="Image 3"/>
      </div>
      <div>
        <img className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-top" src={img6} alt="Image 3"/>
      </div>
    </Carousel>
  </div>
  
  );
};

export default Banner;
