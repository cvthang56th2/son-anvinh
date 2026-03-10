import { useEffect, useState } from "react"

export default function Cover() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="cover" id="cover">
      <div className="cover-overlay" />
      <img className="cover-bg" src={`${import.meta.env.BASE_URL}${isDesktop ? "images/CTL03307.JPG" : "images/CTL03210.JPG"}`} alt="Cover" />
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
