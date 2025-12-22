interface SectionWrapperProps {
  id?: string
  children: React.ReactNode
  className?: string
  overlay?: "none" | "soft" | "dark"
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  overlay = "none",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`relative ${className}`}>
      {overlay !== "none" && (
        <div
          className={`pointer-events-none absolute inset-0 ${
            overlay === "soft"
              ? "bg-black/20"
              : "bg-black/40"
          }`}
        />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}
