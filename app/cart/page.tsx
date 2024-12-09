'use client'

import { useCart } from '@/contexts/cart-context'
import { Button } from '@/components/ui/button'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CartPage() {
  const { items, removeItem, addItem, getTotalPrice } = useCart()

  const updateQuantity = (item: any, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(item.id)
    } else {
      addItem({ ...item, quantity: newQuantity - item.quantity })
    }
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">عربة التسوق</h1>
        <p className="mb-4">عربة التسوق فارغة</p>
        <Link href="/">
          <Button>العودة للتسوق</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">عربة التسوق</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <div className="w-24 h-24 relative mr-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.price} ج.م</p>
              </div>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item, item.quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="md:col-span-1">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">ملخص الطلب</h2>
            <div className="flex justify-between mb-2">
              <span>المجموع الفرعي:</span>
              <span>{getTotalPrice()} ج.م</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>الشحن:</span>
              <span>مجاني</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4">
              <span>الإجمالي:</span>
              <span>{getTotalPrice()} ج.م</span>
            </div>
            <Button className="w-full mt-4">المتابعة للدفع</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

