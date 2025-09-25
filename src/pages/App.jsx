import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Process from '../components/Process'
import Colleges from '../components/Colleges'
import PopularProducts from '../components/PopularProducts'
import Categories from '../components/Categories'

const App = () => {
  return (
    <div>
      <Hero/>
      <Categories/>
      <PopularProducts/>
      <Colleges/>
      <Process/>
    </div>
  )
}

export default App