# Changelog

Tous les changements notables de ce projet seront documentés dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [1.0.0] - 2024-XX-XX

### Ajouté

- Route de santé `/health` pour vérifier l'état du gateway
- Proxy vers le service de notifications via `/notify`
- Proxy vers le service de gestion de stock via `/update-stock`
- Support de la configuration via variables d'environnement :
  - `GATEWAY_PORT` (défaut: 8000)
  - `GATEWAY_HOST` (défaut: 0.0.0.0)
  - `NOTIFI_SERVICE_URL` pour le service de notifications
  - `STOCK_SERVICE_URL` pour le service de gestion de stock
- Middleware de gestion d'erreurs global
- Gestion des erreurs 503 lorsque les services ne sont pas configurés
- Support du parsing JSON pour les requêtes entrantes

### Technique

- Utilisation d'Express.js comme framework
- Utilisation d'express-http-proxy pour le routage vers les microservices
- Configuration via dotenv

---

## Types de changements

- **Ajouté** : pour les nouvelles fonctionnalités
- **Modifié** : pour les changements dans les fonctionnalités existantes
- **Déprécié** : pour les fonctionnalités bientôt supprimées
- **Supprimé** : pour les fonctionnalités supprimées
- **Corrigé** : pour les corrections de bugs
- **Sécurité** : en cas de vulnérabilités
