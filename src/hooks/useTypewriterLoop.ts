import { useEffect, useState } from "react"

type Options = {
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
}

export function useTypewriterLoop(
  texts: string[],
  {
    typingSpeed = 40,
    deletingSpeed = 25,
    delayBetween = 1500,
  }: Options = {}
) {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]

    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, typingSpeed)
    } 
    else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, delayBetween)
    } 
    else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, deletingSpeed)
    } 
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTextIndex((prev) => (prev + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [
    charIndex,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetween,
  ])

  return displayed
}
