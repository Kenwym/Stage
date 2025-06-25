import React, { useState } from 'react';
import { Image, Eye, X } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  event: string;
  date: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      id: '1',
      src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Networking event atmosphere',
      event: 'Apéri-tigcre Paris',
      date: 'Février 2025'
    },
    {
      id: '2',
      src: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Professional networking',
      event: 'Apéri-tigcre Lyon',
      date: 'Janvier 2025'
    },
    {
      id: '3',
      src: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Business meeting',
      event: 'Apéri-tigcre Paris',
      date: 'Janvier 2025'
    },
    {
      id: '4',
      src: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Cocktail networking',
      event: 'Apéri-tigcre Lyon',
      date: 'Décembre 2024'
    },
    {
      id: '5',
      src: 'https://images.pexels.com/photos/2306277/pexels-photo-2306277.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Professional gathering',
      event: 'Apéri-tigcre Paris',
      date: 'Décembre 2024'
    },
    {
      id: '6',
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Business event',
      event: 'Apéri-tigcre Lyon',
      date: 'Novembre 2024'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Image className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Galerie des Événements
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Revivez l'ambiance de nos précédents apéri-tigcres à travers ces moments capturés
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg">{image.event}</h3>
                    <p className="text-sm opacity-90">{image.date}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedImage(image)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                >
                  <Eye className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{image.event}</h3>
                <p className="text-sm text-gray-600">{image.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for image preview */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <h3 className="text-xl font-semibold mb-1">{selectedImage.event}</h3>
                <p className="text-sm opacity-90">{selectedImage.date}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}