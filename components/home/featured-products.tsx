import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// This would typically come from an API or database
const featuredProducts = [
  {
    id: 1,
    name: 'غسالة فوق أوتوماتيك',
    description: 'سعة 10 كجم، شاشة ديجيتال',
    price: 8898,
    oldPrice: 11000,
    image: '/placeholder.svg?height=300&width=300',
    category: 'أجهزة منزلية',
  },
  {
    id: 2,
    name: 'مكيف سبليت',
    description: 'تبريد سريع، موفر للطاقة',
    price: 7599,
    oldPrice: 8500,
    image: '/placeholder.svg?height=300&width=300',
    category: 'أجهزة منزلية',
  },
  {
    id: 3,
    name: 'خلاط كهربائي',
    description: 'قوة 1000 واط، متعدد السرعات',
    price: 1299,
    oldPrice: 1599,
    image: '/placeholder.svg?height=300&width=300',
    category: 'أجهزة منزلية صغيرة',
  },
  {
    id: 4,
    name: 'تلفزيون ذكي 55 بوصة',
    description: 'دقة 4K، تقنية HDR',
    price: 6999,
    oldPrice: 7999,
    image: '/placeholder.svg?height=300&width=300',
    category: 'إلكترونيات',
  },
  {
    id: 5,
    name: 'مكنسة كهربائية',
    description: 'قوة شفط عالية، سهلة الاستخدام',
    price: 1799,
    oldPrice: 2199,
    image: '/placeholder.svg?height=300&width=300',
    category: 'أجهزة منزلية',
  },
  {
    id: 6,
    name: 'فرن كهربائي',
    description: 'سعة 45 لتر، متعدد الوظائف',
    price: 3499,
    oldPrice: 3999,
    image: '/placeholder.svg?height=300&width=300',
    category: 'أجهزة منزلية',
  },
]

export function FeaturedProducts() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">المنتجات المميزة</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
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
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-primary">{product.price} ج.م</span>
                <span className="text-sm text-gray-500 line-through">{product.oldPrice} ج.م</span>
              </div>
              <p className="text-xs text-gray-500 mb-4">{product.category}</p>
              <Button asChild className="w-full">
                <Link href={`/product/${product.id}`}>عرض المنتج</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

