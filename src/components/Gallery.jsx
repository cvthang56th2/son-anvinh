import PhotoAlbum from 'react-photo-album'
import 'react-photo-album/rows.css'

export default function Gallery({ images, onOpen }) {
  const photos = images.map(({ src, width, height }) => ({
    src: `${import.meta.env.BASE_URL}/images/${src}`,
    width,
    height,
    alt: src.replace('.JPG', ''),
  }))

  return (
    <section className="gallery-section" id="gallery">
      <PhotoAlbum
        layout="rows"
        photos={photos}
        targetRowHeight={320}
        spacing={8}
        rowConstraints={{ maxPhotos: 5 }}
        onClick={({ index }) => onOpen(index)}
        renderPhoto={({ photo, imageProps: { src, alt, style, ...rest } }) => (
          <img
            src={src}
            alt={alt}
            style={{ ...style, cursor: 'pointer', display: 'block' }}
            loading="lazy"
            {...rest}
          />
        )}
      />
    </section>
  )
}
