import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category'
import PopularMenu from '../PopularMenu'
import Featured from '../Featured/Featured'
import Testimonials from '../Testimonials'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
        <Helmet>
                <title>আদমপুর | হোম</title>
        </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>

  )
}

export default Home