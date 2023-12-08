import { Link } from 'react-router-dom'
import "../styles/Composants/uneNews.scss";
import {useContext, useEffect, useState} from "react";
import {contexte} from "../App";


function UneNews(UneNews) {

    const {
      theme,
    } = useContext(contexte);

    let [isMinimal, setIsMinimal] = useState(theme !== 'minimal');

    useEffect(() => {
      setIsMinimal(theme !== 'minimal');
    }, [theme]);


    return (
        <div className="unenews">
            <div className="profil" id = {UneNews.UneNew.id}>
              <a href={UneNews.UneNew.linkedin} target="_blank" rel="noreferrer">Linkedin</a>
            </div>
            <div className="text">
                <h2 id='quest'>{UneNews.UneNew.question}</h2>
                <p id='desc'>{UneNews.UneNew.description}</p>
                {/* On formalise la date de la news UneNews.vocaldate en 2021-11-20T00:00:00.000Z => 20/11/2021 */}
                <p id="blog">
                {UneNews.UneNew.blog}
                </p>
                <p id="date" >{UneNews.UneNew.vocalDate}</p>
            </div>

        </div>
    )
}

export default UneNews
