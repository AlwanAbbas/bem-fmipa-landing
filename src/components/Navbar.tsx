import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navItems = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Struktur", href: "#structure" },
  { label: "Events", href: "#program" },
  { label: "Dokumentasi", href: "#documentation" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("#home")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = navItems.map((item) => ({
      href: item.href,
      el: document.querySelector(item.href),
    }))

    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      for (const item of sections) {
        if (!item.el) continue
        const rect = item.el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(item.href)
          break
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300
        navbar-glass ${scrolled ? "navbar-shadow" : ""}`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/bemFM.webp"
            alt="Logo BEM"
            width={40}
            height={40}
            loading="eager"
            decoding="async"
            className="h-10 w-10 rounded-full border border-yellow-400"
          />
          <div className="leading-tight">
            <p className="text-sm font-bold text-slate-900">
              BEM FMIKOM
            </p>
            <p className="text-xs text-slate-600">
              Fakultas Ilmu Komputer dan Matematika
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link text-sm font-medium transition
                ${
                  active === item.href
                    ? "active text-slate-900"
                    : "text-slate-700 hover:text-slate-900"
                }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-800"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="navbar-glass border-l border-white/30 h-full w-64 px-6 py-5"
          >
            {/* Header Mobile */}
            <div className="flex items-center gap-3 border-b border-white/20 pb-4">
              <img
                src="/images/bemFM.webp"
                alt="Logo"
                width={40}
                height={40}
                loading="eager"
                decoding="async"
                className="h-10 w-10 rounded-full border"
              />
              <div>
                <p className="font-semibold text-slate-900">
                  BEM FMIKOM
                </p>
                <p className="text-xs text-slate-600">
                  Fakultas Ilmu Komputer dan Matematika
                </p>
              </div>
            </div>

            {/* Menu */}
            <nav className="mt-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-4 py-3 text-base font-medium transition
                    ${
                      active === item.href
                        ? "bg-yellow-300/20 text-yellow-700"
                        : "text-slate-800 hover:bg-white/30"
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  )
}
