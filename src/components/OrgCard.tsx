import { Card, CardContent } from "@/components/ui/card"

interface Props {
  nama: string
  jabatan: string
  prodi?: string
  foto: string
}

export default function OrgCard({
  nama,
  jabatan,
  prodi,
  foto,
}: Props) {
  return (
      <Card
        className="
          w-56 text-center
          bg-white/10 backdrop-blur-xl
          border border-yellow-400/40
          shadow-xl shadow-black/40
          transition-all duration-300
          hover:-translate-y-2 hover:shadow-2xl
        "
      >

      <CardContent className="relative p-6">

        {/* Foto */}
        <img
          src={foto}
          alt={nama}
          className="
            mx-auto mb-4 h-24 w-24 rounded-full object-cover
            border-2 border-yellow-300/70
            bg-white/20
          "
        />

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

        {/* Soft glow hover */}
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-0 hover:opacity-100
            transition-opacity duration-300
            bg-linear-to-t from-yellow-400/10 to-transparent
          "
        />
      </CardContent>
    </Card>
  )
}
