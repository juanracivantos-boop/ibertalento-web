import { HeroWithMedia } from '@/components/sections/HeroWithMedia'
import { Services } from '@/components/sections/Services'
import { Stats } from '@/components/sections/Stats'
import { Sectors } from '@/components/sections/Sectors'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <main>
      <HeroWithMedia />
      <Services />
      <Stats />
      <Sectors />
      <CTA />
    </main>
  )
}