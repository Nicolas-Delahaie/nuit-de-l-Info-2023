import React, { useEffect } from 'react';

import UneNew from './UneNew';
import "../styles/Composants/news.scss";
import { useContext } from 'react';
import { useState } from 'react';
import { contexte } from '../App';
import { json } from 'react-router';



function ListeNews(
    {nbNews,
    estConnecte}
) {


    const [news, setNews] = useState(undefined);

    
    const {
      apiAccess
    } = useContext(contexte);

    async function recupereDonnes_connect() {
      const res = await apiAccess({
        url: 'https://embusques.alwaysdata.net/api/donnes-react-connecte',
      });

      if (res.success) {
        setNews(res.datas);
        
      } else {
      }
    }

    async function recupereDonnes_nonconnect() {
      const res = await apiAccess({
        url: 'https://embusques.alwaysdata.net/api/donnes-react-non-connecte',
      });

      if (res.success) {
        setNews(res.datas);
        console.log(JSON.stringify(res.datas));
      }
    }

  useEffect(() => {
    // Si il est connecté on affiche toutes les news connectées
    if (estConnecte) {
      recupereDonnes_connect();
    }
    // Sinon on affiche toutes les news
    else {
      recupereDonnes_nonconnect();
    }
  }, []);

  useEffect(() => {
    console.log(news)
  }, [news])

  return (
    <div className="listenews">
      {
        news && news.map((uneNew) => {
            console.log("TEST ALED")
            return <UneNew  UneNew={uneNew} />
        })
      }
    </div>

  );
}

export default ListeNews;
