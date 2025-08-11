import { Hero } from "@/components/hero"
// import { Perspectives } from "@/components/perspectives"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* <Perspectives /> */}
      <Services />
      <About />
      <Contact />
    </main>
  )
}
