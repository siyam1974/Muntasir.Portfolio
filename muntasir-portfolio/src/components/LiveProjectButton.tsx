interface LiveProjectButtonProps {
  className?: string
  href?: string
}

export default function LiveProjectButton({ className = '', href }: LiveProjectButtonProps) {
  const content = (
    <span
      className={`inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base whitespace-nowrap transition-colors hover:bg-[#D7E2EA]/10 ${className}`}
    >
      Live Project
    </span>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return <button type="button">{content}</button>
}
