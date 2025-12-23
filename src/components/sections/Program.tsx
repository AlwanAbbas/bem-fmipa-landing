import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { programKerja } from "@/data/program"

/* ================= BADGE COLOR SYSTEM ================= */
const badgeColors = [
  "bg-yellow-400/30 text-yellow-900 border-yellow-500/50",
  "bg-blue-400/30 text-blue-900 border-blue-500/50",
  "bg-green-400/30 text-green-900 border-green-500/50",
  "bg-purple-400/30 text-purple-900 border-purple-500/50",
  "bg-pink-400/30 text-pink-900 border-pink-500/50",
  "bg-cyan-400/30 text-cyan-900 border-cyan-500/50",
]

function getBadgeColor(text: string) {
  const index =
    text
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    badgeColors.length

  return badgeColors[index]
}

export default function Program() {
  return (
    <section
      id="program"
      className="relative py-24 text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto px-4">

        {/* ================= JUDUL ================= */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Event
          </h2>
          <p className="mt-4 text-slate-300">
            Program kerja BEM FMIKOM sebagai wujud peran aktif mahasiswa
            dalam pengembangan akademik dan sosial.
          </p>
        </div>

        {/* ================= GRID PROGRAM ================= */}
        <div
          className="
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {programKerja.map((item, index) => (
              <Card
                key={index}
                className="
                  bg-white/50 backdrop-blur-2xl
                  flex flex-col
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-2xl
                  group
                "
              >

              <CardHeader className="pb-2">
                <CardTitle className="text-lg  text-black/80 leading-snug">
                  {item.nama}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex grow flex-col gap-4">
                <p className="text-sm leading-relaxed text-black/70">
                  {item.deskripsi}
                </p>

                {/* Badge */}
                <Badge
                  className={`
                    w-fit border
                    px-3 py-1
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    transition
                    group-hover:scale-105
                    ${getBadgeColor(item.departemen)}
                  `}
                >
                  {item.departemen}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
