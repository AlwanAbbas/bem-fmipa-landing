import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

interface Props {
  nama: string
  jabatan: string
  prodi?: string
  foto: string
  /** true untuk Ketua / Wakil */
  priority?: boolean
}

export default function OrgCard({
  nama,
  jabatan,
  prodi,
  foto,
  priority = false,
}: Props) {
  const [loaded, setLoaded] = useState(false)

  return (
    <Card
      className="
        relative w-56 text-center
        bg-white/10 backdrop-blur-xl
        border border-yellow-400/30
        shadow-xl shadow-black/40
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-2xl
        overflow-hidden
      "
    >
      <CardContent className="relative z-10 p-6">

        {/* Foto */}
        <div className="relative mx-auto mb-4 h-24 w-24">
          {/* Placeholder */}
          {!loaded && (
            <div
              className="
                absolute inset-0 rounded-full
                bg-white/20 animate-pulse
              "
            />
          )}

          <img
            src={foto}
            alt={nama}
            width={96}
            height={96}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`
              h-24 w-24 rounded-full object-cover
              border-2 border-yellow-300/70
              bg-white/20
              transition-opacity duration-300
              ${loaded ? "opacity-100" : "opacity-0"}
            `}
          />
        </div>

        {/* Nama */}
        <h3 className="font-semibold text-white">
          {nama}
        </h3>

        {/* Jabatan */}
        <p className="text-sm text-yellow-300">
          {jabatan}
        </p>

        {/* Prodi */}
        {prodi && (
          <p className="mt-1 text-xs text-slate-300">
            {prodi}
          </p>
        )}
      </CardContent>

      {/* Soft glow overlay */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-0 hover:opacity-100
          transition-opacity duration-300
          bg-linear-to-t from-yellow-400/10 via-transparent to-transparent
        "
      />
    </Card>
  )
}
