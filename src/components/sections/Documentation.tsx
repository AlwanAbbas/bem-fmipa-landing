import DocumentationSlider from "@/components/DocumentationSlider"
import { motion } from "framer-motion"

export default function Documentation() {
  return (
    <section
      id="documentation"
      className="relative py-24 text-white"
    >
      {/* Overlay gelap halus */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Dokumentasi Kegiatan
          </h2>
          <p className="mt-4 text-slate-300">
            Kegiatan dan aktivitas BEM FMIKOM
          </p>
        </motion.div>

        <DocumentationSlider />

      </div>
    </section>
  )
}
