import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../components/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';


const PopularMenu = () => {
    const getServices = async () => {
        return await fetch('http://localhost:5000/menu').then((res) => res.json());
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: ['services'],
        queryFn: getServices,
    });

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    if (isError) {
        return <p>Error loading data...</p>;
    }

    const popularTeachers = data[0]?.teachers?.filter(teacher => teacher.category === 'popular') || [];

    return (
        <section className='mb-12'>
            <SectionTitle
                heading='দক্ষ ও আন্তরিক শিক্ষকমণ্ডলী'
                subHeading='কার্যকর শিক্ষা পরিচালনা'
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularTeachers.map(teacher => <MenuItem key={teacher._id}
                        teacher={teacher}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;
