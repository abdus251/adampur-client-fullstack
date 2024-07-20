import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImg from '../../assets/cooking/adorable.jpg'
import tecacherImg from '../../assets/banner/kids-home.jpg'
import artImg from '../../assets/home/artCom.jpeg'
import businessImg from '../../assets/banner/set-kid.jpg'
import doc1 from '../../assets/home/md.jpg'
import motherImg from '../../assets/home/motherCon.jpeg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const artist = menu.filter(item => item.category === 'artist');
    const doctor = menu.filter(item => item.category === 'doctor');
    const engineer = menu.filter(item => item.category === 'engineer');
    const teacher = menu.filter(item => item.category === 'teacher');
    const business = menu.filter(item => item.category === 'business');
    return (
        <div className=''>
            <Helmet>
                <title>আদমপুর | মেনু</title>
            </Helmet>
            
            <div className="mb-20"> <Cover img={motherImg} title="আমাদের কর্মব্যপকতা"></Cover></div>
            
            <SectionTitle subHeading="শিক্ষার্থীদের উচ্চাকাঙ্খা" heading="আগামীর পেশাজীবীগণ"></SectionTitle>
            
            <div className="mb-20">
                <MenuCategory items={engineer} title={"engineer"}
                    img={menuImg}
                ></MenuCategory>
            </div>

            <div className="mb-20">
                <MenuCategory items={doctor} title={"doctor"} img={doc1}></MenuCategory>
            </div>

            <div className="mb-20">
            <MenuCategory items={teacher} title={"teacher"} img={tecacherImg}></MenuCategory>
            </div>

            <div className="mb-20">
            <MenuCategory items={business} title={"business"} img={businessImg}></MenuCategory>
            </div>
            <div className="mb-20">
            <MenuCategory items={artist} title={"artist"} img={artImg}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;