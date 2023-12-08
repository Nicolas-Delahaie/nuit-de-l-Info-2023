import { Link } from 'react-router-dom'
import "../styles/Composants/uneNews.scss";


function UneNews({UneNews}) {
    return (
        <div className="unenews" id={UneNews.id}>
            <div className="profil">
                {/* blob  */}
                <img src={UneNews.blob} alt="blob" />
                <a href={UneNews.linkedin} target="_blank" rel="noreferrer">Linkedin</a>
            </div>
            <div className="text">
                <h2 id='quest'>{UneNews.question}</h2>
                <p id='desc'>{UneNews.description}</p>
                {/* On formalise la date de la news UneNews.vocaldate en 2021-11-20T00:00:00.000Z => 20/11/2021 */}
                <p id='date'>{UneNews.vocaldate.slice(8,10)}/{UneNews.vocaldate.slice(5,7)}/{UneNews.vocaldate.slice(0,4)}</p>
            </div>

        </div>
    )
}

export default UneNews