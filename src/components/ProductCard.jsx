import { useEffect, useState, useRef } from 'react'
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import '../features/styles/TeamMember.css'

export default function ProductCard () {
  const [products, setProducts] = useState([])
  const location = useLocation()

  useEffect(() => {
    fetch('http://localhost:8080/ProductCard')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error))
  }, [location.pathname])

  const isHomePage = location.pathname === '/'
  const displayedProducts = isHomePage ? products.slice(0, 8) : products

  const firstRow = displayedProducts.filter((_, index) => index % 2 === 0)
  const secondRow = displayedProducts.filter((_, index) => index % 2 !== 0)

  const firstSwiperRef = useRef(null)
  const secondSwiperRef = useRef(null)

  return (
    <div className='bg-[#FAFAFA]'>
      <div className='w-full max-w-7xl mx-auto px-4 bg-[#FAFAFA]'>
        {isHomePage && (
          <div className='flex flex-row justify-between items-center mb-[30px] w-full'>
            <b className='text-xl sm:text-3xl font-inter'>Новинки на сайте</b>
            <Link
              to='/navinki'
              className='text-base sm:text-lg cursor-pointer text-[#0077B6] font-inter flex items-center gap-2'
            >
              Смотреть все
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
                  strokeWidth='0.2'
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
                    <stop stopColor='#0077B6' />
                    <stop offset='1' stopColor='#003661' />
                  </linearGradient>
                  <linearGradient
                    id='paint1_linear_1_46'
                    x1='4.5'
                    y1='1'
                    x2='4.5'
                    y2='14.2936'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#0077B6' />
                    <stop offset='1' stopColor='#003661' />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
        )}
        <div className='mb-[30px]'>
          {location.pathname === '/navinki' && (
            <b className='font-inter text-2xl sm:text-3xl'>
              Сухие строительные смеси
            </b>
          )}
        </div>

        {isHomePage ? (
          <div className='flex flex-col gap-10'>
            <SwiperBlock products={firstRow} swiperRef={firstSwiperRef} />
            <SwiperBlock products={secondRow} swiperRef={secondSwiperRef} />
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 w-full bg-[#FAFAFA]'>
            {displayedProducts.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function SwiperBlock ({ products, swiperRef }) {
  return (
    <div>
      <div className='flex justify-end items-center mb-3'>
        <div className='flex gap-2'>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className='p-3 bg-[#ffff] rounded-full shadow-md transition'
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className='p-3 bg-[#ffff] rounded-full shadow-md transition'
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={5}
        speed={500}
        loop={true}
        modules={[Navigation]}
        onSwiper={swiper => (swiperRef.current = swiper)}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
        className='mt-2'
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const handleButtonLike = event => {
  event.preventDefault()
}

function ProductItem ({ product }) {
  return (
    <Link to={'/product-detail/' + product.id}>
      <div className='w-full sm:w-[255px] h-auto sm:h-[401px] rounded-lg border bg-white shadow-sm'>
        <div className='flex items-center justify-center p-6 sm:p-10'>
          <img
            src={product.img}
            alt={product.title}
            className='max-h-36 object-contain'
          />
        </div>
        <p className='w-[212px] h-[38px] mx-4 text-md font-inter mb-[22px] sm:mb-[32px]'>
          {product.title}
        </p>
        <b className='mx-4 text-sm sm:text-base'>{product.price}</b>
        <div className='m-4 mt-4'>
          <div className='flex gap-2'>
            <Link
              // to={`/product/${product.id}`}
              className='flex items-center justify-center w-[171px] h-[42px] px-[12px] py-[8px] bg-[#FFB12A] text-white gap-2 border border-[#FFB12A] rounded-lg p-2 w-full sm:w-auto'
            >
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.16699 25.6668C7.52533 25.6668 6.97621 25.4386 6.51966 24.982C6.06233 24.5247 5.83366 23.9752 5.83366 23.3335C5.83366 22.6918 6.06233 22.1423 6.51966 21.685C6.97621 21.2284 7.52533 21.0002 8.16699 21.0002C8.80866 21.0002 9.35777 21.2284 9.81433 21.685C10.2717 22.1423 10.5003 22.6918 10.5003 23.3335C10.5003 23.9752 10.2717 24.5247 9.81433 24.982C9.35777 25.4386 8.80866 25.6668 8.16699 25.6668ZM19.8337 25.6668C19.192 25.6668 18.6429 25.4386 18.1863 24.982C17.729 24.5247 17.5003 23.9752 17.5003 23.3335C17.5003 22.6918 17.729 22.1423 18.1863 21.685C18.6429 21.2284 19.192 21.0002 19.8337 21.0002C20.4753 21.0002 21.0248 21.2284 21.4822 21.685C21.9387 22.1423 22.167 22.6918 22.167 23.3335C22.167 23.9752 21.9387 24.5247 21.4822 24.982C21.0248 25.4386 20.4753 25.6668 19.8337 25.6668ZM7.17533 7.00016L9.97533 12.8335H18.142L21.3503 7.00016H7.17533ZM8.16699 19.8335C7.29199 19.8335 6.63088 19.4493 6.18366 18.6808C5.73644 17.9132 5.71699 17.1502 6.12533 16.3918L7.70033 13.5335L3.50033 4.66683H2.30449C1.97394 4.66683 1.70171 4.55483 1.48783 4.33083C1.27394 4.10761 1.16699 3.83072 1.16699 3.50016C1.16699 3.16961 1.27899 2.89233 1.50299 2.66833C1.72621 2.44511 2.0031 2.3335 2.33366 2.3335H4.22949C4.44338 2.3335 4.64755 2.39183 4.84199 2.5085C5.03644 2.62516 5.18227 2.79044 5.27949 3.00433L6.06699 4.66683H23.2753C23.8003 4.66683 24.16 4.86127 24.3545 5.25016C24.5489 5.63905 24.5392 6.04739 24.3253 6.47516L20.1837 13.9418C19.9698 14.3307 19.6878 14.6321 19.3378 14.846C18.9878 15.0599 18.5892 15.1668 18.142 15.1668H9.45033L8.16699 17.5002H21.0295C21.36 17.5002 21.6323 17.6118 21.8462 17.835C22.06 18.059 22.167 18.3363 22.167 18.6668C22.167 18.9974 22.055 19.2743 21.831 19.4975C21.6078 19.7215 21.3309 19.8335 21.0003 19.8335H8.16699ZM9.97533 12.8335H18.142H9.97533Z'
                  fill='white'
                />
              </svg>
              В корзину
            </Link>
            <button
              onClick={handleButtonLike}
              className='flex items-center justify-center bg-[#FFB12A] text-white gap-[10px] border border-[#FFB12A] rounded-lg p-2 w-[44px] h-[42px] sm:w-auto'
            >
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_1_2127)'>
                  <path
                    d='M14.0008 5.28381C16.7413 2.82331 20.9763 2.90498 23.6165 5.54981C26.2555 8.19581 26.3465 12.4098 23.8918 15.1585L13.9985 25.0658L4.10751 15.1585C1.65285 12.4098 1.74502 8.18881 4.38285 5.54981C7.02535 2.90848 11.2522 2.81981 14.0008 5.28381ZM21.9645 7.19831C20.2145 5.44598 17.3912 5.37481 15.5595 7.01981L14.002 8.41748L12.4433 7.02098C10.6058 5.37364 7.78835 5.44598 6.03368 7.20064C4.29535 8.93898 4.20785 11.7215 5.80968 13.5601L13.9997 21.763L22.1897 13.5613C23.7927 11.7215 23.7052 8.94248 21.9645 7.19831Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1_2127'>
                    <rect width='28' height='28' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
