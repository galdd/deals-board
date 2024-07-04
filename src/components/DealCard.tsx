import React from "react";
import { useNavigate } from "react-router-dom";
import "./DealCard.css";

interface DealProps {
  id: string;
  image: string;
  title: string;
}

const DealCard: React.FC<DealProps> = ({ id, image, title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/deal/${id}`);
  };

  return (
    <div className="deal-card" onClick={handleClick}>
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