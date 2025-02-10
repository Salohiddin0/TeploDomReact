import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import '../features/styles/TeamMember.css'

import Image1 from '../assets/image 63.png'
import Image2 from '../assets/image 64.png'
import Image3 from '../assets/image 65.png'
import Image4 from '../assets/image 66.png'
import Image5 from '../assets/image 67.png'

const brandImages = [Image1, Image2, Image3, Image4, Image5]

export default function BrandLogo () {
  const swiperRef = useRef(null)

  return (
    <div className='bg-[#FAFAFA] py-10 relative'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center mb-5'>
          <b className='text-2xl font-inter'>Бренды</b>
          <div className='flex gap-2'>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className='p-3 bg-[#ffff] rounded-full shadow-md  transition'
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className='p-3 bg-[#ffff] rounded-full shadow-md  transition'
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <SwiperBlock images={brandImages} swiperRef={swiperRef} />
      </div>
    </div>
  )
}

function SwiperBlock ({ images, swiperRef }) {
  return (
    <Swiper
      loop={true}
      spaceBetween={20}
      modules={[Navigation]}
      onSwiper={swiper => (swiperRef.current = swiper)}
      breakpoints={{
        0: { slidesPerView: 1.5 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 }
      }}
      className='relative'
    >
      {images.map((img, index) => (
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
  )
}
