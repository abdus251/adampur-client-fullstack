import SectionTitle from '../../components/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';
import useMenu from '../../hooks/useMenu';


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <section className='mb-12'>
            <SectionTitle
                heading='দক্ষ ও আন্তরিক শিক্ষকমণ্ডলী'
                subHeading='কার্যকর শিক্ষা পরিচালনা'
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;
