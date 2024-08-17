import React, { useEffect, useState } from "react";
import "./HelpSection.css";

const HelpSection = ({ searchTerm }) => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/cards")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setFilteredCards(data);
      })
      .catch((error) => console.error("Error fetching cards:", error));
  }, []);

  useEffect(() => {
    const filtered = cards.filter(
      (card) =>
        card.title.toLowerCase().includes(searchTerm) ||
        card.description.toLowerCase().includes(searchTerm)
    );
    setFilteredCards(filtered);
  }, [searchTerm, cards]);

  return (
    <div className="help-section">
      {filteredCards.map((card, index) => (
        <div className="card" key={index}>
          <h3 className="card-title">{card.title}</h3>
          <hr className="card-hr" />
          <p className="card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HelpSection;
