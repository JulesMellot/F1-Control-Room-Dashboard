# 📊 F1 Control Room Dashboard

## 1. Introduction
Une application web immersive pour suivre en temps réel les courses de F1, avec visualisations dynamiques, analyses stratégiques et collaboration en direct.

## 2. Vision & Objectifs
- Offrir un tableau de bord centralisé (type F1 TV) pour passionnés et analystes.
- Proposer des outils de comparaison et simulation de stratégie.
- Permettre une expérience utilisateur modulable et collaborative.

## 3. Fonctionnalités Principales

### 3.1 Dashboard principal (MVP)
- Classement en temps réel (pilote, équipe, pneus, tours, temps total, position)
- Chronos sectoriels & meilleurs secteurs (couleurs violet/vert/blanc)
- Tableau des stints & usure pneus (tours par type + estimation)
- Timeline arrêts aux stands (qui, quand, gap)
- Gaps & intervalles (pilote devant/derrière, gap leader)
- Messages FIA & drapeaux (safety car, VSC, enquêtes, décisions)
- Conditions météo live (température piste/air, humidité, risque pluie)

### 3.2 Visualisation dynamique (v1)
- Mini-carte interactive du circuit avec positions GPS
- Ligne de progression animée
- Graphique de rythme tour par tour
- Heatmap des secteurs
- Barre d’évolution du classement

### 3.3 Analyse & Simulation (v2)
- Comparateur de pilotes (moyennes, pneus, vitesse, secteurs, historique)
- Simulateur de stratégie (undercut, projection fin de course, usure personnalisée)

### 3.4 Collaboration & Social (v3)
- Mode multi-utilisateurs & partage de vues
- Notes en direct & clips audio horodatés
- Interface split-view

### 3.5 UX & Design
- Dark mode par défaut
- Couleurs équipes officielles
- Animations fluides et widgets déplaçables

### 3.6 Bonus Features
- Alertes personnalisées (undercut, secteurs violets, radios pilotes)
- Replay tour spécifique (timeline)
- Mode courses historiques
- IA prédictive de stratégie
- Compteur d’incidents par pilote

## 4. Roadmap & Phases
| Phase | Durée estimée | Contenu |
|-------|---------------|---------|
| MVP   | 4 semaines    | Dashboard principal + météo + FIA |
| v1    | 3 semaines    | Visualisations dynamiques |
| v2    | 4 semaines    | Analyse & simulation |
| v3    | 3 semaines    | Collaboration & bonus |

## 5. Architecture & Tech Stack
- Backend: Node.js / Python (OpenF1 ingestion)
- Frontend: React.js + D3.js / Three.js
- Temps réel: WebSocket / Socket.IO
- Base de données: PostgreSQL / Redis (caching)

## 6. Installation & Lancement

### Backend
```bash
cd backend
# aucune dépendance à installer pour l'instant
npm start   # lance l'API sur http://localhost:3001
```

L'API sert des données d'exemple stockées dans `backend/sampleData.json` si la
connexion internet n'est pas disponible. Ce fichier contient un petit jeu de
standings ainsi que des messages FIA, la météo, les temps sectoriels, un
historique simplifié des arrêts aux stands, un aperçu des stints par
composé pneumatique et les meilleurs tours de chaque pilote.

### Frontend
Ouvrez `frontend/index.html` dans votre navigateur ou servez ce dossier avec un
serveur statique de votre choix. L'application interrogera l'API locale pour
afficher les données OpenF1.
Les tableaux incluent désormais les stints et les meilleurs tours de chaque
pilote. Une petite visualisation "Lap Chart" trace aussi l'évolution des positions.

## 7. Contribution
- Créer une issue pour bug/fonctionnalité
- Fork & PR
- Respecter le style guide

## 8. Licence
MIT © 2025
La page met à jour les données toutes les cinq secondes et affiche en violet les meilleurs temps dans chaque secteur.
