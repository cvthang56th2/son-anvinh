import { useState, useRef, useEffect } from 'react'

function GalleryItem({ fileName, index, onOpen }) {
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { rootMargin: '120px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="gallery-item"
      onClick={() => onOpen(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(index)}
    >
      {visible && (
        <img
          src={`/images/${fileName}`}
          alt={fileName.replace('.JPG', '')}
          loading="lazy"
          className={loaded ? 'loaded' : ''}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  )
}

export default function Gallery({ images, onOpen }) {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <h2 className="gallery-title">8.3 CAO NGUYỄN AN VINH</h2>
        <p className="gallery-subtitle">MARCH 8TH, 2026</p>
      </div>
      <div className="gallery-grid">
        {images.map((fileName, index) => (
          <GalleryItem
            key={fileName}
            fileName={fileName}
            index={index}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  )
}
