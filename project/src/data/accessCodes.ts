/**
 * Mapping des codes d'accès vers les identifiants d'événements.
 * 
 * - La clé (ex: 'Juillet2025') est le code que l'utilisateur doit entrer dans le formulaire d'accès.
 * - La valeur (ex: '2025-07') est l'identifiant unique de l'événement correspondant.
 * 
 * À quoi ça sert ?
 * ----------------
 * Lorsqu'un utilisateur saisit un code d'accès dans la modale, le site vérifie ce mapping :
 *   - Si le code existe, il redirige l'utilisateur vers le dashboard de l'événement correspondant (/dashboard/:eventId).
 *   - Si le code n'existe pas, l'accès est refusé.
 * 
 * Ce système permet de :
 *   - Sécuriser l'accès aux dashboards des événements (chaque événement a son propre code).
 *   - Centraliser la gestion des codes d'accès dans un seul fichier facile à maintenir.
 *   - Ajouter ou retirer des événements simplement en modifiant ce fichier.
 * 
 * Changement sur le site :
 * ------------------------
 * - Plus besoin de modifier la logique dans les composants pour ajouter/supprimer un code : il suffit d'éditer ce fichier.
 * - Tous les accès aux événements sont désormais contrôlés par ce mapping unique.
 * - Cela améliore la sécurité et la maintenabilité du site.
 */

export const accessCodes: Record<string, string> = {
  'Juillet2025': '2025-07',
  'Fevrier2025': '2025-02',
  'Septembre2025': '2025-09',
  'Octobre2025': '2025-10',
  'Novembre2024': '2024-11'
  // Ajoute ici tous les codes nécessaires
};