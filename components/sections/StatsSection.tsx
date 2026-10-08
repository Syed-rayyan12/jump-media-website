import LiveCounter from '@/components/shared/LiveCounter'

const stats = [
  { value: 11, label: 'Specialist platforms' },
  { value: 80400, label: 'Verified listings', separator: true },
  { value: 2.4, label: 'Monthly searches', decimals: 1, suffix: 'm' },
  { value: 2016, label: 'Founded' },
]

export default function StatsSection() {
  return (
    <section className="stats container">
      <div className="stats-copy">
        <p className="stats-eyebrow">What is Jump Media</p>
        <h2>
          A Media Group That Happens To<br className="stats-heading-br" />
          Run Directories &mdash; Not A Directory<br className="stats-heading-br" />
          That Calls Itself A Media Group.
        </h2>
      </div>
      <div className="stats-side">
        <p>
          We own and operate eleven business platforms, each one dedicated to a single sector. Every platform has its own editorial voice, its own verification standard and its own audience built through publishing rather than paid acquisition.
        </p>
        <p>
          For the people searching, that means answers instead of adverts. For the businesses listed, it means being found by someone who was already looking for exactly what they do.
        </p>
      </div>
      <div className="stat-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <LiveCounter
              value={stat.value}
              separator={stat.separator}
              decimals={stat.decimals}
              suffix={stat.suffix}
            />
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
