import { motion } from "framer-motion"

interface ConnectorLineProps {
  height: number
  delay?: number
  color?: string
}

export default function ConnectorLine({
  height,
  delay = 0,
  color = "yellow",
}: ConnectorLineProps) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className={`mx-auto w-px bg-${color}-400 origin-top`}
      style={{ height }}
    />
  )
}
