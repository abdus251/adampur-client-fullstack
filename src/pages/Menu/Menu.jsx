import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImg from '../../assets/cooking/adorable.jpg'
import tecacherImg from '../../assets/banner/kids-home.jpg'
import doc1 from '../../assets/home/md.jpg'
import artImg from '../../assets/home/motherCon.jpeg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const Artist = menu.filter(item => item.category === 'Artist');
    const Doctors = menu.filter(item => item.category === 'Doctors');
    const Engineer = menu.filter(item => item.category === 'Engineer');
    const Teacher = menu.filter(item => item.category === 'Teacher');
    const Business = menu.filter(item => item.category === 'Business');
    return (
        <div className=''>
            <Helmet>
                <title>আদমপুর | মেনু</title>
            </Helmet>
            <div className="mb-20"> <Cover img={artImg} title="আমাদের কর্মব্যপকতা"></Cover></div>
            <SectionTitle subHeading="শিক্ষার্থীদের উচ্চাকাঙ্খা" heading="আগামীর পেশাজীবীগণ"></SectionTitle>
            <MenuCategory items={Doctors}></MenuCategory>

            <div className="mb-20">
                <MenuCategory items={Artist} title={"প্রকৌশলী"}
                    img={menuImg}
                ></MenuCategory>
            </div>

            <div className="mb-20">
                <MenuCategory items={Engineer} title={"ক্ষুদে ডাক্তার"} img={doc1}></MenuCategory>
            </div>

            <div className="mb-20"></div>
            <MenuCategory items={Engineer} title={"শিক্ষক"} img={tecacherImg}></MenuCategory>
        </div>
    )
}

export default Menu