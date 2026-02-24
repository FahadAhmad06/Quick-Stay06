import React, { useState } from 'react'
import Hero from '../Components/Hero'
import FeaturedDestination from '../Components/FeaturedDestination'
import Exclusiveoffer from '../Components/Exclusiveoffer'
import Testimonial from '../Components/Testimonial'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import HotelReg from '../Components/HotelReg'


const Home = () => {

  const [showForm,setShowForm] = useState(true)

  return (
    <>
        {showForm && (<HotelReg onClick= {() => setShowForm(false)}/>)}
        <Hero />
        <FeaturedDestination />
        <Exclusiveoffer />
        <Testimonial/>
        <Newsletter />
    </>
  )
}

export default Home