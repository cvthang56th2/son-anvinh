import { useEffect, useRef, useState } from 'react'

export default function Lightbox({ images, index, onClose, onNext, onPrev }) {
  const [fading, setFading] = useState(false)
  const [src, setSrc] = useState(`/images/${images[index].src}`)
  const touchStartX = useRef(0)

  useEffect(() => {
    setFading(true)
    const t = setTimeout(() => {
      setSrc(`/images/${images[index].src}`)
      setFading(false)
    }, 180)
    return () => clearTimeout(t)
  }, [index, images])

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e) => {
    const delta = touchStartX.current - e.changedTouches[0].screenX
    if (Math.abs(delta) > 50) {
      delta > 0 ? onNext() : onPrev()
    }
  }

  return (
    <div
      className="lightbox open"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Đóng">&times;</button>
      <button className="lightbox-prev" onClick={onPrev} aria-label="Ảnh trước">&#8249;</button>
      <button className="lightbox-next" onClick={onNext} aria-label="Ảnh tiếp">&#8250;</button>
      <div className="lightbox-img-wrap">
        <img
          className={`lightbox-img${fading ? ' fading' : ''}`}
          src={src}
          alt={images[index].src}
        />
      </div>
      <div className="lightbox-counter">{index + 1} / {images.length}</div>
    </div>
  )
}
