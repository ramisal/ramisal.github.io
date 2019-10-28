import './styles.scss'

export default function Section({ children, style }) {
  return (
    <section className="section" style={{ ...style }}>
      <div className="section__content">{children}</div>
    </section>
  )
}
