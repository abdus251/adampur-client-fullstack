import React, { useEffect, useState } from 'react'
import TwoStu from './TwoStu'
import SectionTitle from '../../../components/SectionTitle'
import useMenu from '../../../hooks/useMenu'

const Two = () => {
   const [menu] = useMenu();
   const classTwo = menu.filter(item => item.grade === 'classTwo')

    
  return (
    <>
    <SectionTitle subHeading={"নতুন  শ্রেণিতে পদার্পন"} heading={"দ্বিতীয় শ্রেণি "}></SectionTitle>
          
    <div className='grid grid-cols-3'>
        {classTwo.map(one => <TwoStu
            key={one._id}
            one={one}
        ></TwoStu>)
        }
    </div>
    </>
  )
}

export default Two