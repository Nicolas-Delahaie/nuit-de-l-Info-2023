# Nuit_de_l_Info_2023
Projet dans le cadre de la Nuit de l'Info du 7-8 décembre 2023.

## Defis réussis
### Site principal - K Games
<u>Sujet :</u>
Site principal accueillant toutes les autres fonctionnalités
<br>
<u>Accessible :</u>
Dans la section "Autres"-"Se Connnecter" ou depuis l'url "/connect". Entrer user123 et password123 pour se connnecter

### Konami code
<u>Sujet :</u>
Jeux caché de la pasteque.
<br>
<u>Accessible :</u>
En tappant Haut Haut Bas Bas Gauche Droit Gauche Droit, B, A

### Vis ma vie
<u>Sujet :</u>
API permettant de transmettre un vocal en texte avec GPT. Le site affiche les paragraphes générés par l'API par rapport à des textes donnés.
<br>
<u>Accessible :</u>
Depuis la section "News" sur la page d'accueil

### Jeu theme
<u>Sujet :</u>
Faire plusieurs themes



## Défis ratés
### API de compression d'image
<u>Sujet :</u>
Ce défi consistait à fabriquer une API permettant de récupérer n'importe quelle image / vidéo par son url, de manière compressée avec le meilleur taux qualité/taille en fonction des paramètres souhaités.
<br>
<u>Causes echec :</u>
Ce défi a été un echec car sélctionnné par une équipe de 2 (Nicolas et Colas) alors qu'il aurait mieux fallu en avoir qu'un dessus. Résltat : Nicolas a accepté d'autre travail et Colas s'est retrouvé tout seul avec un framework qu'il ne connaissait pas bien (Laravel), ne rendant aucun projet abouti.

### Easter Egg
<u>Sujet :</u>
Le but de ce défi était de mettre en place des EasterEgg dans l'application en rapport avec l'écologie. Mathis L et Guillaume y ont été attribués. Leur idée retenue a été de faire apparaitre des modifications de l'interface lorsque l'utilisateur se trompait trop de fois comme sur le mot de passe par exemple.  
<br>
<u>Causes echec :</u>
Manque de temps pour adapter l'animation au site principal et manque de connaissances sur react qui ont limité grandement la vitesse d'avancement.

### Site principal - K Games
<u>Sujet :</u>
Le but etait de faire un jeu KGames sur le theme de l'écologie.
<br>
<u>Causes echec :</u>
Manque de connaissance technique. Trop ambitieux avec beaucoup de POC qui n'ont pas pu être implémentés.



## Lancement React
- aller dans le dossier react
- npm install
- npm start

## Lancement Laravel
- lancer xamp (ou autre)
- Aller DANS le dossier laravel
- composer install
- php artisan key:generate
- configurer le .env généré avec les identifiants de sa bdd xamp
- php artisan migrate
- php artisan serve