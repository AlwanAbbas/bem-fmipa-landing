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
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/30 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo & Nama */}
        <div className="flex items-center gap-2">
          <img src="../src/assets/images/bemFM.webp" alt="Logo BEM" className="h-13 w-13 rounded-full object-cover border-2 border-yellow-400/40 quality-100%" />
          <span className="font-bold text-lg">
            BEM FMIKOM
          </span>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  )
}
