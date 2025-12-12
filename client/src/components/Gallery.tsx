import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

/**
 * Gallery Component
 * Design: Retro-Futurismo Brasileiro
 * - Grid responsivo com imagens de edições anteriores
 * - Modal lightbox com navegação
 * - Animações suaves com transições
 * - Cores: roxo profundo, amarelo ouro, rosa quente
 */

const galleryImages = [
  { id: 1, src: '/images/gallery-1.jpg', alt: 'Festival Cristófoli - Multidão' },
  { id: 2, src: '/images/gallery-2.jpg', alt: 'Festival Cristófoli - Apresentação' },
  { id: 3, src: '/images/gallery-3.jpg', alt: 'Festival Cristófoli - Artista' },
  { id: 4, src: '/images/gallery-4.jpg', alt: 'Festival Cristófoli - Palco' },
  { id: 5, src: '/images/gallery-5.jpg', alt: 'Festival Cristófoli - Público' },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-festival-purple mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            GALERIA DE MOMENTOS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reviva os melhores momentos de edições anteriores do Festival Cristófoli
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-festival-purple/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white font-semibold text-sm">Ver em destaque</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-festival-yellow transition-colors z-10"
          >
            <X size={32} />
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-4xl max-h-[80vh]">
            <img
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              className="w-full h-full object-contain rounded-lg"
            />

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-festival-yellow transition-colors"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-festival-yellow transition-colors"
            >
              <ChevronRight size={40} />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-festival-purple/80 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
