'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    id: 1,
    image: '/placeholder.svg?height=500&width=1200',
    alt: 'عروض الأجهزة المنزلية',
    title: 'أفضل العروض على الأجهزة المنزلية',
    description: 'وفر حتى 50% على الأجهزة المنزلية الكبيرة',
    cta: 'تسوق الآن',
    link: '/category/home-appliances',
  },
  {
    id: 2,
    image: '/placeholder.svg?height=500&width=1200',
    alt: 'تخفيضات الإلكترونيات',
    title: 'تخفيضات هائلة على الإلكترونيات',
    description: 'اشترِ أحدث الأجهزة الإلكترونية بأسعار لا تقاوم',
    cta: 'اكتشف العروض',
    link: '/category/electronics',
  },
  {
    id: 3,
    image: '/placeholder.svg?height=500&width=1200',
    alt: 'أثاث منزلي',
    title: 'جدد منزلك مع تشكيلتنا الجديدة',
    description: 'أثاث عصري وأنيق لكل غرفة في منزلك',
    cta: 'استكشف المجموعة',
    link: '/category/furniture',
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-lg md:text-xl mb-4">{slide.description}</p>
                  <Button asChild>
                    <a href={slide.link}>{slide.cta}</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

