import React, { useState } from 'react';
import '../styles/Pages/connect.css';

function Connect() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        // Simulez l'authentification avec des identifiants statiques
        const validUsername = 'user123';
        const validPassword = 'password123';

        if (username === validUsername && password === validPassword) {
            setMessage('Authentification réussie');

            // set the username to the localStorage
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('username', username);

            // redirect the user to the home page
            window.location.href = '/';

        } else {
            setMessage('Échec de l\'authentification');

            // set the username to the localStorage
            localStorage.setItem('isAuthenticated', 'false');
            localStorage.setItem('username', '');

            // reload the page
            window.location.reload();
        }
    };

    return (
        <div className="App">
        <h1>Page de Connexion</h1>
        <form>
            <label>Utilisateur:</label>
            <input
            type="text"
            placeholder="Entrez votre nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <label>Mot de passe:</label>
            <input
            type="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={handleLogin}>
            Se connecter
            </button>
        </form>
        <p>{message}</p>
        </div>
    );
}

export default Connect;
