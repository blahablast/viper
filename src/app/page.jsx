import HeroSection from './components/home/hero-section/page'
import StatsSection from './components/home/stats-section/page'
import BurnedSection from './components/home/burned-section/page'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <BurnedSection />
    </main>
  )
}