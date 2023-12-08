import { useContext } from "react";
import { contexte } from "../App";
import { Separateur } from "../components";

import "../styles/home.scss";





const icon = (iconColor = "#fff") => {

    return (
        <svg width="92" height="100" viewBox="0 0 92 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M82.5699 49.9995C91.1878 44.8513 94.1068 33.7227 89.07 24.9994C84.0334 16.276 72.9366 13.2399 64.1696 18.1293C64.0201 8.09217 55.8421 0 45.7693 0C35.6964 0 27.5181 8.09217 27.369 18.1301C18.6018 13.2406 7.50459 16.277 2.46823 25.0009C-2.56814 33.724 0.350597 44.8526 8.96899 50.0002C0.350842 55.1484 -2.56814 66.277 2.46847 75.0004C7.50508 83.724 18.6023 86.7601 27.3695 81.8704C27.5184 91.9083 35.6969 100.001 45.7698 100C55.8431 100 64.0208 91.9078 64.1699 81.8704C72.9371 86.7597 84.0346 83.7235 89.0704 74.9994C94.1071 66.2758 91.1878 55.1472 82.5699 49.9995ZM45.7693 66.8565C36.4597 66.8565 28.9126 59.3096 28.9126 49.9998C28.9126 40.6899 36.4597 33.1431 45.7693 33.1431C55.0787 33.1431 62.626 40.6899 62.626 49.9998C62.626 59.3096 55.079 66.8565 45.7693 66.8565Z" fill={iconColor}/>
        </svg>
    )
  }

  const iconSeperateur = (iconColor = "#fff") => {

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



function Home() {
    const { apiAccess } = useContext(contexte);

    const monicon = icon("#5A8F69");


    

    const plantIcon = iconSeperateur();

    

    return (
        <div id="home">

            <div className="main-header">
                <div className="blur"></div>
                <h2>
                    Suivez ceux qui agissent pour un impact durable 
                </h2>
                <h4>
                    Devenez un #Embusqué
                </h4>

                <button className="btn btn-primary" onClick="/kgames">Jouer au jeux ludiques</button>
            </div>

            <div className="first-section">
                <div className="text">
                    <h3>Découvrez, Apprenez, Restez Informé</h3>
                    <p>
                        Bienvenue sur notre site dédié à <strong>l'information</strong>. Explorez des contenus riches et diversifiés conçus pour satisfaire votre curiosité. Des articles informatifs aux guides pratiques, nous sommes là pour vous accompagner dans votre quête de connaissances.
Rejoignez-nous dans cette aventure d'apprentissage et restez informé
                    </p>
                </div>
                <div className="js">
                </div>
            </div>

            <div className="second-section">
                <div className="title">
                    <h3> {monicon}
                        Notre mission</h3>
                </div>
                <div className="text">
                    <p>
                        Notre mission est de sensibiliser les gens sur les enjeux climatiques et environnementaux. Nous voulons montrer que chacun peut agir à son échelle pour un monde plus durable.
                    </p>
                    <button className="btn btn-primary" onClick="window.location.href='https://reseauactionclimat.org/comprendre-urgence/'">En savoir plus </button>
                </div>
            </div>

            <Separateur icone={plantIcon} />

            <div className="third-section">

                <p>
                    METTRE LES NEWS 
                </p>
            </div>

                
        </div>


        
    )
}
export default Home;