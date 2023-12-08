import React from 'react';

import UneNew from './UneNew';
import "../styles/Composants/news.scss";


function ListeNews(
    {nbNews,
    estConnecte}
) {
  // On récupère la liste des cactus
    const dataNews = {
        "listeNews": [
            {
                "id": 1,
                "question" : "Qu'est ce que le Lorem Ipsum?",
                "vocaldate" : "2021-11-20T00:00:00.000Z",
                "linkedin" : "https://www.linkedin.com/in/alexandre-roux-2b1b3b1b9/",
                "description" : "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500",
                "blob" : "https://thumbs.dreamstime.com/b/estampille-d-exemple-28420393.jpg",
                "connected" : "false",
            },
            {
                "id": 2,
                "question" : "Pourquoi l'utiliser?",
                "vocaldate" : "2021-11-20T00:00:00.000Z",
                "linkedin" : "https://www.linkedin.com/in/alexandre-roux-2b1b3b1b9/",
                "description" : "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500",
                "blob" : "https://thumbs.dreamstime.com/b/estampille-d-exemple-28420393.jpg",
                "connected" : "true",
            },
            {
                "id": 3,
                "question" : "D'ou vient il?",
                "vocaldate" : "2021-11-20T00:00:00.000Z",
                "linkedin" : "https://www.linkedin.com/in/alexandre-roux-2b1b3b1b9/",
                "description" : "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500",
                "blob" : "https://thumbs.dreamstime.com/b/estampille-d-exemple-28420393.jpg",
                "connected" : "true",
            },
            {
                "id": 4,
                "question" : "D'ou vient il?",
                "vocaldate" : "2021-11-20T00:00:00.000Z",
                "linkedin" : "https://www.linkedin.com/in/alexandre-roux-2b1b3b1b9/",
                "description" : "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500",
                "blob" : "https://thumbs.dreamstime.com/b/estampille-d-exemple-28420393.jpg",
                "connected" : "true",
            }
        ]
    }




  // Si il est connecté on affiche toutes les news connectées
  if (estConnecte) {
    var news = dataNews.listeNews.filter(function (news) {
        return news.connected == "true";
    });
  }
  // Sinon on affiche toutes les news
  else {
    var news = dataNews.listeNews.filter(function (news) {
        return news.connected == "false";
    });
  }

  

  return (
    <div className="listenews">
      {/* on affiche nbNews news */}
      {
        news.slice(0, nbNews).map((UneNews) => (
          <UneNew UneNews={UneNews} />
        ))
      }
    </div>

  );
}

export default ListeNews;
