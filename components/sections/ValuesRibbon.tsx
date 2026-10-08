const values = ['DISCOVER', 'CONNECT', 'GROW', 'FIND', 'TRUST', 'EXPLORE']
const loopedValues = [...values, ...values, ...values, ...values]

export default function ValuesRibbon() {
  return (
    <section className="ribbon-crossover-wrap" aria-label="Our values">
      <div className="ribbon-track-white">
        <div className="ribbon-inner">
          {loopedValues.map((value, i) => (
            <span key={`white-${value}-${i}`}>{value}</span>
          ))}
        </div>
      </div>
      <div className="ribbon-track-teal">
        <div className="ribbon-inner-reverse">
          {loopedValues.map((value, i) => (
            <span key={`teal-${value}-${i}`}>{value}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
