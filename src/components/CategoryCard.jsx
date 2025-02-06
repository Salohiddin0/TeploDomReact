import React, { useState } from 'react'
import img1 from '../assets/Rectangle 23820.png'
import img2 from '../assets/Rectangle 23828.png'
import img3 from '../assets/Rectangle 23829.png'
import img4 from '../assets/Rectangle 23852.png'
import img5 from '../assets/Rectangle 23839.png'
import img6 from '../assets/Rectangle 23847.png'
import img7 from '../assets/Rectangle 23865.png'
import img8 from '../assets/image 90.png'
import img9 from '../assets/Rectangle 23835.png'
import img10 from '../assets/Rectangle 23823.png'

const categories = [
  { id: 1, title: 'Сухи смеси', image: img1 },
  { id: 2, title: 'Хоз товары', image: img2 },
  { id: 3, title: 'Лакокрасочная материали', image: img3 },
  { id: 4, title: 'Изоляционные материалы', image: img4 },
  { id: 5, title: 'Саморезы', image: img5 },
  { id: 6, title: 'Саморезы', image: img6 },
  { id: 7, title: 'Каркас для ГКЛ', image: img7 },
  { id: 8, title: 'Товары для сада', image: img8 },
  { id: 9, title: 'Листовые материалы', image: img9 },
  { id: 10, title: 'Металлопрокат', image: img10 }
]

const CategoryCard = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleCategories = showAll ? categories : categories.slice(0, 6)

  return (
    <div className='w-full'>
      <header className='max-w-7xl mx-auto px-4 mt-16'>
        <div className='flex justify-between items-center'>
          <b className='text-2xl font-inter'>Категории</b>
          <span
            className='cursor-pointer flex items-center gap-2 font-inter text-[#0077B6]'
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Скрыть категории' : 'Все категории'}
          </span>
        </div>

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
      </header>
    </div>
  )
}

export default CategoryCard
