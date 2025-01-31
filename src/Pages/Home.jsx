import React from 'react'
import Hero from '../components/HomePage/Hero'
import Categories from '../components/HomePage/Categories'
import SampleItems from '../components/HomePage/SampleItems'
import Reviews from '../components/HomePage/Reviews'
import Features from '../components/HomePage/Features'
import Scroller from '../components/HomePage/Scroller'
import BuyNow from '../components/HomePage/BuyNow'


const Home = () => {
  return (
    <div>
        <Hero />
        <Categories/>
        <SampleItems/>
        <Features />
        <Reviews />
        <Scroller/>
        <BuyNow/>
    </div>
  )
}

export default Home