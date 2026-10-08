import PillButton from '@/components/shared/PillButton'

export default function CtaSection() {
  return (
    <section className="cta" id="contact">
      <div className="container cta-inner">
        <p className="cta-eyebrow">Our Platforms</p>
        <h2>Discover The Platforms Behind Jump Media.</h2>
        <p className="cta-desc">
          From nurseries and vets to solicitors, accountants, architects and more &mdash; explore our growing network of specialist business platforms.
        </p>
        <PillButton>Explore My Brands</PillButton>
      </div>
    </section>
  )
}
