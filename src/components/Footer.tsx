import { Instagram, Mail, MapPin, Globe } from "lucide-react"
import TikTokIcon from "@/components/icons/TikTokIcon"

const quickLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Struktur Organisasi", href: "#structure" },
  { label: "Program Kerja", href: "#program" },
  { label: "Dokumentasi", href: "#documentation" },
]

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">

      {/* === BACKGROUND EFFECT === */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-4 py-28">

        {/* ================= TOP GRID ================= */}
        <div className="grid gap-20 lg:grid-cols-3">

          {/* BRAND / ABOUT */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide text-white">
              BEM FMIKOM
            </h2>

            <div className="mt-3 h-1 w-20 rounded-full bg-linear-to-r from-yellow-400 to-yellow-600" />

            <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-400">
              Badan Eksekutif Mahasiswa Fakultas Matematika dan Ilmu Komputer
              Universitas Nahdlatul Ulama Al-Ghazali Cilacap sebagai wadah
              kepemimpinan, aspirasi, dan inovasi mahasiswa berbasis
              intelektual dan moral.
            </p>
          </div>

          {/* QUICK NAV */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Navigasi Utama
            </h3>

            <ul className="space-y-4 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-3 transition"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 opacity-0 transition group-hover:opacity-100" />
                    <span className="group-hover:text-white">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Kontak Resmi
            </h3>

            <ul className="space-y-5 text-sm text-slate-400">
              <li className="flex gap-4">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span>bemfmikom@unugha.id</span>
              </li>

              <li className="flex gap-4">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span>
                  Jl. Kemerdekaan Barat No.17, Kesugihan Kidul,
                  Kabupaten Cilacap, Jawa Tengah 53274
                </span>
              </li>

              <li className="flex gap-4">
                <Globe className="h-5 w-5 text-yellow-400" />
                <a
                  href="https://unugha.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  www.unugha.ac.id
                </a>
              </li>
            </ul>

            {/* SOCIAL ICON */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.instagram.com/fmikom.unugha/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full border border-white/15 p-3 transition hover:border-yellow-400"
              >
                <Instagram className="h-5 w-5 transition group-hover:text-yellow-400" />
              </a>

              <a
                href="https://www.tiktok.com/@bem.fmikom.unugha"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full border border-white/15 p-3 transition hover:border-cyan-400"
              >
                <TikTokIcon className="h-5 w-5 transition group-hover:text-cyan-400" />
              </a>
            </div>

            {/* MAP */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Lokasi BEM FMIKOM"
                src="https://www.google.com/maps?q=Jl.%20Kemerdekaan%20Barat%20No.17%20Kesugihan%20Cilacap&output=embed"
                height="180"
                loading="lazy"
                className="w-full grayscale transition duration-500 hover:grayscale-0"
              />
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-20 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          <span>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-white">
              BEM FMIKOM UNUGHA
            </span>
          </span>

          <span className="tracking-wide">
            Built with ❤️ by Mahasiswa FMIKOM
          </span>
        </div>
      </div>
    </footer>
  )
}
