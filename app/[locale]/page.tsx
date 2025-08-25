import { Hero } from "@/components/hero-optimized"
// import { Perspectives } from "@/components/perspectives"
import { Services } from "@/components/services"
import Reviews from "@/components/reviews"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* <Perspectives /> */}
      <Services />
      <About />
      <Reviews />
      <Contact />
    </main>
  )
}
