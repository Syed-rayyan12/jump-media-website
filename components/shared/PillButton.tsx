import { ArrowUpRight } from 'lucide-react'

export default function PillButton({ children, href = '#contact' }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href} className="pill-btn">
      <span className="pill-btn-text">{children}</span>
      <span className="pill-btn-icon">
        <ArrowUpRight size={16} strokeWidth={2.5} />
      </span>
    </a>
  )
}
