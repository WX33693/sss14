import { notFound } from 'next/navigation'
import Image from 'next/image'
import AddToCartButton from '@/components/product/add-to-cart-button'

// This would typically come from an API or database
const products = [
  {
    id: '1',
    name: 'غسالة فوق أوتوماتيك',
    description: 'سعة 10 كجم، شاشة ديجيتال',
    price: 8898,
    oldPrice: 11000,
    image: '/placeholder.svg?height=600&width=600',
    category: 'أجهزة منزلية',
    features: [
      'سعة 10 كيلوجرام',
      'شاشة ديجيتال سهلة الاستخدام',
      'برامج متعددة للغسيل',
      'نظام توفير الطاقة',
      'ضمان لمدة 5 سنوات',
    ],
  },
  // ... other products ...
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 md:h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold text-primary">{product.price} ج.م</span>
            <span className="text-lg text-gray-500 line-through">{product.oldPrice} ج.م</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">{product.category}</p>
          <AddToCartButton product={product} />
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">المميزات</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

