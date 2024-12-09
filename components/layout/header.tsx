'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import { useCart } from '@/contexts/cart-context'

const categories = [
  { slug: 'home-appliances', name: 'أجهزة منزلية' },
  { slug: 'electronics', name: 'إلكترونيات' },
  { slug: 'furniture', name: 'أثاث' },
  { slug: 'kitchenware', name: 'أدوات مطبخ' },
]

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { getTotalQuantity } = useCart()

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>مرحباً بك</span>
            {!isLoggedIn && (
              <div className="flex gap-2">
                <Link href="/login" className="hover:text-primary">
                  تسجيل الدخول
                </Link>
                <span>|</span>
                <Link href="/register" className="hover:text-primary">
                  عضو جديد؟ سجل الآن
                </Link>
              </div>
            )}
          </div>
          <Link href="/cart" className="hover:text-primary flex items-center">
            <ShoppingCart className="h-4 w-4 mr-1" />
            <span>عربة التسوق</span>
            {getTotalQuantity() > 0 && (
              <span className="ml-1 bg-primary text-white rounded-full px-2 py-1 text-xs">
                {getTotalQuantity()}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/placeholder.svg"
              alt="Sweet Home"
              width={120}
              height={40}
              className="h-10 w-auto object-contain hover:scale-105 transition-transform"
            />
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-2xl relative">
            <Input
              type="search"
              placeholder="البحث عن المنتجات والأقسام..."
              className="w-full pr-10"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {getTotalQuantity() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full px-2 py-1 text-xs">
                    {getTotalQuantity()}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-muted">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link href="/">
                <Button variant="ghost" className="h-12 hover:bg-primary/10">
                  الرئيسية
                </Button>
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/category/${category.slug}`}>
                  <Button variant="ghost" className="h-12 hover:bg-primary/10">
                    {category.name}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

