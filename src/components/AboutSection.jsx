import React from 'react'
import Rectangle1 from '../assets/Rectangle 23785.png'

export default function AboutSection () {
  return (
    <section className='pb-[120px] max-sm:pb-[60px]'>
      <div className='info-section py-0 sm:py-10 px-[20px] sm:px-[50px]'>
        <div className='container mx-auto lg:px-[150px] mb-[60px]'>
          <h1 className='font-semibold text-[20px] sm:text-[30px] my-5'>
            Интернет магазин Теплодом
          </h1>
          <div className='grid grid-rows-1 2xl:grid-cols-2 items-center gap-[30px] sm:gap-[57px]'>
            <div>
              <p className='text-[16px] sm:text-[18px] text-center md:text-start'>
                Компания <b className='font-bold'>Teplodom</b> является лидером
                строительных материалов на локальном рынке и предлагает широкий
                ассортимент строительных, отделочных материалов и товаров для
                дома всем клиентам Узбекистана.
              </p>
              <p className='hidden md:block text-[16px] sm:text-[18px] text-center md:text-start mt-3'>
                В каталоге на сайте Teplodom представлена продукция самых
                известных брендов от крупнейших мировых производителей, а также
                популярные отечественные торговые марки. Благодаря удобной
                навигации, легко найти необходимый товар и отложить его в
                корзину для оформления онлайн заказа.
                <br />
                <br />
                Высокое качество, экспертные знания, качественные ресурсы и
                улучшение производства с каждым днем является обязательным
                требованием для нашего бренда!
              </p>
            </div>
            <div className='w-full flex justify-center'>
              <img
                src={Rectangle1}
                alt='Клиенты выбирают плитку в магазине Teplodom'
                className='rounded-lg w-full max-w-[539px] h-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
