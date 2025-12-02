# Changelog

Tous les changements notables de ce projet seront documentés dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [1.0.0] - 2024-XX-XX

### Ajouté

#### Authentification

- Endpoint `POST /api/auth/register` pour l'inscription d'utilisateurs
- Endpoint `POST /api/auth/login` pour la connexion des utilisateurs
- Génération de tokens JWT avec expiration de 1 heure
- Hashage des mots de passe avec bcryptjs
- Vérification de l'unicité de l'email et du nom d'utilisateur
- Support des rôles utilisateur (user, admin)

#### Produits

- Endpoint `GET /api/products` pour récupérer la liste des produits
- Endpoint `PUT /api/products/:productId/stock` pour mettre à jour le stock d'un produit (admin uniquement)
- Validation du stock (ne peut pas être négatif)

#### Commandes

- Endpoint `POST /api/orders` pour créer une commande (utilisateur authentifié)
- Endpoint `GET /api/orders` pour récupérer toutes les commandes (admin uniquement)
- Endpoint `PUT /api/orders/:orderId/status` pour mettre à jour le statut d'une commande (admin uniquement)
- Endpoint `PUT /api/orders/:id/validate` pour valider une commande (admin uniquement)
- Endpoint `DELETE /api/orders/:id` pour supprimer une commande (admin uniquement)
- Support des statuts de commande : En attente, En cours de traitement, Expédiée, Délivrée, Annulée
- Support des méthodes de paiement : Carte bancaire, PayPal, Virement
- Support des méthodes de livraison : colissimo, chronopost
- Calcul automatique du total de la commande
- Intégration avec le service de notifications via le gateway

#### Administration

- Routes admin protégées par authentification et vérification du rôle admin
- Endpoint `GET /api/admin/orders` pour récupérer toutes les commandes
- Endpoint `GET /api/admin/products` pour récupérer tous les produits
- Endpoint `PUT /api/admin/orders/:id/status` pour mettre à jour le statut d'une commande
- Endpoint `PUT /api/admin/orders/:id/validate` pour valider une commande
- Endpoint `PUT /api/admin/products/:id/stock` pour mettre à jour le stock d'un produit

#### Sécurité

- Middleware d'authentification JWT (`authenticateToken`)
- Middleware de vérification du rôle admin (`isAdmin`)
- Protection CORS configurée
- Validation des données d'entrée

#### Base de données

- Modèle User avec hashage automatique des mots de passe
- Modèle Product avec timestamps automatiques
- Modèle Order avec gestion complète des commandes
- Connexion MongoDB via Mongoose

#### Logging

- Système de logging avec Winston
- Logs d'erreur et d'information
- Support du debug avec le module `debug`

#### Configuration

- Support de la configuration via variables d'environnement :
  - `PORT` (défaut: 5001)
  - `JWT_SECRET` pour la signature des tokens
  - Variables de connexion MongoDB

### Technique

- Framework Express.js
- Base de données MongoDB avec Mongoose
- Authentification JWT
- Hashage des mots de passe avec bcryptjs
- Logging avec Winston
- Intégration avec le gateway pour les microservices

---

## Types de changements

- **Ajouté** : pour les nouvelles fonctionnalités
- **Modifié** : pour les changements dans les fonctionnalités existantes
- **Déprécié** : pour les fonctionnalités bientôt supprimées
- **Supprimé** : pour les fonctionnalités supprimées
- **Corrigé** : pour les corrections de bugs
- **Sécurité** : en cas de vulnérabilités
