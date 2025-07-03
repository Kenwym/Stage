/**
 * Liste centralisée des projets présentés lors des événements Apéri-TIGcRE.
 *
 * À quoi servent ces données ?
 * ----------------------------
 * - Chaque objet représente un projet présenté par un participant (nom, slug, titre du projet, description, image, événements associés, etc.).
 * - Le champ "events" permet d'associer un même projet à plusieurs événements (multi-présentation).
 * - Ces données sont utilisées pour afficher dynamiquement la liste des projets, les pages projet, et les liens depuis le planning.
 *
 * Ce que ça change sur le site :
 * -----------------------------
 * - Toutes les infos sur les projets sont centralisées ici : plus besoin de modifier le composant pour ajouter, retirer ou corriger un projet.
 * - Pour ajouter un projet à un événement, il suffit d'ajouter son eventId dans le tableau "events".
 * - La liste des projets, les pages projet et les liens depuis le planning sont automatiquement mis à jour selon ce fichier.
 * - Facilite la maintenance, la cohérence et l'évolution du site (ajout d'un projet, correction d'une info, etc.).
 */

export const projets = [
  {
    name: 'Alice Martin',
    slug: 'alice-martin',
    project: 'Projet Alpha',
    short: 'Une solution innovante pour la gestion des ressources.',
    img: '/images/participants/2025-07/alice.jpg',
    description: 'Projet Alpha vise à révolutionner la gestion des ressources en entreprise grâce à une plateforme intelligente et collaborative.',
    events: ['2025-07']
  },
  {
    name: 'Bob Dupont',
    slug: 'bob-dupont',
    project: 'Projet Beta',
    short: 'Application mobile pour faciliter le networking.',
    img: '/images/participants/2025-07/bob.jpg',
    description: 'Projet Beta est une application mobile qui connecte les professionnels lors d\'événements pour maximiser les opportunités de networking.',
    events: ['2025-07']
  },
  {
    name: 'David Leroy',
    slug: 'david-leroy',
    project: 'Projet Delta',
    short: 'Plateforme de partage de connaissances.',
    img: '/images/participants/2025-07/david.jpg',
    description: 'Projet Delta propose une plateforme où les membres peuvent partager et organiser des ressources et des savoirs.',
    events: ['2025-07', '2025-02']
  }
  // ...ajoute d'autres projets ici
];