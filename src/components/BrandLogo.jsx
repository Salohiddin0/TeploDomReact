import React from 'react'
import Image1 from '../assets/image 63.png'
import Image2 from '../assets/image 64.png'
import Image3 from '../assets/image 65.png'
import Image4 from '../assets/image 66.png'
import Image5 from '../assets/image 67.png'

const BrandLogo = () => {
  return (
    <div>
      <div className='bg-[#FAFAFA]'>
        <div className='w-full'>
          <header className='max-w-7xl mx-auto px-4 pt-[70px] bg-[#FAFAFA]'>
            <div className='flex justify-between items-center'>
              <b className='text-2xl font-inter'>Бренды</b>
              <div className='flex justify-between gap-5'>
                <div className='bg-[#FFFFFF] w-[50px] h-[50px] rounded-full flex justify-center items-center p-7 cursor-pointer'>
                  <button>
                    <svg
                      width='14'
                      height='20'
                      viewBox='0 0 14 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M5.09025 10L12.617 3.10072C13.3606 2.41911 13.3606 1.24682 12.617 0.565208C11.9594 -0.0374849 10.9503 -0.0374855 10.2928 0.565208L1.6084 8.52567C0.74364 9.31835 0.743641 10.6817 1.6084 11.4743L10.2928 19.4348C10.9503 20.0375 11.9594 20.0375 12.617 19.4348C13.3606 18.7532 13.3606 17.5809 12.617 16.8993L5.09025 10Z'
                        fill='black'
                        fill-opacity='0.4'
                      />
                    </svg>
                  </button>
                </div>
                <div className='bg-[#FFFFFF] w-[50px] h-[50px] rounded-full flex justify-center items-center p-7 cursor-pointer'>
                  <button>
                    <svg
                      width='14'
                      height='20'
                      viewBox='0 0 14 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.90975 10L1.38305 3.10072C0.639449 2.41911 0.639449 1.24682 1.38305 0.565208C2.04055 -0.0374849 3.0497 -0.0374855 3.7072 0.565208L12.3916 8.52567C13.2564 9.31835 13.2564 10.6817 12.3916 11.4743L3.7072 19.4348C3.0497 20.0375 2.04055 20.0375 1.38305 19.4348C0.639449 18.7532 0.639448 17.5809 1.38305 16.8993L8.90975 10Z'
                        fill='black'
                        fill-opacity='0.4'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-5'>
              <div className='bg-[#FFFFFF] mt-[30px] w-[193px] h-[181px] flex justify-center items-center rounded-[12px]'>
                <img src={Image1} alt='' />
              </div>
              <div className='bg-[#FFFFFF] mt-[30px] w-[193px] h-[181px] flex justify-center items-center rounded-[12px]'>
                <img src={Image2} alt='' />
              </div>
              <div className='bg-[#FFFFFF] mt-[30px] w-[193px] h-[181px] flex justify-center items-center rounded-[12px]'>
                <img src={Image3} alt='' />
              </div>
              <div className='bg-[#FFFFFF] mt-[30px] w-[193px] h-[181px] flex justify-center items-center rounded-[12px]'>
                <img src={Image4} alt='' />
              </div>
              <div className='bg-[#FFFFFF] mt-[30px] w-[193px] h-[181px] flex justify-center items-center rounded-[12px]'>
                <img src={Image5} alt='' />
              </div>
            </div>
          </header>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}

export default BrandLogo
