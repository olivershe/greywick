import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { CTASection } from "@/components/sections/cta-section"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { CarouselSection } from "@/components/sections/carousel-section"
import { InsightsSection } from "@/components/sections/insights-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Home() {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background">
        <CustomCursor />
        <Header />
        <HeroSection />
        <ManifestoSection />
        <FeaturesSection />
        <CTASection />
        <ShowcaseSection />
        <CarouselSection />
        <InsightsSection />
        <FooterSection />
      </main>
    </LenisProvider>
  )
}
