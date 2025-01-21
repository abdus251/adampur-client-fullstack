import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category'
import Featured from '../Featured/Featured'
import Testimonials from '../Testimonials'
import { Helmet } from 'react-helmet-async'
import AdmissionAndFees from '../AdmissionAndFees'

const Home = () => {
  return (
    <div>
        <Helmet>
                <title>আদমপুর | হোম</title>
        </Helmet>
      <Banner></Banner>
      <Category></Category>
      <AdmissionAndFees></AdmissionAndFees>
      <Testimonials></Testimonials>
    </div>

  )
}

export default Home;