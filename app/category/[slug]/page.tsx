import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// This would typically come from an API or database
const categories = [
  {
    slug: 'home-appliances',
    name: 'أجهزة منزلية',
    products: [
      { id: '1', name: 'غسالة فوق أوتوماتيك', price: 8898, image: '/placeholder.svg?height=300&width=300' },
      { id: '2', name: 'ثلاجة نوفروست', price: 12999, image: '/placeholder.svg?height=300&width=300' },
      { id: '3', name: 'مكيف سبليت', price: 7599, image: '/placeholder.svg?height=300&width=300' },
      { id: '4', name: 'فرن كهربائي', price: 3499, image: '/placeholder.svg?height=300&width=300' },
      { id: '5', name: 'مكنسة كهربائية', price: 1799, image: '/placeholder.svg?height=300&width=300' },
      { id: '6', name: 'خلاط كهربائي', price: 1299, image: '/placeholder.svg?height=300&width=300' },
    ],
  },
  {
    slug: 'electronics',
    name: 'إلكترونيات',
    products: [
      { id: '7', name: 'تلفزيون ذكي 55 بوصة', price: 6999, image: '/placeholder.svg?height=300&width=300' },
      { id: '8', name: 'لابتوب محمول', price: 9999, image: '/placeholder.svg?height=300&width=300' },
      { id: '9', name: 'سماعات لاسلكية', price: 899, image: '/placeholder.svg?height=300&width=300' },
      { id: '10', name: 'كاميرا رقمية', price: 3999, image: '/placeholder.svg?height=300&width=300' },
      { id: '11', name: 'جهاز تابلت', price: 2999, image: '/placeholder.svg?height=300&width=300' },
      { id: '12', name: 'ساعة ذكية', price: 1499, image: '/placeholder.svg?height=300&width=300' },
    ],
  },
  // Add more categories as needed
]

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find(c => c.slug === params.slug)

  if (!category) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category.products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price} ج.م</p>
              <Button asChild className="w-full">
                <Link href={`/product/${product.id}`}>عرض المنتج</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

