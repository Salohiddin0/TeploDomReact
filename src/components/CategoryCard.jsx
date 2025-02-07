import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const CategoryCard = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const location = useLocation()
  const isCategoryPage = location.pathname === '/categories'

  useEffect(() => {
    fetch('http://localhost:8080/CategoryCard')
      .then(response => {
        if (!response.ok) {
          throw new Error('Server xatosi!')
        }
        return response.json()
      })
      .then(data => {
        setCategories(data)
        setLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  const visibleCategories = isCategoryPage ? categories : categories.slice(0, 6)

  return (
    <div className='bg-[#FAFAFA]'>
      <div className='w-full'>
        <header className='max-w-7xl mx-auto px-4 mt-16 bg-[#FAFAFA]'>
          <div className='flex justify-between items-center'>
            <b className='text-2xl font-inter'>Категории</b>
            {!isCategoryPage && (
              <Link
                to='/categories'
                className='cursor-pointer flex items-center gap-2 font-inter text-[#0077B6]'
              >
                Все категории
              </Link>
            )}
          </div>

          {loading && <p className='text-center mt-4'>Загрузка...</p>}
          {error && <p className='text-center mt-4 text-red-500'>{error}</p>}

          {!loading && !error && (
            <div className='grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 mt-8'>
              {visibleCategories.map(category => (
                <div
                  key={category.id}
                  className='bg-white w-full max-w-[160px] mx-auto text-center rounded-lg p-5 shadow-md'
                >
                  <img
                    className='mb-6 mx-auto'
                    src={category.image}
                    alt={category.title}
                  />
                  <b className='font-inter'>{category.title}</b>
                </div>
              ))}
            </div>
          )}
        </header>
      </div>
    </div>
  )
}

export default CategoryCard
