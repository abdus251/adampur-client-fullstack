import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/building.jpg'
import img2 from '../../../assets/home/h2.jpg'
import img3 from '../../../assets/home/h3.jpg'
import img4 from '../../../assets/home/h4.jpg'
import img5 from '../../../assets/home/h5.jpg'
import img6 from '../../../assets/home/h6.jpg'

const Banner = () => {
  return (
    <Carousel>
    <div className="">
        <img style={{height:550}} className="" src={img1} />
    </div>
    <div>
        <img style={{height:550}} src={img2} />
    </div>
    <div>
        <img style={{height:550}} src={img3} />
    </div>
    <div>
        <img style={{height:550}} src={img4} />
    </div>
    <div>
        <img style={{height:550}} src={img5} />
    </div>
    <div>
        <img style={{height:550}} src={img6} />
    </div>
</Carousel>
  )
}

export default Banner