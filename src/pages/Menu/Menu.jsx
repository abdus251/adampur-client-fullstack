import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImg from '../../assets/home/motherCon.jpeg'
import PopularMenu from '../Home/PopularMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>আদমপুর | মেনু</title>
            </Helmet>
            <Cover img={menuImg} title="আমাদের কর্মব্যপকতা"></Cover>
        </div>
    )
}

export default Menu