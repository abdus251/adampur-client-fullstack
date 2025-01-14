import React, { useEffect, useState } from 'react'
import FourStu from './FourStu'
import SectionTitle from '../../../../components/SectionTitle'
import useMenu from '../../../../hooks/useMenu'


const Four = () => {
   const [menu] = useMenu();
   const classFour = menu.filter(item => item.grade === 'classFour')
  return (
    <>
    <SectionTitle subHeading={"নতুন  শ্রেণিতে পদার্পন"} heading={"চতুর্থ শ্রেণি "}></SectionTitle>
          
        <div className='grid grid-cols-3'>
  
        {classFour.map(one => <FourStu
            key={one._id}
            one={one}
        ></FourStu>)
        }
    </div>
    </>
  )
}

export default Four