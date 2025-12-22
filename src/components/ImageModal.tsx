import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

type Props = {
  isOpen: boolean
  image?: string
  title?: string
  onClose: () => void
}

export default function ImageModal({
  isOpen,
  image,
  title,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[90vh] max-w-[90vw]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 rounded-full bg-white/90 p-2 text-black hover:bg-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image */}
            <img
              src={image}
              alt={title}
              className="max-h-[80vh] rounded-lg object-contain"
            />

            {/* Title */}
            {title && (
              <p className="mt-4 text-center text-white">
                {title}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
