import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

export default function Contact () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const forbiddenEmails = ['sulaymonovsaloxiddin092@gmail.com']

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const notify = message =>
    toast(message, {
      autoClose: 2000
    })

  const handleSubmit = async e => {
    e.preventDefault()

    if (forbiddenEmails.includes(formData.email.toLowerCase())) {
      notify('❌ Вы не можете использовать этот email!')
      return
    }

    try {
      const result = await emailjs.send(
        'service_96xj6nl',
        'template_2oihlea',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_name: 'Salohiddin',
          to_email: 'sulaymonovsaloxiddin092@gmail.com'
        },
        '86pGSzPu0D9_GNil_'
      )

      if (result.text === 'OK') {
        notify('✅ Сообщение успешно отправлено!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('❌ Произошла ошибка:', error)
      notify(`❌ Ошибка при отправке сообщения. Пожалуйста, попробуйте снова!`)
    }
  }

  return (
    <section className='bg-[#FAFAFA]'>
      <div className='max-w-7xl mx-auto px-4 py-8 bg-[#FAFAFA]'>
        <h1 className='text-2xl font-bold mb-[40px] mt-8 md:mt-[60px]'>
          Контакты
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-12'>
          <div className='flex flex-col items-center text-center'>
            <div className=' p-[10px] rounded-full border border-[5px]  border-orange-400 flex items-center justify-center mb-[20px]'>
              <svg
                width='68'
                height='68'
                viewBox='0 0 68 68'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_1_5617)'>
                  <path
                    d='M46.9629 8.07422H21.037C20.0547 8.07422 19.1126 8.46443 18.418 9.15901C17.7235 9.85359 17.3333 10.7956 17.3333 11.7779V56.2224C17.3333 57.2046 17.7235 58.1467 18.418 58.8413C19.1126 59.5359 20.0547 59.9261 21.037 59.9261H46.9629C47.9452 59.9261 48.8872 59.5359 49.5818 58.8413C50.2764 58.1467 50.6666 57.2046 50.6666 56.2224V11.7779C50.6666 10.7956 50.2764 9.85359 49.5818 9.15901C48.8872 8.46443 47.9452 8.07422 46.9629 8.07422ZM21.037 11.7779H46.9629V45.1113H21.037V11.7779ZM21.037 56.2224V48.815H46.9629V56.2224H21.037Z'
                    fill='black'
                  />
                  <path
                    d='M32.1481 50.667H35.8518V54.3707H32.1481V50.667Z'
                    fill='black'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1_5617'>
                    <rect
                      width='66.6667'
                      height='66.6667'
                      fill='white'
                      transform='translate(0.666626 0.666992)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className='font-bold text-lg mb-[20px]'>Телефон</h3>
            <p className='text-lg'>+998 (97) 761 62 51</p>
          </div>

          <div className='flex flex-col items-center text-center'>
            <div className='p-[10px] rounded-full border border-[5px]  border-orange-400 flex items-center justify-center mb-[20px]'>
              <svg
                width='68'
                height='68'
                viewBox='0 0 68 68'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M33.7296 17.2803C32.0815 17.2803 30.4703 17.769 29.0999 18.6847C27.7295 19.6004 26.6614 20.9019 26.0306 22.4246C25.3999 23.9473 25.2349 25.6229 25.5564 27.2394C25.878 28.8559 26.6716 30.3407 27.8371 31.5062C29.0025 32.6716 30.4874 33.4653 32.1039 33.7868C33.7204 34.1084 35.396 33.9433 36.9187 33.3126C38.4414 32.6819 39.7429 31.6138 40.6586 30.2434C41.5742 28.8729 42.063 27.2618 42.063 25.6136C42.0605 23.4042 41.1817 21.2861 39.6194 19.7238C38.0572 18.1616 35.939 17.2828 33.7296 17.2803ZM33.7296 29.7803C32.9055 29.7803 32.1 29.5359 31.4148 29.0781C30.7296 28.6202 30.1955 27.9695 29.8801 27.2081C29.5648 26.4468 29.4823 25.609 29.643 24.8007C29.8038 23.9925 30.2006 23.25 30.7834 22.6673C31.3661 22.0846 32.1085 21.6878 32.9168 21.527C33.725 21.3662 34.5628 21.4487 35.3242 21.7641C36.0855 22.0795 36.7363 22.6135 37.1941 23.2987C37.6519 23.9839 37.8963 24.7895 37.8963 25.6136C37.895 26.7183 37.4556 27.7774 36.6745 28.5585C35.8934 29.3396 34.8343 29.779 33.7296 29.7803Z'
                  fill='black'
                />
                <path
                  d='M49.7429 9.58791C45.7836 5.62963 40.4985 3.27825 34.9074 2.98759C29.3164 2.69693 23.8159 4.4876 19.4675 8.01399C15.1192 11.5404 12.2311 16.5525 11.3609 22.083C10.4906 27.6135 11.6999 33.2704 14.7551 37.9617L30.4982 62.1301C30.8486 62.6679 31.3276 63.1097 31.8919 63.4156C32.4562 63.7215 33.0879 63.8816 33.7297 63.8816C34.3715 63.8816 35.0032 63.7215 35.5675 63.4156C36.1318 63.1097 36.6108 62.6679 36.9611 62.1301L52.7048 37.9617C55.5397 33.6098 56.7926 28.4156 56.2533 23.2498C55.7141 18.084 53.4155 13.2605 49.7429 9.58791ZM49.2136 35.6874L33.7298 59.4569L18.2458 35.6874C13.5062 28.4115 14.5227 18.6745 20.6628 12.5341C22.3788 10.8181 24.4159 9.45692 26.658 8.52822C28.9 7.59952 31.303 7.12153 33.7298 7.12153C36.1565 7.12153 38.5595 7.59952 40.8015 8.52822C43.0436 9.45692 45.0807 10.8181 46.7967 12.5341C52.9368 18.6745 53.9532 28.4115 49.2136 35.6874Z'
                  fill='black'
                />
              </svg>
            </div>
            <h3 className='font-bold text-lg mb-[20px]'>Локация</h3>
            <p className='text-lg'>Ташкент, ул. Беруни, 3А</p>
          </div>

          <div className='flex flex-col items-center text-center'>
            <div className='p-[10px] rounded-full border border-[5px]  border-orange-400 flex items-center justify-center mb-[20px]'>
              <svg
                width='68'
                height='68'
                viewBox='0 0 68 68'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.95837 16.2915H60.0417V55.8748H7.95837V16.2915Z'
                  stroke='black'
                  stroke-width='4'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M10.0417 18.375L34 39.2083L57.9584 18.375'
                  stroke='black'
                  stroke-width='4'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
            <h3 className='font-bold text-lg mb-[20px]'>Е-майл</h3>
            <p className='text-lg'>Sardorraimov@gmail.com</p>
          </div>

          <div className='flex flex-col items-center text-center'>
            <div className='p-[10px] rounded-full border border-[5px]  border-orange-400 flex items-center justify-center mb-[20px]'>
              <svg
                width='68'
                height='68'
                viewBox='0 0 68 68'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_1_5625)'>
                  <path
                    d='M46.9625 8.07422H21.0366C20.0543 8.07422 19.1123 8.46443 18.4177 9.15901C17.7231 9.85359 17.3329 10.7956 17.3329 11.7779V56.2224C17.3329 57.2046 17.7231 58.1467 18.4177 58.8413C19.1123 59.5359 20.0543 59.9261 21.0366 59.9261H46.9625C47.9448 59.9261 48.8868 59.5359 49.5814 58.8413C50.276 58.1467 50.6662 57.2046 50.6662 56.2224V11.7779C50.6662 10.7956 50.276 9.85359 49.5814 9.15901C48.8868 8.46443 47.9448 8.07422 46.9625 8.07422ZM21.0366 11.7779H46.9625V45.1113H21.0366V11.7779ZM21.0366 56.2224V48.815H46.9625V56.2224H21.0366Z'
                    fill='black'
                  />
                  <path
                    d='M32.1477 50.667H35.8514V54.3707H32.1477V50.667Z'
                    fill='black'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1_5625'>
                    <rect
                      width='66.6667'
                      height='66.6667'
                      fill='white'
                      transform='translate(0.66626 0.666992)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className='font-bold text-lg mb-[20px]'>Телефон</h3>
            <p className='text-lg'>+998 (93) 556 91 31</p>
          </div>

          <div className='flex flex-col items-center text-center'>
            <div className='p-[10px] rounded-full border border-[5px]  border-orange-400 flex items-center justify-center mb-[20px]'>
              <svg
                width='66'
                height='66'
                viewBox='0 0 66 66'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M24.75 55H16.5C13.5826 55 10.7847 53.8411 8.72183 51.7782C6.65893 49.7153 5.5 46.9174 5.5 44V19.25C5.5 16.3326 6.65893 13.5347 8.72183 11.4718C10.7847 9.40892 13.5826 8.25 16.5 8.25H46.75C49.6674 8.25 52.4653 9.40892 54.5282 11.4718C56.5911 13.5347 57.75 16.3326 57.75 19.25V27.5M22 5.5V11M41.25 5.5V11M5.5 22H57.75M50.875 43.0182L46.75 47.1432'
                  stroke='black'
                  stroke-width='4'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M46.75 60.5C54.3439 60.5 60.5 54.3439 60.5 46.75C60.5 39.1561 54.3439 33 46.75 33C39.1561 33 33 39.1561 33 46.75C33 54.3439 39.1561 60.5 46.75 60.5Z'
                  stroke='black'
                  stroke-width='4'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
            <h3 className='font-bold text-lg mb-[20px]'>Расписание</h3>
            <p className='text-lg'>
              Мы в вашем распоряжении <br /> 7 дней в неделю!!
            </p>
          </div>

          <div className='flex flex-col items-center text-center'>
            <div className='p-[10px] rounded-full border border-[5px]  border-orange-400 flex items-center justify-center mb-[20px]'>
              <svg
                width='66'
                height='66'
                viewBox='0 0 66 66'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M33 61.875C27.2891 61.875 21.7064 60.1815 16.9579 57.0087C12.2095 53.8359 8.50847 49.3262 6.32299 44.05C4.13751 38.7738 3.56569 32.968 4.67984 27.3668C5.79399 21.7656 8.54406 16.6205 12.5823 12.5823C16.6205 8.54406 21.7656 5.79399 27.3668 4.67984C32.968 3.56569 38.7738 4.13751 44.05 6.32299C49.3262 8.50847 53.8359 12.2095 57.0087 16.9579C60.1815 21.7064 61.875 27.2891 61.875 33C61.875 40.6581 58.8328 48.0026 53.4177 53.4177C48.0026 58.8328 40.6581 61.875 33 61.875ZM33 8.25001C28.1049 8.25001 23.3198 9.70157 19.2497 12.4211C15.1795 15.1407 12.0073 19.0061 10.134 23.5286C8.26073 28.0511 7.77059 33.0275 8.72558 37.8285C9.68056 42.6295 12.0378 47.0396 15.4991 50.5009C18.9605 53.9623 23.3705 56.3195 28.1715 57.2744C32.9726 58.2294 37.949 57.7393 42.4714 55.866C46.9939 53.9928 50.8593 50.8205 53.5789 46.7504C56.2984 42.6803 57.75 37.8951 57.75 33C57.75 26.4359 55.1424 20.1406 50.5009 15.4991C45.8594 10.8576 39.5641 8.25001 33 8.25001Z'
                  fill='black'
                />
                <path
                  d='M43.9217 43.9202C43.1182 44.7237 41.8155 44.7237 41.0121 43.9202L31.8162 34.7243C31.2536 34.1617 30.9375 33.3986 30.9375 32.603V16.5C30.9375 15.3609 31.8609 14.4375 33 14.4375C34.1391 14.4375 35.0625 15.3609 35.0625 16.5V31.3065C35.0625 31.8362 35.2727 32.3443 35.6469 32.7193L43.9231 41.0121C44.7252 41.8158 44.7246 43.1173 43.9217 43.9202Z'
                  fill='black'
                />
              </svg>
            </div>
            <h3 className='font-bold text-lg mb-[20px]'>Время</h3>
            <p className='text-lg'>Каждый день с 8:00 – 18:00</p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 md:mt-[120px] mb-16 md:mb-[120px]'>
          <div className='p-6 rounded-lg self-center'>
            <h2 className='text-xl sm:text-2xl font-semibold mb-4'>
              Заказать обратный звонок
            </h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <span className='text-sm text-Inter'>Введите имя</span>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Введите ваше имя'
                  className='w-full px-4 py-2 mt-[10px] border bg-[#FAFAFA] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
                  required
                />
              </div>
              <div className='mt-[20px]'>
                <span className='text-sm text-Inter'>Введите свой email</span>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Введите ваш email'
                  className='w-full px-4 py-2 mt-[10px] border bg-[#FAFAFA] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
                  required
                />
              </div>
              <div>
                <span className='text-sm text-Inter'>
                  Введите номер телефона
                </span>
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='Введите ваш номер телефона'
                  className='w-full px-4 py-2 mt-[10px] border bg-[#FAFAFA] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
                  required
                />
              </div>
              <div>
                <span className='text-sm text-Inter'>Комментарии</span>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Введите ваше сообщение'
                  className='w-full px-4 py-2 mt-[10px] border bg-[#FAFAFA] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 min-h-[100px]'
                  required
                />
              </div>
              <div className='flex justify-end sm:justify-start'>
                <button
                  type='submit'
                  className='bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500 transition-colors'
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>

          <div className='flex items-center justify-center'>
            <div className='rounded-[20px] overflow-hidden relative w-full h-[400px] shadow-md'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1330.0604036377892!2d69.22388818075903!3d41.328470605390216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bb7a0ebbae3%3A0xf9e01b5d45fc68cd!2sPDP%20Academy!5e1!3m2!1sru!2s!4v1739537613753!5m2!1sru!2s'
                className='w-full h-full object-cover'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
              <div className='absolute top-3 left-3 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-80'>
                Увеличить карту
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
