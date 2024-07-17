import MenuItem from '../Shared/MenuItem/MenuItem'
import Cover from '../Shared/Cover'
import menuImg from '../../assets/home/motherCon.jpeg'

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-2">
     { title && <Cover img={img} title={title}></Cover>}

      <div className="grid md:grid-cols-2 gap-10">
        {
          items.map(item => <MenuItem
            key={item._id}
            item={item}
          ></MenuItem>)}
        
      </div>
    </div>
  )
}

export default MenuCategory