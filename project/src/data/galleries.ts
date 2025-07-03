/**
 * Liste centralisée des galeries photos des événements Apéri-TIGcRE.
 *
 * À quoi servent ces données ?
 * ----------------------------
 * - Chaque objet Gallery représente une galerie d'un événement (date, nom, images).
 * - Chaque image (GalleryImage) contient son chemin, une légende, l'événement et la date.
 * - Ces données sont utilisées pour afficher dynamiquement la galerie sur la page dédiée du site.
 *
 * Ce que ça change sur le site :
 * -----------------------------
 * - Toutes les photos des événements sont centralisées ici : plus besoin de modifier le composant pour ajouter ou retirer des images.
 * - Pour ajouter une nouvelle galerie ou de nouvelles photos, il suffit d'éditer ce fichier.
 * - La galerie du site s'adapte automatiquement à ce qui est présent dans ce fichier, ce qui garantit la cohérence et la facilité de mise à jour.
 * - Permet d'afficher facilement plusieurs galeries pour différents événements, avec une structure claire et évolutive.
 */

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  event: string;
  date: string;
}

export interface Gallery {
  date: string;
  event: string;
  images: GalleryImage[];
}

export const galleries: Gallery[] = [
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
  // ...ajoute d'autres galeries ici
];