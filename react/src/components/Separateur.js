/**
 * @file react/src/components/Separateur.js
 * @description
 * @author Tom Planche
 */

// IMPORTS ===================================================================================================  IMPORTS
import "../styles/Composants/Separateur.scss";
// END IMPORTS ==========================================================================================   END IMPORTS

// VARIABLES ================================================================================================ VARIABLES
/**
 * Séparateur
 *
 *
 * @param icone obligatoire, SVG, IMG, etc.
 * @param height hauteur du composant, par défaut 20vh
 * @param width largeur du composant, par défaut 100%
 * @param iconPadding padding de l'icone, par défaut 2rem
 * @param bgColor couleur de fond, par défaut hotpink
 * @param lineColor couleur de la ligne, par défaut #fff
 * @param lineSize taille de la ligne, par défaut 4px
 *
 * @return {JSX.Element}
 * @constructor
 */
const Separateur = ({
  icone,
  height = "20vh",
  width = "100%",
  iconPadding = "2rem",
  bgColor = "#5a8f69",
  lineColor = "#fff",
  lineSize = "4px",
}) => {


    return (
        <div className="separateur" style={{
            backgroundColor: bgColor,
            height: height,
            width: width
          }}
        >
            <div className="separateur__ligne left" style={{
                backgroundColor: lineColor,
                height: lineSize
              }}
            ></div>
            <div className="separateur__icone" style={{
                padding: iconPadding
              }}
            >{icone}</div>
            <div className="separateur__ligne right" style={{
                backgroundColor: lineColor,
                height: lineSize
              }}
            ></div>
        </div>
    )
}

export default Separateur;
// END VARIABLES ======================================================================================= END VARIABLES


/**
 * End of file react/src/components/Separateur.js
 */
