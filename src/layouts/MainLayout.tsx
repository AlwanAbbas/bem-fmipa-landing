export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="
        relative min-h-screen text-white
        bg-linear-to-b
        from-green-800 from-0%
        to-yellow-300 to-100%
      "
    >
      {children}
    </main>
  )
}
