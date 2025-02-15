import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CategoryCard from './components/CategoryCard'
import ProductCard from './components/ProductCard'
import ProductDetailPage from './components/ProductDetailPage'
import AppRouter from './features/routes/AppRouter'
import Contact from './pages/Contact'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppRouter />}>
            <Route index element={<Home />} />
            <Route path='/categories' element={<CategoryCard />} />
            <Route path='/navinki' element={<ProductCard />} />
            <Route path='/product-detail/:id' element={<ProductDetailPage />} />
            <Route path='/contacts' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
