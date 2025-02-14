import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const forbiddenEmails = ['sulaymonovsaloxiddin092@gmail.com'] // Sizning email

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    // ❌ Foydalanuvchi sizning email'ingizni kiritolmaydi!
    if (forbiddenEmails.includes(formData.email.toLowerCase())) {
      alert("❌ Siz bu email'ni ishlata olmaysiz!")
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
        alert('✅ Xabar muvaffaqiyatli yuborildi!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('❌ Xatolik yuz berdi:', error)
      alert(`❌ Xabar yuborishda xatolik. Iltimos, qayta urinib ko'ring!`)
    }
  }

  return (
    <section className='bg-[#FAFAFA]'>
      <div className='max-w-7xl mx-auto px-4 py-8 bg-[#FAFAFA]'>
        <h1 className='text-2xl font-bold mb-[40px] mt-8 md:mt-[60px]'>
          Контакты
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 rounded-full  border-orange-400 flex items-center justify-center mb-2'>
              <svg
                width='120'
                height='120'
                viewBox='0 0 120 120'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='60'
                  cy='60'
                  r='57.5'
                  stroke='#FFB12A'
                  stroke-width='5'
                />
                <g clip-path='url(#clip0_1_5615)'>
                  <path
                    d='M72.9629 34.0742H47.037C46.0547 34.0742 45.1126 34.4644 44.418 35.159C43.7235 35.8536 43.3333 36.7956 43.3333 37.7779V82.2224C43.3333 83.2046 43.7235 84.1467 44.418 84.8413C45.1126 85.5359 46.0547 85.9261 47.037 85.9261H72.9629C73.9452 85.9261 74.8872 85.5359 75.5818 84.8413C76.2764 84.1467 76.6666 83.2046 76.6666 82.2224V37.7779C76.6666 36.7956 76.2764 35.8536 75.5818 35.159C74.8872 34.4644 73.9452 34.0742 72.9629 34.0742ZM47.037 37.7779H72.9629V71.1113H47.037V37.7779ZM47.037 82.2224V74.815H72.9629V82.2224H47.037Z'
                    fill='black'
                  />
                  <path
                    d='M58.1481 76.667H61.8518V80.3707H58.1481V76.667Z'
                    fill='black'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1_5615'>
                    <rect
                      width='66.6667'
                      height='66.6667'
                      fill='white'
                      transform='translate(26.6666 26.667)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className='font-medium'>Телефон</h3>
            <p className='text-sm'>+998 (97) 761 62 51</p>
          </div>

          <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 rounded-full  border-orange-400 flex items-center justify-center mb-2'>
              <svg
                width='120'
                height='120'
                viewBox='0 0 120 120'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='60'
                  cy='60'
                  r='57.5'
                  stroke='#FFB12A'
                  stroke-width='5'
                />
                <path
                  d='M59.7296 43.2803C58.0815 43.2803 56.4703 43.769 55.0999 44.6847C53.7295 45.6004 52.6614 46.9019 52.0306 48.4246C51.3999 49.9473 51.2349 51.6229 51.5564 53.2394C51.878 54.8559 52.6716 56.3407 53.8371 57.5062C55.0025 58.6716 56.4874 59.4653 58.1039 59.7868C59.7204 60.1084 61.396 59.9433 62.9187 59.3126C64.4414 58.6819 65.7429 57.6138 66.6586 56.2434C67.5742 54.8729 68.063 53.2618 68.063 51.6136C68.0605 49.4042 67.1817 47.2861 65.6194 45.7238C64.0572 44.1616 61.939 43.2828 59.7296 43.2803ZM59.7296 55.7803C58.9055 55.7803 58.1 55.5359 57.4148 55.0781C56.7296 54.6202 56.1955 53.9695 55.8801 53.2081C55.5648 52.4468 55.4823 51.609 55.643 50.8007C55.8038 49.9925 56.2006 49.25 56.7834 48.6673C57.3661 48.0846 58.1085 47.6878 58.9168 47.527C59.725 47.3662 60.5628 47.4487 61.3242 47.7641C62.0855 48.0795 62.7363 48.6135 63.1941 49.2987C63.6519 49.9839 63.8963 50.7895 63.8963 51.6136C63.895 52.7183 63.4556 53.7774 62.6745 54.5585C61.8934 55.3396 60.8343 55.779 59.7296 55.7803Z'
                  fill='black'
                />
                <path
                  d='M75.7429 35.5879C71.7836 31.6296 66.4985 29.2783 60.9074 28.9876C55.3164 28.6969 49.8159 30.4876 45.4675 34.014C41.1192 37.5404 38.2311 42.5525 37.3609 48.083C36.4906 53.6135 37.6999 59.2704 40.7551 63.9617L56.4982 88.1301C56.8486 88.6679 57.3276 89.1097 57.8919 89.4156C58.4562 89.7215 59.0879 89.8816 59.7297 89.8816C60.3715 89.8816 61.0032 89.7215 61.5675 89.4156C62.1318 89.1097 62.6108 88.6679 62.9611 88.1301L78.7048 63.9617C81.5397 59.6098 82.7926 54.4156 82.2533 49.2498C81.7141 44.084 79.4155 39.2605 75.7429 35.5879ZM75.2136 61.6874L59.7298 85.4569L44.2458 61.6874C39.5062 54.4115 40.5227 44.6745 46.6628 38.5341C48.3788 36.8181 50.4159 35.4569 52.658 34.5282C54.9 33.5995 57.303 33.1215 59.7298 33.1215C62.1565 33.1215 64.5595 33.5995 66.8015 34.5282C69.0436 35.4569 71.0807 36.8181 72.7967 38.5341C78.9368 44.6745 79.9532 54.4115 75.2136 61.6874Z'
                  fill='black'
                />
              </svg>
            </div>
            <h3 className='font-medium'>Локация</h3>
            <p className='text-sm'>Ташкент, ул. Беруни, 3А</p>
          </div>

          <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 rounded-full  border-orange-400 flex items-center justify-center mb-2'>
              <svg
                width='120'
                height='120'
                viewBox='0 0 120 120'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='60'
                  cy='60'
                  r='57.5'
                  stroke='#FFB12A'
                  stroke-width='5'
                />
                <path
                  d='M33.9584 42.2915H86.0417V81.8748H33.9584V42.2915Z'
                  stroke='black'
                  stroke-width='4'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M36.0417 44.375L60 65.2083L83.9584 44.375'
                  stroke='black'
                  stroke-width='4'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
            <h3 className='font-medium'>Е-майл</h3>
            <p className='text-sm'>Sardorraimov@gmail.com</p>
          </div>

          <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 rounded-full  border-orange-400 flex items-center justify-center mb-2'>
              <svg
                width='120'
                height='120'
                viewBox='0 0 120 120'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='60'
                  cy='60'
                  r='57.5'
                  stroke='#FFB12A'
                  stroke-width='5'
                />
                <g clip-path='url(#clip0_1_5623)'>
                  <path
                    d='M72.9625 34.0742H47.0366C46.0543 34.0742 45.1123 34.4644 44.4177 35.159C43.7231 35.8536 43.3329 36.7956 43.3329 37.7779V82.2224C43.3329 83.2046 43.7231 84.1467 44.4177 84.8413C45.1123 85.5359 46.0543 85.9261 47.0366 85.9261H72.9625C73.9448 85.9261 74.8868 85.5359 75.5814 84.8413C76.276 84.1467 76.6662 83.2046 76.6662 82.2224V37.7779C76.6662 36.7956 76.276 35.8536 75.5814 35.159C74.8868 34.4644 73.9448 34.0742 72.9625 34.0742ZM47.0366 37.7779H72.9625V71.1113H47.0366V37.7779ZM47.0366 82.2224V74.815H72.9625V82.2224H47.0366Z'
                    fill='black'
                  />
                  <path
                    d='M58.1477 76.667H61.8514V80.3707H58.1477V76.667Z'
                    fill='black'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1_5623'>
                    <rect
                      width='66.6667'
                      height='66.6667'
                      fill='white'
                      transform='translate(26.6663 26.667)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className='font-medium'>Телефон</h3>
            <p className='text-sm'>+998 (93) 556 91 31</p>
          </div>

          <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 rounded-full  border-orange-400 flex items-center justify-center mb-2'>
              <svg
                width='120'
                height='120'
                viewBox='0 0 120 120'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='60'
                  cy='60'
                  r='57.5'
                  stroke='#FFB12A'
                  stroke-width='5'
                />
                <path
                  d='M51.75 82H43.5C40.5826 82 37.7847 80.8411 35.7218 78.7782C33.6589 76.7153 32.5 73.9174 32.5 71V46.25C32.5 43.3326 33.6589 40.5347 35.7218 38.4718C37.7847 36.4089 40.5826 35.25 43.5 35.25H73.75C76.6674 35.25 79.4653 36.4089 81.5282 38.4718C83.5911 40.5347 84.75 43.3326 84.75 46.25V54.5M49 32.5V38M68.25 32.5V38M32.5 49H84.75M77.875 70.0182L73.75 74.1432'
                  stroke='black'
                  stroke-width='4'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M73.75 87.5C81.3439 87.5 87.5 81.3439 87.5 73.75C87.5 66.1561 81.3439 60 73.75 60C66.1561 60 60 66.1561 60 73.75C60 81.3439 66.1561 87.5 73.75 87.5Z'
                  stroke='black'
                  stroke-width='4'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
            <h3 className='font-medium'>Расписание</h3>
            <p className='text-sm'>Мы в вашем распоряжении 7 дней в неделю!!</p>
          </div>

          <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 rounded-full  border-orange-400 flex items-center justify-center mb-2'>
              <svg
                width='120'
                height='120'
                viewBox='0 0 120 120'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='60'
                  cy='60'
                  r='57.5'
                  stroke='#FFB12A'
                  stroke-width='5'
                />
                <path
                  d='M60 88.875C54.2891 88.875 48.7064 87.1815 43.9579 84.0087C39.2095 80.8359 35.5085 76.3262 33.323 71.05C31.1375 65.7738 30.5657 59.968 31.6798 54.3668C32.794 48.7656 35.5441 43.6205 39.5823 39.5823C43.6205 35.5441 48.7656 32.794 54.3668 31.6798C59.968 30.5657 65.7738 31.1375 71.05 33.323C76.3262 35.5085 80.8359 39.2095 84.0087 43.9579C87.1815 48.7064 88.875 54.2891 88.875 60C88.875 67.6581 85.8328 75.0026 80.4177 80.4177C75.0026 85.8328 67.6581 88.875 60 88.875ZM60 35.25C55.1049 35.25 50.3198 36.7016 46.2497 39.4211C42.1795 42.1407 39.0073 46.0061 37.134 50.5286C35.2607 55.0511 34.7706 60.0275 35.7256 64.8285C36.6806 69.6295 39.0378 74.0396 42.4991 77.5009C45.9605 80.9623 50.3705 83.3195 55.1715 84.2744C59.9726 85.2294 64.949 84.7393 69.4714 82.866C73.9939 80.9928 77.8593 77.8205 80.5789 73.7504C83.2984 69.6803 84.75 64.8951 84.75 60C84.75 53.4359 82.1424 47.1406 77.5009 42.4991C72.8594 37.8576 66.5641 35.25 60 35.25Z'
                  fill='black'
                />
                <path
                  d='M70.9217 70.9202C70.1182 71.7237 68.8155 71.7237 68.0121 70.9202L58.8162 61.7243C58.2536 61.1617 57.9375 60.3986 57.9375 59.603V43.5C57.9375 42.3609 58.8609 41.4375 60 41.4375C61.1391 41.4375 62.0625 42.3609 62.0625 43.5V58.3065C62.0625 58.8362 62.2727 59.3443 62.6469 59.7193L70.9231 68.0121C71.7252 68.8158 71.7246 70.1173 70.9217 70.9202Z'
                  fill='black'
                />
              </svg>
            </div>
            <h3 className='font-medium'>Время</h3>
            <p className='text-sm'>Каждый день с 8:00 – 18:00</p>
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

              <button
                type='submit'
                className='w-full bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500 transition-colors'
              >
                Отправить
              </button>
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
