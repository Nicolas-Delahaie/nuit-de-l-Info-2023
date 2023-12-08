

function Header() {

    const logo = require('./../assets/icons/logo.jpg');

    return (
        <header id="header">
            <div className="logo">
            <img width="50" height="50" src={logo} alt="user-male-circle--v1"/>
            </div>
            <div className="menu">
                <div className="top-nav">
                    <div className="profile">
                        <img width="50" height="50" src="https://img.icons8.com/ios/500/user-male-circle--v1.png" alt="user-male-circle--v1"/>
                        <p>Mathis.h11</p>
                    </div>
                    <div className="consommation">
                        <p>Consommation de la page :</p>
                        <div className="consommation-info">
                            <p>2,02 gCO2</p>
                            <p>4,02 cl</p>
                        </div>
                    </div>
                </div>
                <div className="bottom-nav">
                    <ul>
                        <li><a href="/">ACCUEIL</a></li>
                        <li><a href="/toInform">S'INFORMER</a></li>
                        <li><a href="/totrain">SE FORMER</a></li>
                        <li><a href="/news">QUOI DE NEUF ?</a></li>
                        <li><a href="/kgames">JEUX LUDIQUES</a></li>
                        <select name="themeSelector" id="themeSelector">
                            <option value="standard">Standard</option>
                            <option value="eco">Eco</option>
                            <option value="minimal">Minimal</option>
                            <option value="theme1">Theme 1</option>
                        </select>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;