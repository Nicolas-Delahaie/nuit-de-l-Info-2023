import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";

import {createContext, useEffect, useState} from 'react';
import { Header, Footer } from './components';
import { Home, NotFound, Connect, KGames, News, ToTrain, WaterMelonGame , Inform} from './pages';

// ------- CONTEXTE -------
export const contexte = createContext();

export const Themes = {
  Standard: "standard",
  Eco: "eco",
  Minimal: "minimal",
  Fire: "fire",
};

let theme = Themes.Standard;


function App() {
  // -- FONCTIONS --
  /**
   * @brief Permet d'envoyer une requête à une API de manière pratique et unifiée.
   * @details Donne un resultat clair et directement utilisable grace a des messages d'erreur en francais
   *
   * @param url L'URL de l'API (obligatoire).
   * @param method La méthode HTTP de la requête, par exemple "POST" ou "PUT" (par défaut : "GET").
   * @param body Le corps de la requête. Un objet représentant les données à envoyer dans le corps de la requête (par défaut : undefined).
   *
   * @returns Un objet contenant les résultats de la requête avec les propriétés suivantes :
   *          - success : Un booléen indiquant si la requête a réussi.
   *          - statusCode : Le code de statut de la réponse HTTP.
   *          - [data] : Les données renvoyées par la requête.
   *          - [error] : Une chaîne de caractères représentant un message d'erreur en cas d'échec de la requête.
   *
   * @author Nicolas Delahaie (venir me voir pour questionnements)
   */
  const apiAccess = async ({
    url,
    method = "get",
    body = undefined,
  }) => {
    // -- CONSTANTES --
    const errorMessages = {
      400: "Requete mal formée",
      401: "Authentification necessaire",
      403: "Vous ne pouvez pas accéder à ces données",
      404: "La ressource n'existe pas",
      422: "Mauvais format de reponse",
      503: "Service indisponible (surcharge ou maintenance)",
      default: "Erreur de serveur"
    }

    // -- TRAITEMENT --
    console.log("Appel api : ", url);
    const res = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: body && JSON.stringify(body),
    })
      .catch(err => {
        return {
          success: false,
          statusCode: 500,
          erreur: errorMessages.default
        }
      })

    // -- RETOUR --
    if (res.ok) {
      // La requete a reussi
      return {
        success: true,
        statusCode: res.status,
        datas: res.status === 204 ? {} : await res.json(),      // On ne fait pas json() s il n y a pas de contenu
      }
    }
    else {
      // La requete a echoue
      return {
        success: false,
        statusCode: res.status,
        erreur: errorMessages[res.status] || errorMessages.default
      }
    }
  }

  // State
  const [theme, setTheme] = useState(Themes.Standard);
  const updateTheme = (newTheme) => {
    document.body.classList.remove(theme);
    setTheme(newTheme);
    document.body.classList.add(newTheme);

    // update the 'theme' key in localStorage
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // check if the 'theme' key exists in localStorage
    if (localStorage.getItem('theme')) {
      console.log(`theme-caca: ${localStorage.getItem('theme')}`);
      // get the theme from localStorage
      let theme = localStorage.getItem('theme');
      // check if the current theme exists in themes object
      if (Object.values(Themes).includes(theme)) {
        // if theme exists in themes object, update the theme in state
        updateTheme(theme);
      } else {
        // if theme does not exist in themes object, set the theme as standard
        updateTheme(theme);
      }
    } else {
      // if 'theme' key does not exist in localStorage, add it
      localStorage.setItem('theme', theme);
      console.log(`theme-pipi: ${localStorage.getItem('theme')}`);
    }
  }, []);

  return (
    <div id="App">
      <contexte.Provider value={{
        apiAccess,
        theme,
        updateTheme
      }}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/connect" element={<Connect />} />
            <Route exact path="/kgames" element={<KGames />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/to-train" element={<ToTrain />} />
            <Route exact path="/watermelongame" element={<WaterMelonGame />} />
            <Route exact path="/to-inform" element={<Inform />} />

            <Route path="*" element={<NotFound />} />
          </Routes >
        </BrowserRouter >
        <Footer />
      </contexte.Provider>
    </div>
  );
}

export default App;

