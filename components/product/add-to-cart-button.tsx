'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/contexts/cart-context'
import { useRouter } from 'next/navigation'

type Product = {
  id: string
  name: string
  price: number
}

export default function AddToCartButton({ product }: { product: Product }) {
  const [isAdding, setIsAdding] = useState(false)
  const { addItem } = useCart()
  const router = useRouter()

  const handleAddToCart = async () => {
    setIsAdding(true)
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    })
    await new Promise(resolve => setTimeout(resolve, 500)) // Simulating delay
    setIsAdding(false)
    router.push('/cart')
  }

  return (
    <Button onClick={handleAddToCart} disabled={isAdding} className="w-full md:w-auto">
      <ShoppingCart className="mr-2 h-4 w-4" />
      {isAdding ? 'جاري الإضافة...' : 'أضف إلى السلة'}
    </Button>
  )
}

