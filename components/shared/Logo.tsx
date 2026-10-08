export default function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#home" className={`logo-link inline-flex items-center select-none ${className}`} aria-label="Jump Media Home">
      <img
        src="/jump-media-logo.png"
        alt="Jump Media"
        className="brand-logo-img"
      />
    </a>
  )
}
