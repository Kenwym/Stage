# Apéri-TIGcRE – Plateforme de gestion d’événements et projets

Bienvenue sur la plateforme Apéri-TIGcRE !  
Ce projet React permet de gérer des événements, d’afficher le planning des participants, et de présenter les projets associés à chaque intervenant.

---

## 🖥️ Fonctionnalités principales

- **Dashboard utilisateur** avec planning des passages pour chaque événement.
- **Accès sécurisé** par code unique pour chaque événement.
- **Pages projets individuelles** pour chaque intervenant ayant un projet.
- **Page mère** listant tous les projets présentés.
- **Ajout/suppression facile** d’événements, de participants et de projets via des fichiers de données.

---





## 🛠️ Tutoriel : Gérer les événements et projets

### ➕ Ajouter un événement

1. **Dans `UserDashboard.tsx`**  
   Ajoute une entrée dans le mapping `eventPitchers` :
   ```js
   '2025-12': [
     { name: 'Gabriel Halioui', time: '19h20', project: 'Accueil', img: '/images/participants/2025-12/arbre.jpg' },
     // autres participants...
   ],
   ```
2. **Dans `UserDashboardPage.tsx`**  
   Ajoute l’événement dans `eventDataMap` :
   ```js
   '2025-12': {
     name: 'Utilisateur',
     email: 'utilisateur@email.com',
     participationType: 'presentiel',
     eventDetails: {
       title: 'Apéri-TIGcRE Paris (Décembre)',
       date: '10 Décembre 2025',
       time: '19h00 - 22h00',
       theme: 'Fin d\'année',
       location: 'Paris',
       address: 'Adresse à venir'
     }
   },
   ```
3. **Dans `AccessModal.tsx`**  
   Ajoute le code d’accès dans `codeToEventId` :
   ```js
   'Decembre2025': '2025-12',
   ```

### ➖ Supprimer un événement

- Supprime l’entrée correspondante dans les trois fichiers ci-dessus.

---

### 👤 Ajouter ou supprimer un participant à un événement

- **Ajouter** :  
  Dans `UserDashboard.tsx`, ajoute une entrée dans le tableau de l’événement voulu :
  ```js
  { name: 'Marie Curie', time: '20h20', project: 'Projet Radium', img: '/images/participants/2025-07/marie.jpg', slug: 'marie-curie' }
  ```
  - Le champ `slug` est facultatif : il permet de lier à une page projet (voir ci-dessous).

- **Supprimer** :  
  Retire simplement l’entrée du tableau.

---

### 📄 Ajouter une page de présentation de projet

1. **Dans `src/data/projets.ts`**  
   Ajoute une entrée :
   ```js
   {
     name: 'Marie Curie',
     slug: 'marie-curie',
     project: 'Projet Radium',
     date: '2025-07',
     short: 'Découverte scientifique innovante.',
     img: '/images/participants/2025-07/marie.jpg',
     description: 'Projet Radium vise à...'
   }
   ```
2. **Le champ `slug`** doit être identique dans `eventPitchers` et dans `projets.ts`.

---

### 🗑️ Supprimer un participant ou une page projet

- **Dans `UserDashboard.tsx`** : supprime la personne du tableau de l’événement.
- **Dans `projets.ts`** : supprime l’entrée du projet.

---

### 🖼️ Ajouter une image

- Place l’image dans `public/images/participants/année-mois/nom.jpg`.
- Utilise le chemin relatif dans les champs `img`.

---

### 📝 Exemple d’ajout complet

1. **Dans `UserDashboard.tsx`** (dans le bon événement) :
   ```js
   { name: 'Jean Dupuis', time: '20h30', project: 'Projet Lambda', img: '/images/participants/2025-07/jean.jpg', slug: 'jean-dupuis' }
   ```
2. **Dans `src/data/projets.ts`** :
   ```js
   {
     name: 'Jean Dupuis',
     slug: 'jean-dupuis',
     project: 'Projet Lambda',
     date: '2025-07',
     short: 'Un projet sur la collaboration.',
     img: '/images/participants/2025-07/jean.jpg',
     description: 'Projet Lambda propose une nouvelle façon de collaborer en équipe...'
   }
   ```

---

## 💡 Astuces

- Pour qu’un nom soit **cliquable** dans le planning, il doit avoir un champ `slug` dans `eventPitchers` **et** une entrée correspondante dans `projets.ts`.

---

