/**
 * Liste centralisée des événements Apéri-TIGcRE.
 *
 * À quoi servent ces données ?
 * ----------------------------
 * - Chaque objet représente un événement avec toutes ses informations (date, lieu, type, capacité, etc.).
 * - Les champs optionnels (participationType, theme, address, title) permettent d'afficher des détails personnalisés dans le dashboard utilisateur.
 * - Ces données sont utilisées partout sur le site : calendrier, dashboard, accès sécurisé, affichage des infos événement, etc.
 *
 * Ce que ça change sur le site :
 * -----------------------------
 * - Toutes les infos événementielles sont centralisées ici : plus besoin de dupliquer ou de modifier plusieurs fichiers.
 * - Pour ajouter, modifier ou supprimer un événement, il suffit d'éditer ce fichier.
 * - Le calendrier, le dashboard et les accès utilisent tous cette source unique, ce qui garantit la cohérence des données.
 * - Facilite la maintenance et l'évolution du site (ajout d'un champ, correction d'une info, etc.).
 */

export interface Event {
  id: string;
  date: string;
  time: string;
  location: string;
  city: string;
  type: 'presentiel' | 'centre' | 'hybride';
  capacity: number;
  registered: number;
  status: 'open' | 'full' | 'closed';
  // Champs optionnels pour le dashboard :
  participationType?: string;
  theme?: string;
  address?: string;
  title?: string;
}

export const events: Event[] = [
  {
    id: '2025-07',
    date: '3 Juillet 2025',
    time: '19h00 - 22h00',
    location: 'Rooftop Le Perchoir',
    city: 'Paris',
    type: 'presentiel',
    capacity: 80,
    registered: 0,
    status: 'open',
    participationType: 'presentiel',
    theme: 'Innovation & Entrepreneuriat',
    address: '14 Rue Crespin du Gast, 75011 Paris',
    title: 'Apéri-TIGcRE Paris'
  },
  {
    id: '2025-09',
    date: '4 Septembre 2025',
    time: '19h00 - 22h00',
    location: 'Centre Coworking Alsace',
    city: 'Strasbourg',
    type: 'centre',
    capacity: 30,
    registered: 0,
    status: 'open'
  },
  {
    id: '2025-10',
    date: '9 Octobre 2025',
    time: '19h00 - 22h00',
    location: 'Hybride (Paris & Strasbourg & Visio)',
    city: '',
    type: 'hybride',
    capacity: 100,
    registered: 0,
    status: 'open'
  }
  // ...ajoute d'autres événements ici
];