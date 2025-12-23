import DocumentationSlider from "@/components/DocumentationSlider"
import { motion } from "framer-motion"

export default function Documentation() {
  return (
    <section
      id="documentation"
      className="relative py-24 text-white"
    >
      {/* Background overlay 40% */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div className="relative z-10 container mx-auto px-4">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mx-auto mb-14 max-w-3xl
            text-center
          "
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Dokumentasi Kegiatan
          </h2>
          <p className="mt-4 text-slate-300">
            Kegiatan dan aktivitas BEM FMIKOM
          </p>
        </motion.div>

        {/* ================= SLIDER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <DocumentationSlider />
        </motion.div>
        <p className="mt-4 text-slate-300 mx-auto mb-14 max-w-3xl text-center">More Documentation in Instagram <a href="https://www.instagram.com/fmikom.unugha/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">@bemfmikom</a> and TikTok <a href="https://www.tiktok.com/@bem.fmikom.unugha?lang=id-ID" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">@bemfmikom</a></p>
      </div>
    </section>
  )
}
