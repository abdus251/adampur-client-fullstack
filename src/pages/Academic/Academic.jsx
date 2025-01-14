import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/Other/md.jpg';
import img2 from '../../assets/Other/received_467856419482586.jpeg';
import img3 from '../../assets/Other/received_1063211654739475.jpeg';
import img4 from '../../assets/Other/received_1083937709600649.jpeg';
import img5 from '../../assets/Other/received_1629600244515117.jpeg';
import img6 from '../../assets/Other/received_1699709477458574.jpeg';

const Academic = () => {
  return (
    <>
    <div>
        <div className='text-center px-48 leading-loose mt-40 font-noto-sans-bengali '>
            <h1 className='text-3xl text-sky-400 mb-16'>শিক্ষাগত উৎকর্ষতা</h1>
            <p className='text-justify'>
            আদমপুর সরকারি প্রাথমিক বিদ্যালয়ের মূল্যবোধ এবং কার্যক্রম শুধু শিক্ষাগত সাফল্যের জন্যই নয়, বরং শিক্ষার্থীদের কল্যাণ এবং তাদের সক্রিয় সম্প্রদায়ের সদস্য হিসেবে গড়ে তোলার প্রতিও মনোনিবেশ করে। শিক্ষার্থীদের মতামতকে পরিপক্কতা এবং স্কুল-পরবর্তী জীবনের জন্য তাদের প্রস্তুত করার একটি গুরুত্বপূর্ণ উপাদান হিসেবে বিবেচনা করা হয়। আমাদের স্কুলের সেরা কার্যপদ্ধতি গঠনে আমরা আমাদের অভিভাবকদের মতামত এবং অবদানকে গভীরভাবে মূল্য দিই। এই উদ্দেশ্যে মায়েদেরকে নিয়ে প্রায় প্রতি মাসেই মা সমাবেশের আয়োজন করা হয়। যেখানে অভিভাবকগণ শিক্ষকদের নিকট তাদের প্রত্যাশা ব্যাক্ত করে থাকেন। এছাড়াও একটি অভিভাবক সমিতি(পিটিএ) স্কুল এবং অভিভাবকদের মধ্যে নিয়মিত যোগাযোগের একটি প্ল্যাটফর্ম নিশ্চিত করে, যা আমাদের সেবাকে আরও উন্নত করার ক্ষেত্রে সহায়ক হয়।
            </p>
        </div>

<div className="px-48">
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
                  <img className="h-[550px] w-full object-cover " src={img1} alt="Building"/>
                </div>
                <div>
                  <img className="h-[550px] w-full object-cover" src={img2} alt="Image 2" />
                </div>
                <div>
                  <img className="h-[550px] w-full object-cover" src={img3} alt="Image 3" />
                </div>
                <div>
                  <img className="h-[550px] w-full object-cover" src={img4} alt="Image 4" />
                </div>
                <div>
                  <img className="h-[550px] w-full object-cover" src={img5} alt="Image 5" />
                </div>
                <div>
                  <img className="h-[550px] w-full object-cover" src={img6} alt="Image 6" />
                </div>
              </Carousel>
</div>
    </div>
    </>
  )
}

export default Academic