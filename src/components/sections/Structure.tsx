import { useState } from "react"
import OrgCard from "@/components/OrgCard"
import ConnectorLine from "@/components/ConnectorLine"
import ConnectorHorizontal from "@/components/ConnectorHorizontal"
import SectionWrapper from "@/layouts/SectionWrapper"
import { strukturOrganisasi } from "@/data/pengurus"
import { motion, easeOut, type Variants } from "framer-motion"
import { ChevronDown } from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: easeOut,
    },
  }),
}

export default function Structure() {
  const { ketua, wakil, inti, departemen } = strukturOrganisasi

  const [mode, setMode] = useState<"list" | "chart">("list")
  const [openDept, setOpenDept] = useState<number | null>(null)

  return (
    <SectionWrapper
      id="structure"
      className="py-28 text-white"
      overlay="dark"
    >
      <div className="container mx-auto px-4">

        {/* ================= TITLE ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Struktur Organisasi
          </h2>
          <p className="mt-4 text-slate-300">
            Susunan hierarki kepengurusan BEM FMIKOM Periode 2025/2026
          </p>
        </motion.div>

        {/* ============== MOBILE MODE SWITCH ============== */}
        <div className="mb-12 flex justify-center md:hidden">
          <div className="flex rounded-full bg-white/10 backdrop-blur p-1">
            <button
              onClick={() => setMode("list")}
              className={`px-4 py-1.5 rounded-full text-sm transition
                ${mode === "list"
                  ? "bg-yellow-400 text-black"
                  : "text-white/80"
                }`}
            >
              Daftar
            </button>
            <button
              onClick={() => setMode("chart")}
              className={`px-4 py-1.5 rounded-full text-sm transition
                ${mode === "chart"
                  ? "bg-yellow-400 text-black"
                  : "text-white/80"
                }`}
            >
              Bagan
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/* ================= MOBILE LIST MODE ============== */}
        {/* ================================================= */}
        {mode === "list" && (
          <motion.div
            className="space-y-20 md:hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            {/* ================= KETUA ================= */}
            <motion.div variants={fadeUp} custom={1} className="flex justify-center">
              <div className="w-full max-w-50">
                <OrgCard {...ketua} />
              </div>
            </motion.div>

            {/* ================= WAKIL ================= */}
            <motion.div variants={fadeUp} custom={2} className="flex justify-center">
              <div className="w-full max-w-50">
                <OrgCard {...wakil} />
              </div>
            </motion.div>

            {/* ================= INTI ================= */}
            <div className="space-y-10">
              <h3 className="text-center text-xl font-semibold text-yellow-300">
                Pengurus Inti
              </h3>

              <div className="space-y-8">
                {inti.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i + 3}
                    className="flex justify-center"
                  >
                    <div className="w-full max-w-50">
                      <OrgCard {...item} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ================= DEPARTEMEN ================= */}
            <div className="space-y-8">
              {departemen.map((dept, i) => (
                <div key={i} className="space-y-4">

                  {/* Header Accordion */}
                  <button
                    onClick={() =>
                      setOpenDept(openDept === i ? null : i)
                    }
                    className={`
                      flex w-full items-center justify-between
                      rounded-xl px-5 py-4 font-semibold
                      backdrop-blur transition
                      ${openDept === i
                        ? "bg-yellow-400 text-black shadow-lg"
                        : "bg-white/10 text-yellow-300"
                      }
                    `}
                  >
                    {dept.nama}
                    <ChevronDown
                      className={`transition ${
                        openDept === i && "rotate-180"
                      }`}
                    />
                  </button>

                  {/* Isi Accordion */}
                  {openDept === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6 pt-2"
                    >
                      {dept.anggota.map((a, idx) => (
                        <div
                          key={idx}
                          className="flex justify-center"
                        >
                          <div className="w-full max-w-50">
                            <OrgCard {...a} />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

          </motion.div>
        )}

        {/* ================================================= */}
        {/* ================= DESKTOP CHART MODE ============ */}
        {/* ================================================= */}
        <div className={`${mode === "list" ? "hidden md:block" : ""}`}>

          {/* Ketua */}
          <motion.div
            className="flex justify-center"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <OrgCard {...ketua} />
          </motion.div>

          <ConnectorLine height={40} delay={0.2} color="yellow" />

          {/* Wakil */}
          <motion.div
            className="flex justify-center"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <OrgCard {...wakil} />
          </motion.div>

          <ConnectorLine height={40} delay={0.4} color="yellow" />

          {/* Inti */}
          <div className="hidden md:block">
            <ConnectorHorizontal width={320} delay={0.6} color="yellow" />

            <div className="mx-auto flex w-[320px] justify-between">
              <ConnectorLine height={30} delay={0.8} color="yellow" />
              <ConnectorLine height={30} delay={0.8} color="yellow" />
            </div>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-16"
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {inti.map((item, index) => (
              <OrgCard key={index} {...item} />
            ))}
          </motion.div>

          {/* Departemen */}
          <div className="mt-32 space-y-32">
            {departemen.map((dept, index) => (
              <motion.div
                key={index}
                custom={index + 4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3 className="mb-12 text-center text-2xl font-semibold text-yellow-300">
                  {dept.nama}
                </h3>

                <div className="hidden md:flex flex-col items-center">
                  <ConnectorLine height={30} delay={0.2} color="yellow" />

                  <ConnectorHorizontal
                    width={dept.anggota.length * 120}
                    delay={0.4}
                    color="yellow"
                  />

                  <div
                    className="flex justify-around"
                    style={{
                      width: dept.anggota.length * 120,
                    }}
                  >
                    {dept.anggota.map((_, i) => (
                      <ConnectorLine
                        key={i}
                        height={25}
                        delay={0.6}
                        color="yellow"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  {dept.anggota.map((anggota, i) => (
                    <OrgCard key={i} {...anggota} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}
