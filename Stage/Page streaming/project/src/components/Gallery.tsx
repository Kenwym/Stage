import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Image } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  event: string;
  date: string;
}

const galleries: { date: string; event: string; images: GalleryImage[] }[] = [
  {
    date: 'Février 2025',
    event: 'Apéri-TIGcRE Paris',
    images: Array.from({ length: 9 }, (_, i) => ({
      id: `${i + 1}`,
      src: `/images/2025-02/${i + 1}.png`,
      alt: `Photo ${i + 1} - Apéri-TIGcRE Paris Février 2025`,
      event: 'Apéri-TIGcRE Paris',
      date: 'Février 2025'
    }))
  },
  {
    date: 'Novembre 2024',
    event: 'Apéri-TIGcRE Lyon',
    images: Array.from({ length: 6 }, (_, i) => ({
      id: `${i + 1}`,
      src: `/images/2024-11/${i + 1}.png`,
      alt: `Photo ${i + 1} - Apéri-TIGcRE Lyon Novembre 2024`,
      event: 'Apéri-TIGcRE Lyon',
      date: 'Novembre 2024'
    }))
  }
];

export default function Gallery() {
  const [carouselIndex, setCarouselIndex] = useState<{ [date: string]: number }>({
    'Février 2025': 0,
    'Novembre 2024': 0
  });

  const handlePrev = (date: string, imagesLength: number) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [date]: prev[date] === 0 ? imagesLength - 1 : prev[date] - 1
    }));
  };

  const handleNext = (date: string, imagesLength: number) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [date]: prev[date] === imagesLength - 1 ? 0 : prev[date] + 1
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Image className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Galerie des Événements
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Revivez l'ambiance de nos précédents Apéri-TIGcREs à travers ces moments capturés
          </p>
        </div>

        <div className="space-y-16">
          {galleries.map((gallery) => {
            const currentIndex = carouselIndex[gallery.date] || 0;
            const currentImage = gallery.images[currentIndex];
            return (
              <div key={gallery.date} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{gallery.event}</h3>
                  <p className="text-orange-600 mb-4">{gallery.date}</p>
                  <div className="relative w-full flex items-center justify-center">
                    <button
                      onClick={() => handlePrev(gallery.date, gallery.images.length)}
                      className="absolute left-0 z-10 bg-orange-100 hover:bg-orange-200 rounded-full p-2 transition-colors"
                      aria-label="Précédent"
                    >
                      <ChevronLeft className="w-6 h-6 text-orange-600" />
                    </button>
                    <div
                      className="mx-auto rounded-lg bg-white flex items-center justify-center"
                      style={{ width: 480, height: 360 }}
                    >
                      <img
                        src={currentImage.src}
                        alt={currentImage.alt}
                        className="max-w-full max-h-full object-contain"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    <button
                      onClick={() => handleNext(gallery.date, gallery.images.length)}
                      className="absolute right-0 z-10 bg-orange-100 hover:bg-orange-200 rounded-full p-2 transition-colors"
                      aria-label="Suivant"
                    >
                      <ChevronRight className="w-6 h-6 text-orange-600" />
                    </button>
                  </div>
                  <div className="mt-4 text-gray-600">{currentImage.alt}</div>
                  <div className="mt-2 text-sm text-gray-400">
                    {currentIndex + 1} / {gallery.images.length}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}