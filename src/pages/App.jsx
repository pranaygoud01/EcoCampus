import React from 'react'
import SEOHead from '../components/SEOHead'
import { seoData } from '../utils/seoData'
import Hero from '../components/Hero'
import Process from '../components/Process'
import Colleges from '../components/Colleges'
import PopularProducts from '../components/PopularProducts'
import Categories from '../components/Categories'

const App = () => {
  return (
    <div>
      <SEOHead {...seoData.home} />
      <Hero/>
      <Categories/>
      <PopularProducts/>
      <Colleges/>
      <Process/>
    </div>
  )
}

export default App