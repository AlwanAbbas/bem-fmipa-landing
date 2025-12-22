import { Button } from "@/components/ui/button"
import { useTypewriterLoop } from "@/hooks/useTypewriterLoop"
import SectionWrapper from "@/layouts/SectionWrapper"

export default function Hero() {
  const taglines = [
    "Wadah aspirasi, kreativitas, dan kolaborasi mahasiswa FMIKOM.",
    "Membangun lingkungan akademik yang aktif dan inovatif.",
    "Bersama menciptakan mahasiswa berintegritas dan berdaya saing.",
  ]

  const typedText = useTypewriterLoop(taglines, {
    typingSpeed: 40,
    deletingSpeed: 25,
    delayBetween: 1800,
  })

  return (
    <SectionWrapper
      id="home"
      overlay="dark"
      className="flex min-h-screen items-center justify-center"
    >
      <div className="container mx-auto px-4 text-center">

        {/* Badge */}
        <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
          Badan Eksekutif Mahasiswa
        </span>

        {/* Judul */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          BEM Fakultas Matematika <br />
          dan Ilmu Komputer
        </h1>

        {/* Tagline Typing */}
        <p className="mx-auto mt-6 min-h-12 max-w-2xl text-lg text-slate-100">
          {typedText}
          <span className="ml-1 animate-pulse font-medium text-yellow-300">|</span>
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-yellow-400 text-slate-900 hover:bg-yellow-300"
            asChild
          >
            <a href="#about">Tentang Kami</a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white/70 text-white hover:bg-white/10"
            asChild
          >
            <a href="#structure">Struktur Organisasi</a>
          </Button>
        </div>

      </div>
    </SectionWrapper>
  )
}
