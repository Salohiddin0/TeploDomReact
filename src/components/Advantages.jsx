import { Star, PlaneTakeoff, Store, Package, Truck } from 'lucide-react'

export default function AdvantagesSection () {
  const advantages = [
    {
      icon: Star,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
      text: '50 000 довольных клиентов по всей страна'
    },
    {
      icon: PlaneTakeoff,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500',
      text: '99% заказов приходит в назначенное время'
    },
    {
      icon: Store,
      bgColor: 'bg-sky-50',
      iconColor: 'text-sky-500',
      text: '5 лет на рынке инструмента и техники'
    },
    {
      icon: Package,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-500',
      text: 'Боле 5 000 позиций товаров на складах'
    },
    {
      icon: Truck,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500',
      text: 'Бесплатная доставка по городу Ташкент (при заказе от 3 млн.)'
    }
  ]

  return (
    <section className='py-12 px-4 md:px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-2xl font-bold mb-16 text-center'>
          Наши преимущества
        </h2>

        <div className='grid gap-y-16 gap-x-8 md:grid-cols-3 place-items-center'>
          {advantages.slice(0, 3).map((advantage, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center max-w-[300px]'
            >
              <div
                className={`${advantage.bgColor} p-6 rounded-full flex items-center justify-center mb-6`}
              >
                <advantage.icon
                  className={`w-8 h-8 ${advantage.iconColor}`}
                  strokeWidth={1.5}
                />
              </div>
              <p className='text-gray-800 text-lg'>{advantage.text}</p>
            </div>
          ))}
        </div>

        <div className='grid gap-16 md:flex md:flex-row md:justify-center mt-16'>
          {advantages.slice(3).map((advantage, index) => (
            <div
              key={index + 3}
              className='flex flex-col items-center text-center max-w-[300px]'
            >
              <div
                className={`${advantage.bgColor} p-6 rounded-full flex items-center justify-center mb-6`}
              >
                <advantage.icon
                  className={`w-8 h-8 ${advantage.iconColor}`}
                  strokeWidth={1.5}
                />
              </div>
              <p className='text-gray-800 text-lg'>{advantage.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
