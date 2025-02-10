import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from 'swiper/modules'
import 'swiper/css'

import B1 from '../assets/image 57.png'
import B2 from '../assets/фаввваавав 1.png'
import B3 from '../assets/image 102.png'
import B4 from '../assets/image 105.png'
import B5 from '../assets/wstgsgfgfgf 1.png'
import F1 from '../assets/image 103 (1).png'
import F2 from '../assets/afs 2.png'
import F3 from '../assets/Без имени-1 3.png'
import F4 from '../assets/image 105.png'
import F5 from '../assets/image 95.png'

const HomeCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState(null)
  const dotsContainerRef = useRef(null)
  const dotsSmallContainerRef = useRef(null)

  const slides = [
    {
      id: '1',
      title: 'Пеноплекс Основа',
      desc: 'Пеноплэкс» — российская компания, производитель тепло- и гидроизоляционных, а также декоративно-отделочных материалов на основе полимеров, основной вид продукции — теплоизоляционные плиты из экструзионного пенополистирола',
      bg: B1,
      fg: F1
    },
    {
      id: '2',
      title: 'Гипсакартон',
      desc: 'Cтроительный материал, представляющий собой лист, состоящий из двух слоёв строительной бумаги (картона) и сердечника из слоя затвердевшего гипсового теста с наполнителями.',
      bg: B2,
      fg: F2
    },
    {
      id: '3',
      title: 'Basalt wool тепло и тихо',
      desc: 'Базальтовое волокно представляет собой материал, изготовленный из чрезвычайно тонких волокон базальта, который состоит из минералов плагиоклаза, пироксена и оливина. Он похож на стекловолокно.',
      bg: B3,
      fg: F3
    },
    {
      id: '4',
      title: 'Финская Фанера',
      desc: 'многослойный строительный материал, изготавливаемый путём склеивания специально подготовленного шпона. Для повышения прочности фанеры слои шпона накладываются так.',
      bg: B4,
      fg: F4
    }
  ]

  // const mobileSlides = [
  //   { id: '5', title: 'Штукатурка гипсовая', desc: '...', bg: B5, fg: F5 },
  //   ...slides
  // ]

  const updateDots = activeIndex => {
    if (dotsContainerRef.current) {
      const dots = dotsContainerRef.current.children
      for (let i = 0; i < dots.length; i++) {
        if (i === activeIndex) {
          dots[i].classList.add('bg-white')
          dots[i].classList.remove('bg-[#FFFCF480]')
        } else {
          dots[i].classList.add('bg-[#FFFCF480]')
          dots[i].classList.remove('bg-white')
        }
      }
    }
  }

  const smallUpdateDots = activeIndex => {
    if (dotsSmallContainerRef.current) {
      const dots = dotsSmallContainerRef.current.children
      for (let i = 0; i < dots.length; i++) {
        if (i === activeIndex) {
          dots[i].classList.add('bg-[#A1A1A1]', 'w-[24px]')
          dots[i].classList.remove('w-[8px]', 'bg-[#DEDEDE]')
        } else {
          dots[i].classList.add('bg-[#DEDEDE]', 'w-[8px]')
          dots[i].classList.remove('w-[24px]', 'bg-[#A1A1A1]')
        }
      }
    }
  }

  return (
    <section className='home-carousel-section p-4'>
      <div className='container mx-auto px-[10px] lg:px-[150px] bg-slate-500 rounded-[20px]'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          onSlideChange={swiper => updateDots(swiper.realIndex)}
          onSwiper={swiper => {
            setSwiperInstance(swiper)
            updateDots(swiper.realIndex)
          }}
          className='h-[307px] md:h-[450px] hidden md:block relative rounded-[20px]'
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.id}>
              <div
                className='h-[307px] md:h-[450px] rounded-[20px] p-[50px]'
                style={{
                  backgroundImage: `url(${slide.bg.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <h1 className='text-[20px] md:text-[48px] text-[#fff] font-bold mb-[30px]'>
                  {slide.title}
                </h1>
                <p className='text-[#fff] font-medium text-[14px] md:text-[24px]'>
                  {slide.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default HomeCarousel
