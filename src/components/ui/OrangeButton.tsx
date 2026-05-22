import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TextRoll } from './TextRoll'

interface OrangeButtonProps {
  text: string
  to?: string
  href?: string
  onClick?: () => void
  fullWidth?: boolean
  size?: 'sm' | 'md'
}

export function OrangeButton({
  text,
  to,
  href,
  onClick,
  fullWidth = false,
  size = 'md',
}: OrangeButtonProps) {
  const base =
    `group inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white font-medium rounded-full transition-colors duration-300 cursor-pointer` +
    (fullWidth ? ' w-full justify-between' : '') +
    (size === 'sm'
      ? ' text-[13px] pl-5 pr-2 py-2'
      : ' text-[13px] sm:text-[14px] pl-5 sm:pl-6 pr-2 py-2')

  const iconSize = size === 'sm' ? 13 : 14
  const iconBox = size === 'sm' ? 'w-7 h-7' : 'w-7 h-7 sm:w-8 sm:h-8'

  const inner = (
    <>
      <TextRoll text={text} />
      <div
        className={`${iconBox} bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:-rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]`}
      >
        <ArrowRight size={iconSize} className="text-[#F26522]" />
      </div>
    </>
  )

  if (to) return <Link to={to} className={base}>{inner}</Link>
  if (href) return <a href={href} className={base}>{inner}</a>
  return <button onClick={onClick} className={base}>{inner}</button>
}
