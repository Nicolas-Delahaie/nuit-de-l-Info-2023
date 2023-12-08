/**
 * @file react/src/components/SeFormerArticle.js
 * @description
 * @author Tom Planche
 */

// IMPORTS ===================================================================================================  IMPORTS
import "../styles/Composants/SeFormerArticle.scss";
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

  return (
    <div className="seFormerArticle"
           style={{
             flexDirection: image_position_left ? 'row' : "row-reverse"
           }}>
      <div className="seFormerArticle__image">
        <img src={image} alt="image" />
      </div>
      <div className="seFormerArticle__text"
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
