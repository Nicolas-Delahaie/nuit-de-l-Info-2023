/**
 * @file react/src/components/SeFormerArticle.js
 * @description
 * @author Tom Planche
 */

// IMPORTS ===================================================================================================  IMPORTS
import "../styles/Composants/SeFormerArticle.scss";
import {contexte} from "../App";
import {useContext, useEffect, useState} from "react";
// END IMPORTS ==========================================================================================   END IMPORTS

// VARIABLES ================================================================================================ VARIABLES

// END VARIABLES ======================================================================================= END VARIABLES

// COMPONENT ================================================================================================= COMPONENT
const SeFormerArticle = ({
  paragraphe,
  lien,
  image,
  image_position_left = true
}) => {

  const {
    theme,
  } = useContext(contexte);

  let [isMinimal, setIsMinimal] = useState(theme !== 'minimal');

  useEffect(() => {
    setIsMinimal(theme !== 'minimal');
  }, [theme]);

  return (
    <div className="seFormerArticle"
           style={{
             flexDirection: image_position_left ? 'row' : "row-reverse"
           }}>
      {
        isMinimal && (
          <div className="seFormerArticle__image">
            <img src={image} alt="miamEnfant"/>
          </div>
        )
      }
      <div className={
        isMinimal ? `seFormerArticle__text ` : `seFormerArticle__text full`
      }
      >
        <p>{paragraphe}</p>
        <a href={lien}>Lire la suite <span>&rarr;</span></a>
      </div>
    </div>
  )
}

export default SeFormerArticle;
// END COMPONENT =========================================================================================== END COMPONENT

/**
 * End of file react/src/components/SeFormerArticle.js
 */
