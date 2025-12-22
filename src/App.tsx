import Navbar from "@/components/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Structure from "@/components/sections/Structure"
import Program from "@/components/sections/Program"
import Documentation from "@/components/sections/Documentation"
import Footer from "@/components/Footer"
import MainLayout from "./layouts/MainLayout"

function App() {
  return (
    <>
      <Navbar />

      {/* Background Gradient Global */}
        <MainLayout>
          <Hero />
          <About />
          <Structure />
          <Program />
          <Documentation />
        </MainLayout>

      <Footer />
    </>
  )
}

export default App
