import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import Image1 from '../assets/image 63.png'
import Image2 from '../assets/image 64.png'
import Image3 from '../assets/image 65.png'
import Image4 from '../assets/image 66.png'
import Image5 from '../assets/image 67.png'

const BrandLogo = () => {
  const brandImages = [Image1, Image2, Image3, Image4, Image5]

  return (
    <div className='bg-[#FAFAFA] py-10 relative'>
      <div className='max-w-7xl mx-auto px-4 overflow-hiddn'>
        <div className='flex justify-between items-center'>
          <b className='text-2xl font-inter'>Бренды</b>
        </div>
        <Swiper
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
              <div className='bg-white w-[193px] h-[181px] flex justify-center items-center shadow-md mt-[30px] rounded-[12px] p-[15px]'>
                <img
                  className='rounded-[12px]'
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
