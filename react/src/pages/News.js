

import "../styles/Composants/news.scss";
import { ListeNews } from "../components";

function News() {

    return (
        <div id="news">
            <h1>News</h1>
            <ListeNews nbNews={40} estConnecte={true} />
        </div>
    )
}
export default News;