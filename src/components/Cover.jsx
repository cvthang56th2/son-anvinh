export default function Cover() {
  const handleScroll = (e) => {
    e.preventDefault()
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="cover" id="cover">
      <div className="cover-overlay" />
      <img className="cover-bg" src="/images/CTL03210.JPG" alt="Cover" />
      <div className="cover-content">
        <h1 className="cover-title">8.3 CAO NGUYỄN AN VINH</h1>
        <p className="cover-date">MARCH 8TH, 2026</p>
        <a href="#gallery" className="cover-btn" onClick={handleScroll}>
          XEM BỘ ẢNH
        </a>
      </div>
      <div className="cover-scroll-hint">
        <span />
      </div>
    </section>
  )
}
