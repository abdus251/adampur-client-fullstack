import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/building.jpg';
import img2 from '../../../assets/home/h2.jpg';
import img3 from '../../../assets/home/h3.jpg';
import img4 from '../../../assets/home/h4.jpg';
import img5 from '../../../assets/home/h5.jpg';
import img6 from '../../../assets/home/h6.jpg';

const Banner = () => {
  return (
    <div className="">
      <div className="flex w-full flex-col border-opacity-50 mt-24">
      </div>
    
      {/* Carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="rounded-lg shadow-lg"
      >
        <div>
          <img
  className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full object-cover" src={img1} alt="Building"/>
        </div>
        <div>
          <img
  className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full object-cover" src={img2} alt="Image 2" />
        </div>
        <div>
          <img
  className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full object-cover" src={img3} alt="Image 3" />
        </div>
        <div>
          <img
  className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full object-cover" src={img4} alt="Image 4" />
        </div>
        <div>
          <img
  className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full object-cover" src={img5} alt="Image 5" />
        </div>
        <div>
          <img
  className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full object-cover" src={img6} alt="Image 6" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
