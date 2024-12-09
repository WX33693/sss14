import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const exclusiveOffers = [
  {
    id: 1,
    title: 'عرض حصري',
    description: 'خصم 30% على جميع الأجهزة المنزلية',
    image: '/placeholder.svg?height=400&width=600',
    link: '/exclusive/home-appliances',
  },
  {
    id: 2,
    title: 'صفقة اليوم',
    description: 'اشترِ تلفازًا واحصل على ساوند بار مجانًا',
    image: '/placeholder.svg?height=400&width=600',
    link: '/exclusive/tv-deal',
  },
]

export function ExclusiveOffers() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">عروض حصرية</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {exclusiveOffers.map((offer) => (
          <div key={offer.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <Button asChild>
                <Link href={offer.link}>استفد من العرض</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

