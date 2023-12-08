import React, { useState } from 'react';

const MovingImage = () => {
  // État pour suivre la position horizontale de l'image
  const [position, setPosition] = useState(0);

  // Fonction pour faire avancer l'image
  const moveImage = () => {
    let NB_PIXEL = 50;
    // Augmente la position actuelle de 50 pixels à chaque clic
    for (let index = 0; index < 100; index++) {
        setPosition(position - NB_PIXEL*index);
    }
    
  };

  return (
    <div>
      <h2>Image qui avance</h2>
      {/* Style inline pour déplacer l'image horizontalement */}
      <img
        src={require("../assets/img/voiture.png")}
        alt="Image qui avance"
        style={{ marginLeft: `${position}px`, transition: 'margin-left 0.5s ease' }}
      />
      {/* Bouton pour déclencher le déplacement */}
      <button onClick={moveImage}>Avancer</button>
    </div>
  );
};

export default MovingImage;
