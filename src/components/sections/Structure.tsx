import OrgCard from "@/components/OrgCard"
import ConnectorLine from "@/components/ConnectorLine"
import ConnectorHorizontal from "@/components/ConnectorHorizontal"
import SectionWrapper from "@/layouts/SectionWrapper"
import { strukturOrganisasi } from "@/data/pengurus"
import { motion, easeOut, type Variants } from "framer-motion"

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: easeOut,
    },
  }),
}

export default function Structure() {
  const { ketua, wakil, inti, departemen } = strukturOrganisasi

  return (
    <SectionWrapper
      id="structure"
      className="py-28 text-white"
      overlay="dark"
    >
      <div className="container mx-auto px-4">

        {/* Judul */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-24 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Struktur Organisasi
          </h2>
          <p className="mt-4 text-slate-300">
            Susunan hierarki kepengurusan BEM FMIKOM Periode 2025/2026
          </p>
        </motion.div>

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

        {/* Garis Ketua → Wakil */}
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

        {/* Garis Wakil → Inti */}
        <ConnectorLine height={40} delay={0.4} color="yellow" />

        {/* ========================= */}
        {/* INTI */}
        {/* ========================= */}
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

        {/* ========================= */}
        {/* DEPARTEMEN */}
        {/* ========================= */}
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

              {/* Konektor Departemen */}
              <div className="hidden md:flex flex-col items-center">
                <ConnectorLine height={30} delay={0.2} color="yellow" />

                <ConnectorHorizontal
                  width={dept.anggota.length * 120}
                  delay={0.4}
                  color="yellow"
                />

                <div
                  className="flex justify-around"
                  style={{ width: dept.anggota.length * 120 }}
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

              {/* Anggota */}
              <div className="flex flex-wrap justify-center gap-6">
                {dept.anggota.map((anggota, i) => (
                  <OrgCard key={i} {...anggota} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  )
}
