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
        <div className=''>
            <Helmet>
                <title>আদমপুর | মেনু</title>
            </Helmet>
            
            <div className="mb-20"> <Cover img={motherImg} title="আমাদের কর্মব্যপকতা"></Cover></div>
            
            <SectionTitle subHeading="শিক্ষার্থীদের উচ্চাকাঙ্খা" heading="আগামীর পেশাজীবীগণ"></SectionTitle>
            
            <div className="mb-20">
                <MenuCategory items={prePrimary} title={"prePrimary"}
                    img={menuImg}
                ></MenuCategory>
            </div>

            <div className="mb-20">
                <MenuCategory items={classOne} title={"classOne"} img={doc1}></MenuCategory>
            </div>

            <div className="mb-20">
            <MenuCategory items={classTwo} title={"classTwo"} img={tecacherImg}></MenuCategory>
            </div>

            <div className="mb-20">
            <MenuCategory items={classTwo} title={"classTwo"} img={businessImg}></MenuCategory>
            </div>
            <div className="mb-20">
            <MenuCategory items={classThree} title={"classThree"} img={artImg}></MenuCategory>
            </div>

            <div className="mb-20">
            <MenuCategory items={donate} title={"classThree"} img={arImg}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;