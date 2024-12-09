import { HeroSlider } from '@/components/home/hero-slider'
import { PromoBanners } from '@/components/home/promo-banners'
import { FeaturedProducts } from '@/components/home/featured-products'
import { ExclusiveOffers } from '@/components/home/exclusive-offers'

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <PromoBanners />
      <FeaturedProducts />
      <ExclusiveOffers />
    </main>
  )
}

