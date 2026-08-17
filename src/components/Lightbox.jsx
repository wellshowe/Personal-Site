import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext])

  const item = items[index]
  const showNav = items.length > 1

  return createPortal(
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        <X size={26} strokeWidth={1.75} />
      </button>

      {showNav && (
        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Previous"
        >
          <ChevronLeft size={30} strokeWidth={1.75} />
        </button>
      )}

      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        {item.type === 'video' ? (
          <video
            key={item.src}
            src={item.src}
            poster={item.poster}
            controls
            autoPlay
            playsInline
          />
        ) : (
          <img key={item.src} src={item.src} alt={item.alt} />
        )}
      </div>

      {showNav && (
        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Next"
        >
          <ChevronRight size={30} strokeWidth={1.75} />
        </button>
      )}

      {showNav && (
        <div className="lightbox__count">
          {index + 1} / {items.length}
        </div>
      )}
    </div>,
    document.body
  )
}
