export interface Profil {
  slug: string;
  name: string;
  img?: string;
  bio?: string;
  linkedin?: string;
  // Ajoute d'autres champs utiles pour le profil
}

export const profils: Profil[] = [
  {
    slug: 'alice-martin',
    name: 'Alice Martin',
    img: '/images/participants/alice.jpeg',
    bio: 'Entrepreneure passionnée par la gestion des ressources et l’innovation collaborative.',
    linkedin: 'https://linkedin.com/in/alice-martin'
  },
  {
    slug: 'bob-dupont',
    name: 'Bob Dupont',
    img: '/images/participants/bob.jpeg',
    bio: 'Développeur mobile et créateur d’outils pour le networking professionnel.',
    linkedin: 'https://linkedin.com/in/bob-dupont'
  },
  {
    slug: 'david-leroy',
    name: 'David Leroy',
    img: '/images/participants/david.jpeg',
    bio: 'Expert en partage de connaissances et animation de communautés.',
    linkedin: 'https://linkedin.com/in/david-leroy'
  }
  // ...ajoute d'autres profils ici
];