import React from 'react'
import Header from '../components/Header'
import CategoryCard from '../components/CategoryCard'
import ProductCard from './../components/ProductCard'
import BrandLogo from '../components/BrandLogo'

const Home = () => {
  return (
    <div className='bg-[#fafafa]'>
      <Header />
      <CategoryCard />
      <ProductCard />
      <BrandLogo />
    </div>
  )
}

export default Home
