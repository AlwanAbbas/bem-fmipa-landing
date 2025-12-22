import SectionWrapper from "@//layouts/SectionWrapper"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function About() {
  return (
    <SectionWrapper
      id="about"
      overlay="soft"
      className="py-100"
    >
      <div className="container mx-auto px-4">

        {/* Judul Section */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Tentang BEM FMIKOM
          </h2>
          <p className="mt-5 leading-relaxed text-slate-200">
            Badan Eksekutif Mahasiswa Fakultas Matematika dan Ilmu Komputer (FMIKOM)
            merupakan organisasi eksekutif tingkat fakultas di Universitas
            Nahdlatul Ulama Al Ghazali (UNUGHA) Cilacap yang mewadahi mahasiswa
            dalam pengembangan potensi, kepemimpinan, dan pengabdian.
          </p>
        </div>

        {/* Visi & Misi */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Visi */}
          <Card className="border border-yellow-300/40 bg-white/85 backdrop-blur-md shadow-xl">
            <CardHeader>
              <CardTitle className="text-slate-900">
                Visi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-slate-800">
                Mewujudkan insan akademis yang kreatif, inovatif, dan berintegritas
                tinggi, serta menjadi wadah pemersatu Mahasiswa FMIKOM UNUGHA
                Cilacap dalam mencetak pemimpin yang berwibawa dan bermanfaat.
              </p>
            </CardContent>
          </Card>

          {/* Misi */}
          <Card className="border border-yellow-300/40 bg-white/85 backdrop-blur-md shadow-xl">
            <CardHeader>
              <CardTitle className="text-slate-900">
                Misi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-slate-800">
                <li>Membina kepribadian dan karakter mahasiswa FMIKOM.</li>
                <li>Mengembangkan potensi kreatif, keilmuan, dan idealisme.</li>
                <li>Meningkatkan intelektualitas dan moralitas mahasiswa.</li>
                <li>Berperan aktif dalam dunia kemahasiswaan dan masyarakat.</li>
                <li>Menjalankan program sesuai AD/ART organisasi.</li>
              </ul>
            </CardContent>
          </Card>

        </div>

      </div>
    </SectionWrapper>
  )
}
