import MenuItem from '../Shared/MenuItem/MenuItem'
import Cover from '../Shared/Cover'
import menuImg from '../../assets/home/motherCon.jpeg'
import { Link } from 'react-router-dom'

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-2">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10">
        {
          items.map(item => <MenuItem
            key={item._id}
            item={item}
          ></MenuItem>)
        }
      </div>
<Link to={`/order/${title}`}>
<button className="btn btn-outline border-0 border-b-4">বিস্তারিত দেখুন</button>
</Link>
    </div>
  )
}

export default MenuCategory