import React from "react";
import "./DealCard.css";

interface DealProps {
  id: string;
  image: string;
  title: string;
  description: string;
  conditions: string;
  validity: string;
  link: string;
  onSelect: () => void;
}

const DealCard: React.FC<DealProps> = ({  image, title, onSelect }) => {
  return (
    <div className="deal-card" onClick={onSelect}>
      <div className="image-container">
        {image && (
          <>
            <div
              className="image-blur"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <img src={image} alt={title} className="foreground-image" />
          </>
        )}
      </div>
      <div className="title-container">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default DealCard;