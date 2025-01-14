// import React, { useEffect, useState } from 'react'
// import OneStu from './OneStu'
// import SectionTitle from '../../../components/SectionTitle'
// import useMenu from '../../../hooks/useMenu'

// const One = () => {
//     const [menu] = useMenu();
//     const classOne = menu.filter(item => item.category === "classOne")

//     // const prePrimary = menu.filter(item => item.category === 'prePrimary');

//     // const [ones, setOnes] = useState([])
//     // useEffect(() => {
//     //     fetch('menu.json')
//     //         .then(res => res.json())
//     //         .then(data => setOnes(data))
//     // }, [])

//     // const grade = ones.filter(item => item.grade = "Class 1")

//     return (
//         <>
//         <SectionTitle subHeading={"নতুন  শ্রেণিতে পদার্পন"} heading={"প্রথম শ্রেণি "}></SectionTitle>
              
//         <div className='grid grid-cols-3'>
//             {classOne.map(one => <OneStu
//                 key={one._id}
//                 one={one}
//             ></OneStu>)
//             }
//         </div>
//         </>
//     )
// }

// export default One;