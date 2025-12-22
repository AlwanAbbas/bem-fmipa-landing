export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="
      relative min-h-screen text-white
      bg-linear-to-b
      from-emerald-950
      via-emerald-900
      to-emerald-800
    ">
      {children}
    </main>
  )
}
