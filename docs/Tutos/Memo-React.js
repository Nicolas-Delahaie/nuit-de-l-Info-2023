// -- FONCTIONS SIMPLES -- //
import { useState, useEffect } from 'react';
const [nomVar, setVar] = useState(valeur); // créé une variable dynamique, modifiable avec "setVar"
useEffect(() => { /* Callback appelée a chaque nouveau rendu de la page*/ });
useEffect(() => { /* Callback appelée a chaque modification d'un useState*/ }, [nomVar]);

liste.filter((objet) => { objet.attribut == "ValeureAttendue" }) // filtre la liste en fonction de la fonction passée en paramètre
setTimeout(() => {/*FONCTION*/ }, 1000); // Instaure un timeout de 1 seconde a la fonction


// -- SPECIALITES REACT -- //
// Passage de parametre a une page
function pageParent() {
    return (<Composant2 param1={param1} fonction1={fonction1} />)   // param est mis en parametre de ce composant);
}
function pageEnfant(params) {
    const param1 = params.param1; // récupère la variable "param1" entrée en paramètres
}
function Composant3({ param1, param2, fonction1, fonction2 }) {
    // récupère les variables "param1" et "param2" entrées en paramètres
    // récupère egalement les fonctions que l'enfant va utiliser pour modifier les variables du parent
}

// Template conditionnel
function clic() {
    return (objet && <h1>{objet.titre}</h1>); // Retourne seulement si objet est défini
}

// Appel de fonction a l evenement
function clic() {
    return (<button onClick={(event) => fonction(event)}>Contenu</button>); // fonction appelée lors du clic
}

//Importation / exportation
function aImporter() { };                       // Defintion de la fonction
export default aImporter;                       // exporte la fonction aExporter en dehors du fichier
import aImporter from './aImporter';            // importe la fonction aImporter depuis le fichier aImporter.js

//Routes et liens
//npm install react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Dans App.js
function App() {
    return (
        <Router>
            <ComposantPermanent />
            <Switch>
                <Route exact path="/">
                    <ComposantRacine />
                </Route>
                <Route path="/patates">
                    <ComposantPatate />
                </Route>
                <Route exact path="/patates/:id">
                    <ComposantPatate />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}
function ComposantPatate() {
    const { id } = useParams(); // Récupère le paramètre "id" de la route
    return (
        <div>Patate {id}</div>
    )
}

import { Link } from 'react-router-dom';
function navBar() {
    return (
        <div>
            <h1>Coucou</h1>
            <Link to="/">Accueil</Link>
            <Link to="/patates/${id}">Patate</Link>
        </div>
    );
}

import { useHistory } from "react-router-dom";
const history = useHistory();
history.go(-1);     // Retourne a la page precedente
history.push('/');  // Redirige vers la page racine

// Anulation de promesse
const abortCont = new AbortController();    // Crée un signal d'annulation
fetch(url, { signal: abortCont.signal });   // Ajoute le signal d'annulation a la requete
return () => abortCont.abort();             // Annule la requete lors du prochain rendu

// Formulaires
function formulaire() {
    const [nom, setNom] = useSTate("");
    const [espece, setEspece] = useSTate("");

    function creationPatate(e) {
        e.preventDefault();
        const patate = { nom, espece };

        fetch('http://localhost:8000/patates', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(patate)
        }).then(() => {
            console.log("Patate ajoutée");
        })
    }

    return (
        <div>
            <h2>Nouvelle patate</h2>
            <form onSubmit={creationPatate}>
                <label>Nom :</label>
                <input type="text"
                    required
                    value={nom}
                    onChange={(e) = setNom(e.target.value)} />
                <label>Espece :</label>
                <input type="text"
                    required
                    value={espece}
                    onChange={(e) = setEspece(e.target.value)} />
            </form>
        </div>
    )
}