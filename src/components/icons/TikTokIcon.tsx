type TikTokIconProps = {
  className?: string
}

export default function TikTokIcon({ className }: TikTokIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M21 8.1c-1.7 0-3.3-.6-4.6-1.6v7.6c0 3.8-3.1 6.9-6.9 6.9s-6.9-3.1-6.9-6.9 3.1-6.9 6.9-6.9c.4 0 .8 0 1.2.1v3.6c-.4-.1-.8-.2-1.2-.2-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3V2h3.6c.3 2.3 2.2 4.1 4.5 4.5v1.6z" />
    </svg>
  )
}
