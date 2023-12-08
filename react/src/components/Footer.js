function Footer() {
    const logo = require('./../assets/icons/logo.jpg');
    return (
        <footer id="footer">
            <div className="top-footer">
                <div className="information">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="text">
                        <p>Chez les embusqués , nous sommes engagés envers la durabilité. De la gestion des déchets à notre approche "green" en conception, chaque aspect de notre événement vise à minimiser notre impact sur l'environnement. Rejoignez-nous dans la création d'un monde numérique durable, où l'innovation rencontre la responsabilité écologique.</p>
                    </div>
                </div>
                <div className='structures'>
                    <div className='pages'>
                        <h3>Pages</h3>
                        <ul>
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/toInform">S'informer</a></li>
                            <li><a href="/totrain">Se former</a></li>
                            <li><a href="/news">Quoi de neuf ?</a></li>
                        </ul>
                    </div>

                    <div className='autres'>
                        <h3>Autres</h3>
                        <ul>
                            <li><a href="/kgames">Jeux ludiques</a></li>
                            <li><a href="/connect">Se connecter</a></li>
                            <li><a href="https://reseauactionclimat.org/faire-un-don/">Faire un don</a></li>
                        </ul>

                    </div>
                </div>
                </div>
            <div className="middle-footer">
                @2023 - Nuit de l'Info - Les embusqués - Tous droits réservés
            </div>

        </footer>
    )
}
export default Footer;