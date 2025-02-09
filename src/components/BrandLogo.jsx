'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'

const BrandLogo = () => {
  const brandImages = [
    '/public/images/image 63.png',
    '/public/images/image 64.png',
    '/public/images/image 65.png',
    '/public/images/image 66.png',
    '/public/images/image 67.png'
  ]

  return (
    <div className='bg-[#FAFAFA] py-10 relative'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <b className='text-2xl font-inter'>Бренды</b>
        </div>

        <Swiper
          modules={[Scrollbar]}
          scrollbar={{ draggable: true }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 }
          }}
          className='mt-5 relative'
        >
          {brandImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className='bg-white w-[193px] h-[181px] flex justify-center items-center shadow-md'>
                <img
                  src={img}
                  alt={`Brand ${index + 1}`}
                  width={193}
                  height={181}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default BrandLogo
