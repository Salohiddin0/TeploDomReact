import React, { useState } from 'react'
import img1 from '../assets/ымапывррп 1 (1).png'
import img2 from '../assets/мыпапми 2.png'
import img3 from '../assets/image 90.png'
import img4 from '../assets/image 91.png'
import img5 from '../assets/Rectangle 23827.png'
import img6 from '../assets/sfgfggf 1.png'
import img7 from '../assets/Rectangle 23865.png'
import img8 from '../assets/Rectangle 23829.png'
import img9 from '../assets/Rectangle 23835.png'
import img10 from '../assets/Rectangle 23823.png'
import img11 from '../assets/Rectangle 23831.png'
import img12 from '../assets/Rectangle 23843.png'
import img13 from '../assets/Rectangle 23839.png'
import img14 from '../assets/Rectangle 23847.png'
import img15 from '../assets/Rectangle 23851.png'
import img16 from '../assets/Rectangle 23855.png'
import img17 from '../assets/Rectangle 23864.png'
import img18 from '../assets/Rectangle 23875.png'

const categories = [
  { id: 1, title: 'Сухи смеси', image: img1 },
  { id: 2, title: 'Хоз товары', image: img2 },
  { id: 3, title: 'Лакокрасочная материали', image: img3 },
  { id: 4, title: 'Изоляционные материалы', image: img4 },
  { id: 5, title: 'Саморезы', image: img5 },
  { id: 6, title: 'Саморезы', image: img6 },
  { id: 7, title: 'Мебель', image: img7 },
  { id: 8, title: 'Ручные инструменты', image: img8 },
  { id: 9, title: 'Пиломатериалы', image: img9 },
  { id: 10, title: 'Каркас для ГКЛ', image: img10 },
  { id: 11, title: 'Металлопрокат', image: img11 },
  { id: 12, title: 'ЖБИ изделия', image: img12 },
  { id: 13, title: 'Сантехника', image: img13 },
  { id: 14, title: 'Сайдинг', image: img14 },
  { id: 15, title: 'Лепной Декор', image: img15 },
  { id: 16, title: 'Электро техника', image: img16 },
  { id: 17, title: 'Агрохимия', image: img17 },
  { id: 18, title: 'Мастер', image: img18 }
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
            <svg
              width='9'
              height='15'
              viewBox='0 0 9 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.15582 1.15643C1.05593 1.25871 1 1.396 1 1.53896C1 1.68192 1.05593 1.81921 1.15582 1.92149L6.7368 7.64678L1.15582 13.3709C1.05593 13.4732 1 13.6105 1 13.7534C1 13.8964 1.05593 14.0337 1.15582 14.136C1.20438 14.1858 1.26243 14.2255 1.32656 14.2525C1.39068 14.2796 1.45958 14.2936 1.52918 14.2936C1.59879 14.2936 1.66769 14.2796 1.73181 14.2525C1.79594 14.2255 1.85399 14.1858 1.90255 14.136L7.83742 8.04648C7.94166 7.93954 8 7.79611 8 7.64678C8 7.49744 7.94166 7.35401 7.83742 7.24707L1.90255 1.15758C1.85399 1.10771 1.79594 1.06807 1.73181 1.04101C1.66769 1.01394 1.59879 1 1.52918 1C1.45958 1 1.39068 1.01394 1.32656 1.04101C1.26243 1.06807 1.20438 1.10771 1.15582 1.15758V1.15643Z'
                fill='url(#paint0_linear_1_46)'
                stroke='url(#paint1_linear_1_46)'
                stroke-width='0.2'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_1_46'
                  x1='4.5'
                  y1='1'
                  x2='4.5'
                  y2='14.2936'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#0077B6' />
                  <stop offset='1' stop-color='#003661' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_1_46'
                  x1='4.5'
                  y1='1'
                  x2='4.5'
                  y2='14.2936'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#0077B6' />
                  <stop offset='1' stop-color='#003661' />
                </linearGradient>
              </defs>
            </svg>
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
