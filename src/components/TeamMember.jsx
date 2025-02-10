import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import '../features/styles/TeamMember.css'

import Ellipse1 from '../assets/Ellipse 1624.png'
import Ellipse2 from '../assets/Ellipse 1625.png'
import Ellipse3 from '../assets/Ellipse 1626.png'
import Ellipse4 from '../assets/Ellipse 1629.png'

const teamMembers = [
  { id: 1, img: Ellipse1, name: 'Ӯткуров Сардор', position: 'Директор фирмы' },
  {
    id: 2,
    img: Ellipse2,
    name: 'Рахматуллаев Хаб',
    position: 'Менеджерпо продажам'
  },
  {
    id: 3,
    img: Ellipse3,
    name: 'Усмонов Нодир',
    position: 'Менеджерпо продажам'
  },
  {
    id: 4,
    img: Ellipse4,
    name: 'Йолдошев Донийор',
    position: 'Менеджерпо продажам'
  }
]

const TeamMember = () => {
  const swiperRef = useRef(null)

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext()
    }
  }

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev()
    }
  }

  return (
    <div className='team-section'>
      <div className='container'>
        <div className='header'>
          <b className='title'>Наши команда</b>
          <div className='navigation-buttons'>
            <button className='prev-button' onClick={handlePrev}>
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.0903 14L19.617 7.10072C20.3606 6.41911 20.3606 5.24682 19.617 4.56521C18.9594 3.96252 17.9503 3.96251 17.2928 4.56521L8.6084 12.5257C7.74364 13.3183 7.74364 14.6817 8.6084 15.4743L17.2928 23.4348C17.9503 24.0375 18.9594 24.0375 19.617 23.4348C20.3606 22.7532 20.3606 21.5809 19.617 20.8993L12.0903 14Z'
                  fill='black'
                  fillOpacity='0.4'
                />
              </svg>
            </button>
            <button className='next-button' onClick={handleNext}>
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15.9097 14L8.38305 7.10072C7.63945 6.41911 7.63945 5.24682 8.38305 4.56521C9.04055 3.96252 10.0497 3.96251 10.7072 4.56521L19.3916 12.5257C20.2564 13.3183 20.2564 14.6817 19.3916 15.4743L10.7072 23.4348C10.0497 24.0375 9.04055 24.0375 8.38305 23.4348C7.63945 22.7532 7.63945 21.5809 8.38305 20.8993L15.9097 14Z'
                  fill='black'
                  fillOpacity='0.4'
                />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.next-button',
            prevEl: '.prev-button'
          }}
          onSwiper={swiper => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          className='mySwiper'
        >
          {teamMembers.map(member => (
            <SwiperSlide key={member.id}>
              <div className='team-card'>
                <img
                  src={member.img}
                  alt={member.name}
                  className='team-image'
                />
                <div className='team-info'>
                  <b className='team-name'>{member.name}</b>
                  <p className='team-position'>{member.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default TeamMember
