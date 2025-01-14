import SectionTitle from '../../../components/SectionTitle'
import useMenu from '../../../hooks/useMenu'
import FiveStu from './FiveStu'

const Five = () => {
   const [menu] = useMenu();
   const classFive = menu.filter(item => item.grade === 'classFive')
  return (
    <>
    <SectionTitle subHeading={"নতুন  শ্রেণিতে পদার্পন"} heading={"পঞ্চম শ্রেণি "}></SectionTitle>
          
    <div className='grid grid-cols-3'>
        {classFive.map(one => <FiveStu
            key={one._id}
            one={one}
        ></FiveStu>)
        }
    </div>
    </>
  )
}

export default Five