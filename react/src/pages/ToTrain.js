

import {SeFormerArticle, Separateur} from "../components";
import "../styles/Pages/ToTrain.scss";

import babaLogo from "../assets/img/logo-baba.png"
import fresqueClimatLogo from "../assets/img/logo-fresque-climat.png"
import fresqueNumeriqueLogo from "../assets/img/logo-fresque-numerique.png"

const testIcon = (iconColor = "#fff") => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_35_151)">
            <path
              d="M50.9958 22.3531C50.472 21.8185 49.5316 21.8185 49.0078 22.3531C47.9744 23.4061 38.9155 32.7957 38.9155 38.5954C38.9155 44.3951 47.9744 53.7848 49.0078 54.8378C49.2706 55.1042 49.6281 55.2543 50.0018 55.2543C50.3754 55.2543 50.733 55.1042 50.9958 54.8378C52.0292 53.7848 61.0881 44.3951 61.0881 38.5954C61.0881 32.7957 52.0292 23.4061 50.9958 22.3531Z"
              fill={iconColor}/>
            <path
              d="M43.0704 54.7843C38.9691 50.6812 25.9198 50.4452 24.4467 50.4309C24.1124 50.4309 23.7137 50.5757 23.4491 50.8403C23.1845 51.1013 23.0379 51.4643 23.0397 51.8397C23.054 53.3129 23.2882 66.3604 27.3894 70.4599C31.4907 74.5611 44.5364 74.7953 46.0114 74.8096C46.015 74.8096 46.0185 74.8096 46.0239 74.8096C46.0328 74.8096 46.0436 74.8096 46.0507 74.8096C46.8284 74.8239 47.472 74.1946 47.472 73.4205C47.472 73.2739 47.4506 73.1398 47.4112 73.0093C47.3612 70.358 46.9178 58.6281 43.0704 54.7843Z"
              fill={iconColor}/>
            <path
              d="M76.5509 50.8421C76.2881 50.5793 75.9109 50.4291 75.5533 50.4327C74.0784 50.447 61.0291 50.683 56.9314 54.786C52.8301 58.8819 52.5941 71.9312 52.5816 73.4044C52.578 73.7816 52.7246 74.1392 52.9892 74.4056C53.2503 74.6666 53.606 74.8132 53.9761 74.8132C53.9797 74.8132 53.9833 74.8132 53.9868 74.8132C55.4636 74.7989 68.5093 74.5647 72.6088 70.4634C76.7118 66.364 76.9478 53.3164 76.9603 51.8433C76.9621 51.4625 76.8155 51.1031 76.5509 50.8421Z"
              fill={iconColor}/>
            <path
              d="M50 0C22.4336 0 0.00357056 22.4318 0.00357056 49.9982C0.00357056 77.5664 22.4318 100 50 100C77.5682 100 99.9964 77.5664 99.9964 49.9982C99.9964 22.4318 77.5682 0 50 0ZM50 90.7159C27.5432 90.7159 9.277 72.4515 9.277 49.9982C9.277 27.5396 27.5432 9.27701 50 9.27701C72.4568 9.27701 90.7212 27.5414 90.7212 49.9982C90.7212 72.4515 72.455 90.7159 50 90.7159Z"
              fill={iconColor}/>
        </g>
        <defs>
            <clipPath id="clip0_35_151">
                <rect width="100" height="100" fill="white"/>
            </clipPath>
        </defs>
    </svg>
  )
}

const articles = [
  {
    paragraphe: "La Fresque du Climat est un outil neutre et objectif. Il se fonde sur les données issues des rapports scientifiques du GIEC (Groupe d’experts intergouvernemental sur l’évolution du climat) dont les recommandations orientent les décisions politiques et économiques à l’échelle mondiale.\n" +
      "\n" +
      "L’atelier mobilise l’intelligence collective pour sensibiliser les participants aux changements climatiques. Son approche ludique et pédagogique permet à tous les publics de s’approprier le sujet des changements climatiques et vise à éviter une descente verticale du savoir. Durant l’atelier, les participants relient les liens de cause à effets et intègrent les enjeux climatiques dans leur globalité.\n" +
      "\n" +
      "Sans culpabiliser et par une compréhension partagée des mécanismes à l’œuvre, la Fresque engage les individus dans un échange constructif. A l’issue de l’atelier, les participants sont motivés et outillés pour agir à leur niveau.",
    lien: "https://fresqueduclimat.org/",
    image: fresqueClimatLogo
  },
  {
    paragraphe: "La Fresque du Numérique est un atelier ludique et collaboratif d'une demi-journée avec une pédagogie similaire à celle de La Fresque du Climat. Le but de ce \"serious game\" est de sensibiliser et former les participant·es aux enjeux environnementaux du numérique.\n" +
      "\n" +
      "L'atelier vise aussi à expliquer les grandes lignes des actions à mettre en place pour évoluer vers un numérique plus soutenable, puis à ouvrir des discussions entre les participant·es sur le sujet. Véritable outil de team building, cet atelier permet de se rassembler pour apprendre ensemble. Il est avant tout destiné à être réalisé en présentiel, mais un format distanciel est aussi possible.",
    lien: "https://fresqueduclimat.org/inscription-formation/",
    image: fresqueNumeriqueLogo
  },
  {
    paragraphe: "Développez vos connaissances pour votre vie personnelle et citoyenne grâce à des contenus clairs et accessibles, réalisés à partir de constats scientifiques.Explorez nos chapitres de formation qui vous permettront de mieux comprendre les risques liés au réchauffement climatique d’origine humaine et les conséquences possibles de ce changement.Découvrez des stratégies d’adaptation et d’atténuation.",
    lien: "https://climat.cned.fr/formations/",
    image: babaLogo
  },
]


function ToTrain() {

    const plantIcon = testIcon();
    const image = require('./../assets/img/miamEnfant.png');

    return (
      <div id="to-train">
        <div className="presentation">
          <div className="left">
            <h1>Sensibiliser autours de nous.</h1>

            <p>
              Développez vos connaissances pour votre vie personnelle et citoyenne grâce à des contenus clairs et accessibles, réalisés à partir de constats scientifiques.
              Explorez nos chapitres de formation qui vous permettront de mieux comprendre les risques liés au réchauffement climatique d’origine humaine et les conséquences possibles de ce changement.Découvrez des stratégies d’adaptation et d’atténuation.
            </p>
          </div>
          <div className="right">
            <img src={image} alt="miamEnfant"/>
            <div className="filler">

            </div>
          </div>
        </div>

        <Separateur icone={plantIcon} />

        <div className="articles">
          {
            articles.map((article, index) => {
              return (
                <SeFormerArticle
                  key={index}
                  paragraphe={article.paragraphe}
                  lien={article.lien}
                  image={article.image}
                  image_position_left={index % 2 !== 0}
                />
              )
            })
          }
        </div>
      </div>
    )
}

export default ToTrain;
