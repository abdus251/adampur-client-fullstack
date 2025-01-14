import ThreeStu from './ThreeStu'
import SectionTitle from '../../../components/SectionTitle'
import useMenu from '../../../hooks/useMenu'
const Three = () => {
    const [menu] = useMenu();
    const classThree = menu.filter(item => item.grade === 'classThree')
  return (
    <>
    <SectionTitle subHeading={"নতুন  শ্রেণিতে পদার্পন"} heading={"তৃতীয় শ্রেণি "}></SectionTitle>
          
    <div className='grid grid-cols-3'>
        {classThree.map(one => <ThreeStu
            key={one._id}
            one={one}
        ></ThreeStu>)
        }
    </div>
    </>
  )
}

export default Three