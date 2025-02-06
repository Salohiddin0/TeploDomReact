import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import CategoryCard from '../components/CategoryCard'

const Home = () => {
  return (
    <div className='bg-[#fafafa]'>
      <Nav />
      <Header />
      <CategoryCard />
    </div>
  )
}

export default Home
