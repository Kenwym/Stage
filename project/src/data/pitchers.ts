/**
 * Liste centralisée des pitcheurs (participants qui présentent un projet) pour tous les événements Apéri-TIGcRE.
 *
 * À quoi servent ces données ?
 * ----------------------------
 * - Chaque objet Pitcher représente un pitcheur avec ses informations (nom, heure de passage, projet, image, slug, événements associés).
 * - Le champ "events" permet d'associer un même pitcheur à plusieurs événements (multi-participation).
 * - Ces données sont utilisées pour afficher dynamiquement le planning des passages dans le dashboard utilisateur.
 * - Elles servent aussi à générer les liens vers les pages projets et à afficher les infos des pitcheurs dans les différents événements.
 *
 * Ce que ça change sur le site :
 * -----------------------------
 * - Toutes les infos sur les pitcheurs sont centralisées ici : plus besoin de modifier le composant pour ajouter, retirer ou corriger un pitcheur.
 * - Pour ajouter un pitcheur à un événement, il suffit d'ajouter son eventId dans le tableau "events".
 * - Le planning des événements et les liens vers les projets sont automatiquement mis à jour selon ce fichier.
 * - Facilite la maintenance, la cohérence et l'évolution du site (ajout d'un pitcheur, correction d'une info, etc.).
 */

export interface Pitcher {
  name: string;
  time: string;
  project?: string;
  img?: string;
  slug?: string;
  events: string[]; // Liste des eventId où il intervient
}

export const pitchers: Pitcher[] = [
  {
    name: 'Gabriel Halioui',
    time: '19h20',
    project: 'Accueil des participants',
    img: '/images/participants/gabriel_halioui.jpeg',
    events: ['2025-07']
  },
  {
    name: 'Alice Martin',
    time: '19h30',
    project: 'Projet Alpha',
    img: '/images/participants/alice.jpeg',
    slug: 'alice-martin',
    events: ['2025-07']
  },
  {
    name: 'Bob Dupont',
    time: '19h40',
    project: 'Projet Beta',
    img: '/images/participants/bob.jpeg',
    slug: 'bob-dupont',
    events: ['2025-07']
  },
  {
    name: 'Chloé Dubois',
    time: '19h50',
    project: 'Projet Gamma',
    img: '/images/participants/chloe.jpeg',
    events: ['2025-07']
  },
  {
    name: 'David Leroy',
    time: '20h00',
    project: 'Projet Delta',
    img: '/images/participants/david.jpeg',
    slug: 'david-leroy',
    events: ['2025-07', '2025-02']
  },
  {
    name: 'Emma Petit',
    time: '19h40',
    project: 'Projet Epsilon',
    img: '/images/participants/emma.jpg',
    events: ['2025-02']
  },
  {
    name: 'Fanny Morel',
    time: '19h30',
    project: 'Projet Zeta',
    events: ['2025-09']
  },
  {
    name: 'Gilles Bernard',
    time: '19h30',
    project: 'Projet Eta',
    events: ['2025-10']
  },
  {
    name: 'Hugo Martin',
    time: '19h30',
    project: 'Projet Lyonnais',
    events: ['2024-11']
  }
  // ...ajoute d'autres pitcheurs ici
];