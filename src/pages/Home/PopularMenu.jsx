import SectionTitle from '../../components/SectionTitle';
import { useEffect, useState } from 'react';
import MenuItem from '../Shared/MenuItem/MenuItem';


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className='mb-12'>
            <SectionTitle
                heading='দক্ষ ও আন্তরিক শিক্ষকমণ্ডলী'
                subHeading='কার্যকর শিক্ষা পরিচালনা'
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;
