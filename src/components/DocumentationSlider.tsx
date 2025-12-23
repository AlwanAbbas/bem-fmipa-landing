import * as React from "react"
import { useState } from "react"
import { dokumentasi } from "@/data/dokumentasi"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"
import ImageModal from "@/components/ImageModal"

export default function DocumentationSlider() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  )

  const [selected, setSelected] = useState<{
    image: string
    judul: string
  } | null>(null)

  return (
    <>
      <Carousel
        plugins={[autoplay.current]}
        opts={{ loop: true }}
        className="mx-auto w-full max-w-6xl"
      >
        <CarouselContent className="-ml-4">
          {dokumentasi.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <Card
                  onClick={() => setSelected(item)}
                  className="
                    group relative
                    h-72 sm:h-80 lg:h-64
                    cursor-pointer
                    overflow-hidden
                    rounded-2xl
                    bg-white/10 backdrop-blur-xl
                    border border-yellow-400/30
                    shadow-xl shadow-black/40
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  {/* IMAGE FULL COVER */}
                  <img
                    src={item.image}
                    alt={item.judul}
                    loading="lazy"
                    className="
                      absolute inset-0
                      h-full w-full
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* DARK GRADIENT */}
                  <div
                    className="
                      absolute inset-0
                      bg-linear-to-t
                      from-black/80 via-black/40 to-transparent
                    "
                  />

                  {/* TITLE */}
                  <div
                    className="
                      absolute bottom-0 left-0 right-0
                      p-4 text-center
                    "
                  >
                    <h3 className="font-semibold text-white text-sm sm:text-base">
                      {item.judul}
                    </h3>
                    <div className="mx-auto mt-2 h-0.5 w-10 bg-yellow-400" />
                  </div>

                  {/* GLASS BORDER */}
                  <div
                    className="
                      pointer-events-none absolute inset-0
                      rounded-2xl
                      ring-1 ring-white/10
                    "
                  />
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* NAV BUTTON */}
        <CarouselPrevious
          className="
            -left-4
            bg-black/60 backdrop-blur
            text-white border-white/30
            hover:bg-yellow-400 hover:text-black
            transition-all
          "
        />
        <CarouselNext
          className="
            -right-4
            bg-black/60 backdrop-blur
            text-white border-white/30
            hover:bg-yellow-400 hover:text-black
            transition-all
          "
        />
      </Carousel>

      {/* MODAL */}
      <ImageModal
        isOpen={!!selected}
        image={selected?.image}
        title={selected?.judul}
        onClose={() => setSelected(null)}
      />
    </>
  )
}
