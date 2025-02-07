import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import threeImg from '../../assets/mini-doctor/eye.jpg';
import preImg from '../../assets/Other/received_1083937709600649.jpeg';
import fourImg from '../../assets/Other/received_467856419482586.jpeg';
import fiveImg from '../../assets/Other/md.jpg';
import tecacherImg from '../../assets/banner/kids-home.jpg'
import artImg from '../../assets/home/artCom.jpeg'
import motherImg from '../../assets/home/motherCon.jpeg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './MenuCategory';
import useFee from '../../hooks/useFee';


const Menu = () => {
    const [menu] = useMenu();
    const [fee] = useFee();
    const popular = menu.filter(item => item.category === 'popular');

    const prePrimary = menu.filter(item => item.category === 'prePrimary');
    
    const classOne = menu.filter(item => item.category === 'classOne');

    const classTwo = menu.filter(item => item.category === 'classTwo');
    const classThree = menu.filter(item => item.category === 'classThree');
    const classFour = menu.filter(item => item.category === 'classFour');

    const classFive = menu.filter(item => item.category === 'classFive');

    const donate = fee.filter(item => item.name === "donate");
  const logo = fee.filter(item => item.name === "logo");
  const scoutFee = fee.filter(item => item.name === "scoutFee");
  const partyFee = fee.filter(item => item.name === "partyFee");
  const tourFee = fee.filter(item => item.name === "tourFee");
 
    return (
        <div className='font-noto-sans-bengali'>
            <Helmet>
                <title>আদমপুর | শিক্ষার্থী</title>
            </Helmet>
            
            <div className="mb-20 mt-24"> <Cover img={motherImg} title="আমাদের কর্মব্যপকতা" subTitle="মায়েদের সাথে সম্মানিত শিক্ষকদের মতবিনিময় সভা "></Cover></div>
            
            {/* prePrimary */}
            <SectionTitle subHeading="শিক্ষার হাতেখড়ি" heading="প্রাক-প্রাথমিক শ্রেণি"></SectionTitle>
            
            <div className="mb-20">
                <MenuCategory items={prePrimary} title={"প্রাক-প্রাথমিক"} subTitle={"ইচ্ছেমত খেলায় মত্ত শিশু শ্রেণির শিক্ষার্থীরা"}
                    img={tecacherImg}
                ></MenuCategory>
            </div>

            <div className="mb-20">
                <MenuCategory items={classOne} title={"প্রথম শ্রেণি"} subTitle={"কবিতা আবৃত্তি করছে একজন শিক্ষার্থী"} img={preImg}></MenuCategory>
            </div>

            <div className="mb-20">
            <MenuCategory items={classTwo} title={"দ্বিতীয় শ্রেণি"} subTitle={"চিত্রাংকন প্রতিযোগিতায় ছবি আঁকছে।"} img={artImg}></MenuCategory>
            </div>

            <div className="mb-20">
            <MenuCategory items={classThree} title={"তৃতীয় শ্রেণি"} subTitle={"চক্ষু পরীক্ষায় ব্যস্ত তৃতীয় শ্রেণির শিক্ষার্থীবৃন্দ।"} img={threeImg}></MenuCategory>
            </div>

            <div className="mb-20">
            <MenuCategory items={classFour} title={"চতুর্থ শ্রেণি"} subTitle={"মাল্টিমিডিয়া প্রজেক্টরের মাধ্যমে পাঠদান করছেন সম্মানিত শিক্ষক মহোদয়।"} img={fourImg}></MenuCategory>
            </div>
            {/* class Five */}
            <div className="mb-20">
            <MenuCategory items={classFive} title={"পঞ্চম শ্রেণি"} subTitle={"কৃমিনাশক ঔষধ সেবন করাচ্ছে ক্ষুদে ডাক্তারগণ।"} img={fiveImg}></MenuCategory>
            </div>
            

            {/* <div className="mb-20">
            <MenuCategory items={donate} title={"classThree"} img={artImg}></MenuCategory>
            </div> */}
        </div>
    );
};

export default Menu;