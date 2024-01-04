// CardSlider.js
import React, { useState, useEffect } from 'react';
import '../styles/CardSlider.css'; // Import your CSS file for styling

const CardSlider = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current card index every 3 seconds (adjust as needed)
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [cards.length]);

  return (
    <div className="card-slider">
      <div
        className="cards-container"
        style={{
          transform: `translateX(-${currentCardIndex * 100}%)`,
        }}
      >
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={`Card ${index + 1}`} />
            <div className="card-content">
              <h3>{card.title}</h3>
              <div className="card-description">
              <p >{card.description}</p>
                </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;

