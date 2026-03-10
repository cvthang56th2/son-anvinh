import { useState, useEffect, useCallback } from 'react'
import Cover from './components/Cover'
import Gallery from './components/Gallery'
import Lightbox from './components/Lightbox'
import Footer from './components/Footer'
import { IMAGES } from './data/images'

export default function App() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  const openLightbox = useCallback((index) => {
    setLightbox({ open: true, index })
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox(prev => ({ ...prev, open: false }))
    document.body.style.overflow = ''
  }, [])

  const goNext = useCallback(() => {
    setLightbox(prev => ({ open: true, index: (prev.index + 1) % IMAGES.length }))
  }, [])

  const goPrev = useCallback(() => {
    setLightbox(prev => ({ open: true, index: (prev.index - 1 + IMAGES.length) % IMAGES.length }))
  }, [])

  useEffect(() => {
    if (!lightbox.open) return
    const handle = (e) => {
      if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [lightbox.open, goNext, goPrev, closeLightbox])

  return (
    <>
      <Cover />
      <Gallery images={IMAGES} onOpen={openLightbox} />
      <Footer />
      {lightbox.open && (
        <Lightbox
          images={IMAGES}
          index={lightbox.index}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </>
  )
}
