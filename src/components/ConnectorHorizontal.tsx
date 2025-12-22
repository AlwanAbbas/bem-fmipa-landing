import { motion } from "framer-motion"

interface ConnectorHorizontalProps {
  width: number
  delay?: number
  color?: string
}

export default function ConnectorHorizontal({
  width,
  delay = 0,
  color = "yellow",
}: ConnectorHorizontalProps) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className={`mx-auto h-px bg-${color}-400 origin-center`}
      style={{ width }}
    />
  )
}
