interface TextRollProps {
  text: string
  className?: string
}

export function TextRoll({ text, className = '' }: TextRollProps) {
  return (
    <div className={`overflow-hidden h-[20px] ${className}`}>
      <div className="flex flex-col group-hover:-translate-y-1/2 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
        <span className="leading-[20px]">{text}</span>
        <span className="leading-[20px]" aria-hidden="true">{text}</span>
      </div>
    </div>
  )
}
