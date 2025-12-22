import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { programKerja } from "@/data/program"

export default function Program() {
  return (
    <section
      id="program"
      className="relative py-24 text-white"
    >
      {/* Overlay gelap halus */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto px-4">

        {/* Judul */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Event
          </h2>
          <p className="mt-4 text-slate-300">
            Program kerja BEM FMIKOM sebagai wujud peran aktif mahasiswa
            dalam pengembangan akademik dan sosial.
          </p>
        </div>

        {/* Grid Program */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programKerja.map((item, index) => (
            <Card
              key={index}
              className="card-glass"
            >
              <CardHeader>
                <CardTitle className="text-lg">
                  {item.nama}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex grow flex-col gap-4">
                <p className="text-muted-foreground">
                  {item.deskripsi}
                </p>

                <Badge className="w-fit">
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
