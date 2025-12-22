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
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"
import ImageModal from "@/components/ImageModal"

export default function DocumentationSlider() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 3000,
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
        opts={{ align: "start", loop: true }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {dokumentasi.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card
                  className="cursor-pointer overflow-hidden"
                  onClick={() => setSelected(item)}
                >
                  <CardContent className="p-0">
                    <img
                      src={item.image}
                      alt={item.judul}
                      loading="lazy"
                      className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="p-4 text-center font-medium">
                      {item.judul}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious 
          className="
          bg-white-500
          text-black 
          border-black 
          hover:text-blue-600 
          hover:border-blue-600
          transition-colors"
        />
        <CarouselNext className="
          bg-white-50
          text-black 
          border-black 
          hover:text-blue-600 
          hover:border-blue-600
          transition-colors"
        />
      </Carousel>

      {/* Fullscreen Modal */}
      <ImageModal
        isOpen={!!selected}
        image={selected?.image}
        title={selected?.judul}
        onClose={() => setSelected(null)}
      />
    </>
  )
}
