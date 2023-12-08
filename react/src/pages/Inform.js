import "../styles/Composants/Inform.css";
import Separator from "../components/Separateur";

function Inform() {
  const firstArticle = require("./../assets/img/inform_first_article.png");

  const testIcon = (iconColor = "#fff") => {
    return (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_35_151)">
          <path
            d="M50.9958 22.3531C50.472 21.8185 49.5316 21.8185 49.0078 22.3531C47.9744 23.4061 38.9155 32.7957 38.9155 38.5954C38.9155 44.3951 47.9744 53.7848 49.0078 54.8378C49.2706 55.1042 49.6281 55.2543 50.0018 55.2543C50.3754 55.2543 50.733 55.1042 50.9958 54.8378C52.0292 53.7848 61.0881 44.3951 61.0881 38.5954C61.0881 32.7957 52.0292 23.4061 50.9958 22.3531Z"
            fill={iconColor}
          />
          <path
            d="M43.0704 54.7843C38.9691 50.6812 25.9198 50.4452 24.4467 50.4309C24.1124 50.4309 23.7137 50.5757 23.4491 50.8403C23.1845 51.1013 23.0379 51.4643 23.0397 51.8397C23.054 53.3129 23.2882 66.3604 27.3894 70.4599C31.4907 74.5611 44.5364 74.7953 46.0114 74.8096C46.015 74.8096 46.0185 74.8096 46.0239 74.8096C46.0328 74.8096 46.0436 74.8096 46.0507 74.8096C46.8284 74.8239 47.472 74.1946 47.472 73.4205C47.472 73.2739 47.4506 73.1398 47.4112 73.0093C47.3612 70.358 46.9178 58.6281 43.0704 54.7843Z"
            fill={iconColor}
          />
          <path
            d="M76.5509 50.8421C76.2881 50.5793 75.9109 50.4291 75.5533 50.4327C74.0784 50.447 61.0291 50.683 56.9314 54.786C52.8301 58.8819 52.5941 71.9312 52.5816 73.4044C52.578 73.7816 52.7246 74.1392 52.9892 74.4056C53.2503 74.6666 53.606 74.8132 53.9761 74.8132C53.9797 74.8132 53.9833 74.8132 53.9868 74.8132C55.4636 74.7989 68.5093 74.5647 72.6088 70.4634C76.7118 66.364 76.9478 53.3164 76.9603 51.8433C76.9621 51.4625 76.8155 51.1031 76.5509 50.8421Z"
            fill={iconColor}
          />
          <path
            d="M50 0C22.4336 0 0.00357056 22.4318 0.00357056 49.9982C0.00357056 77.5664 22.4318 100 50 100C77.5682 100 99.9964 77.5664 99.9964 49.9982C99.9964 22.4318 77.5682 0 50 0ZM50 90.7159C27.5432 90.7159 9.277 72.4515 9.277 49.9982C9.277 27.5396 27.5432 9.27701 50 9.27701C72.4568 9.27701 90.7212 27.5414 90.7212 49.9982C90.7212 72.4515 72.455 90.7159 50 90.7159Z"
            fill={iconColor}
          />
        </g>
        <defs>
          <clipPath id="clip0_35_151">
            <rect width="100" height="100" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };

  const plantIcon = testIcon();

  const articlesChangementClimatique = [
    {
      img: require("./../assets/img/articleChangementClimatique1.jpg"),
      title: "Quels sont les impacts du changement climatique en France ?",
      date: "17-11-2023",
      link: "https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/",
    },
    {
      img: require("./../assets/img/articleChangementClimatique2.jpg"),
      title: "Biodiversité et climat : même combat",
      date: "05-12-2022",
      link: "https://reseauactionclimat.org/biodiversite-et-climat-meme-combat/",
    },
    {
      img: require("./../assets/img/articleChangementClimatique3.jpg"),
      title: "Climat et santé, des enjeux liés",
      date: "03-11-2022",
      link: "https://reseauactionclimat.org/climat-et-sante-des-enjeux-lies/",
    },
  ];

  const articlesRapportGiec = [
    {
      img: require("./../assets/img/articleRapportGiec1.jpg"),
      title:
        "Sinthèse de 6e rapport du GIEC: l'urgence climatique est là, les solution aussi",
      date: "20-03-2023",
      link: "https://reseauactionclimat.org/synthese-du-rapport-du-giec-lurgence-climatique-est-la-les-solutions-aussi/",
    },
    {
      img: require("./../assets/img/articleRapportGiec2.jpg"),
      title:
        "6e rapport du GIEC: quelles solutions face au changement climatique ?",
      date: "04-04-2022",
      link: "https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/",
    },
    {
      img: require("./../assets/img/articleRapportGiec3.jpg"),
      title:
        "6e rapport du GIEC: quelles sont les conséquences réelles du changement climatique ?",
      date: "28-02-2022",
      link: "https://reseauactionclimat.org/6e-rapport-du-giec-quelles-sont-les-consequences-reelles-du-changement-climatique/",
    },
  ];

  return (
    <div id="inform">
      <div className="firstArticle">
        <div className="datas">
          <h1>
            Réussir la transition <br /> écologique
          </h1>
          <p>
            Les embusqués, nous sommes résolument engagés dans la lutte contre
            le réchauffement climatique et la dégradation des ressources. Sur le
            terrain, nous mobilisons les citoyens, les acteurs économiques et
            les territoires afin de leur donner les moyens de progresser. Face à
            l’urgence, nous nous fixons des objectifs ambitieux et appelons à
            une mobilisation générale : il faut faire plus vite.
          </p>
        </div>
        <img src={firstArticle} alt="agriculteurs heureux" />
      </div>
      <Separator icone={plantIcon} />
      <div className="separateArticles">
        <div className="impacteClim articles">
          <h2 className="titre">Impact du changement climatique</h2>
          <h3 className="sousTitre">
            Comprendre les conséquences du changement climatique
          </h3>
          <div className="content">
            {articlesChangementClimatique.map((item, index) => {
              return (
                <div className="article">
                  <div className="imgContainer">
                    <img src={item.img} alt="article img" />
                  </div>
                  <div className="datas">
                    <div className="date">{item.date}</div>
                    <a href={item.link}>
                      <div className="title">{item.title}</div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="savoirPlus">
            <a href="https://reseauactionclimat.org/urgence-climatique/">
              En savoir plus
            </a>
            <div className="arrow">→</div>
          </div>
        </div>
        <div className="rapportGiec articles">
          <h2 className="titre">Rapport du GIEC</h2>
          <h3 className="sousTitre">Les contenus du dernier rapport du GIEC</h3>
          <div className="content">
            {articlesRapportGiec.map((item, index) => {
              return (
                <div className="article">
                  <div className="imgContainer">
                    <img src={item.img} alt="article img" />
                  </div>
                  <div className="datas">
                    <div className="date">{item.date}</div>
                    <a href={item.link}>
                      <div className="title">{item.title}</div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="savoirPlus">
            <a href="https://reseauactionclimat.org/urgence-climatique/">
              En savoir plus
            </a>
            <div className="arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Inform;
