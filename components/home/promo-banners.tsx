import Image from 'next/image'
import Link from 'next/link'

const promos = [
  {
    id: 1,
    image: '/placeholder.svg?height=200&width=400',
    alt: 'أجهزة منزلية صغيرة',
    title: 'أجهزة منزلية صغيرة',
    description: 'بأسعار مخفضة',
    link: '/category/small-appliances',
  },
  {
    id: 2,
    image: '/placeholder.svg?height=200&width=400',
    alt: 'كل يوم ستايل جديد',
    title: 'كل يوم ستايل جديد',
    description: 'بأقوى الخصومات',
    link: '/category/fashion',
  },
]

export function PromoBanners() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {promos.map((promo) => (
          <Link key={promo.id} href={promo.link} className="group">
            <div className="relative h-48 overflow-hidden rounded-lg">
              <Image
                src={promo.image}
                alt={promo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                  <p>{promo.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

