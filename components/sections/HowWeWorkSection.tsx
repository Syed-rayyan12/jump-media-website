export default function HowWeWorkSection() {
  return (
    <section className="how-we-work-section" id="about">
      <div className="how-we-work-container">
        <div className="how-we-work-header">
          <div>
            <p className="section-eyebrow">How We Work</p>
            <h2 className="how-we-work-heading">
              We Build Platforms People<br />Actually Use.
            </h2>
          </div>
          <div>
            <p className="how-we-work-desc">
              We don&apos;t believe a directory should simply be a database of businesses. Each Jump<br className="desc-br" />
              Media platform is built around a specific industry, creating a focused environment<br className="desc-br" />
              where people can discover, compare and connect with relevant businesses.
            </p>
          </div>
        </div>

        <div className="how-we-work-body">
          <div className="how-photo-wrap">
            <img
              src="/Image (8).png"
              alt="Professional working on laptop"
              className="how-photo"
            />
          </div>
          <div className="how-grid">
            {[
              ['01', 'Specialist', 'One platform. One industry. A clear purpose.'],
              ['02', 'Editorial', 'Useful content that helps people make informed decisions.'],
              ['03', 'Verified', 'Reliable business information people can trust.'],
              ['04', 'Organic', 'Audiences built through publishing, search and genuine discovery.'],
            ].map(([num, title, desc]) => (
              <div className="how-item" key={num}>
                <span className="how-num">{num}</span>
                <h3 className="how-title">{title}</h3>
                <p className="how-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
