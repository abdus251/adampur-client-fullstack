import MenuItem from '../Shared/MenuItem/MenuItem'
import Cover from '../Shared/Cover'
import menuImg from '../../assets/home/motherCon.jpeg'
import { Link } from 'react-router-dom'

export const MenuCategory = ({ items, title, img, subTitle }) => {
  return (
    <div className="pt-2">
      {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
          items.map(item => <MenuItem
            key={item._id}
            item={item}
          ></MenuItem>)
        }
      </div>
    </div>
  )
}

export default MenuCategory;