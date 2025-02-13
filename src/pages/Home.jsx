import React from 'react'
import Header from '../components/Header'
import CategoryCard from '../components/CategoryCard'
import ProductCard from './../components/ProductCard'
import BrandLogo from '../components/BrandLogo'
import Advantages from '../components/Advantages'
import TeamMember from '../components/TeamMember'
import AboutSection from '../components/AboutSection'

const Home = () => {
  return (
    <div className='bg-[#fafafa]'>
      <Header />
      <CategoryCard />
      <ProductCard />
      <BrandLogo />
      <Advantages />
      <TeamMember />
      <AboutSection />
    </div>
  )
}

export default Home
