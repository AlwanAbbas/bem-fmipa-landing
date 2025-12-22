import { Instagram, Mail, MapPin, Globe } from "lucide-react"
import TikTokIcon from "@/components/icons/TikTokIcon"

export default function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Identitas */}
          <div>
            <h3 className="text-xl font-bold text-white">
              BEM FMIKOM
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Badan Eksekutif Mahasiswa Fakultas Matematika dan Ilmu Komputer
              sebagai wadah aspirasi dan pengembangan potensi mahasiswa.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Navigasi
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white">Beranda</a></li>
              <li><a href="#about" className="hover:text-white">Tentang</a></li>
              <li><a href="#structure" className="hover:text-white">Struktur</a></li>
              <li><a href="#program" className="hover:text-white">Program Kerja</a></li>
              <li><a href="#documentation" className="hover:text-white">Dokumentasi</a></li>
            </ul>
          </div>

          {/* Kontak & Informasi */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Kontak & Informasi
            </h4>
            <ul className="space-y-4 text-sm">

              {/* Email */}
              <li className="flex items-start gap-2">
                <Mail className="mt-1 h-4 w-4" />
                <span>bemfmikom@unugha.id</span>
              </li>

              {/* Alamat */}
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4" />
                <span>
                  Jl. Kemerdekaan Barat No.17, Gligir, Kesugihan Kidul,
                  Kec. Kesugihan, Kabupaten Cilacap,
                  Jawa Tengah 53274
                </span>
              </li>

              {/* Website Kampus */}
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <a
                  href="https://unugha.ac.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  UNUGHA
                </a>
              </li>

              {/* Sosial Media */}
              <li className="flex gap-4">
                <a
                  href="https://www.instagram.com/fmikom.unugha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                <a
                  href="https://www.tiktok.com/@bem.fmikom.unugha?lang=id-ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <TikTokIcon className="h-5 w-5 text-white hover:text-cyan-400" />
                </a>
              </li>
            </ul>
            {/* Google Maps Mini */}
            <div className="mt-4 overflow-hidden rounded-lg border border-slate-700">
              <iframe
                title="Lokasi BEM FMIKOM"
                src="https://www.google.com/maps?q=Jl.%20Kemerdekaan%20Barat%20No.17%20Kesugihan%20Cilacap&output=embed"
                width="100%"
                height="160"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} BEM FMIKOM. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
