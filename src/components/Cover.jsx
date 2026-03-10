export default function Cover() {
  const handleScroll = (e) => {
    e.preventDefault()
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="cover" id="cover">
      <div className="cover-overlay" />
      <img className="cover-bg" src="/images/CTL03307.JPG" alt="Cover" />
      <div className="cover-content">
        <h1 className="cover-title">Gia đình Son</h1>
        <p className="cover-date">MARCH 9TH, 2026</p>
      </div>
      <div className="cover-scroll-hint">
        <span />
      </div>
    </section>
  )
}
