


function Header() {
    return (
        <header id="header">
            <div className="logo">
                <img src="./../assets/icons/logo.jpg" alt="logo" />
            </div>
            <div className="menu">
                <div className="top-nav">
                    <div className="profile">
                        <img src="https://www.konami.com/games/eu/fr/assets/images/common/profile.png" alt="profile" />
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