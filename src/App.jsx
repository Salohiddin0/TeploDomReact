import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CategoryCard from './components/CategoryCard'
import Nav from './components/Nav'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<CategoryCard />} />{' '}
      </Routes>
    </BrowserRouter>
  )
}

export default App
