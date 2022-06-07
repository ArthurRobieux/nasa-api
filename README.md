# Test technique React

## Versions utilisées

- `node v16.14.0`
- `npm 8.3.1`

## Commandes disponibles

- `npm install`
- `npm start`

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Objectifs

- Typer une partie de l'API avec Typescript
- Utiliser l'API "rovers" de la NASA pour afficher les données capturées par les rovers circulants sur Mars.

### Bonus

- Utiliser l'API "APOD" de la NASA pour afficher la photo d'astronomie du jour sur une nouvelle route.

## TODO

### Typage de l'API

- Compléter les typage `RoverType` dans le fichier `src/modules/api-client/types/nasa.ts`

### Affichage des données

- Afficher la liste des rovers dans le composant `Rovers`
- Pouvoir sélectionner un rover, puis afficher les informations associées en se servant du composant `Rover`
- Une fois un rover sélectionné, récupérer les photos associées et les afficher en utilisant le composant `Photo`

### Bonus

- Ajouter une route `/apod/` et afficher la photo du jour avec ses informations
