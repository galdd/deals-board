import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "antd";
import styles from "../styles/DealDetailPage.module.css";

interface DealDetailPageProps {
  deals: any[];
}

const DealDetailPage: React.FC<DealDetailPageProps> = ({ deals }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const deal = deals.find((deal) => deal.id === id);

  if (!deal) {
    return <div>Deal not found</div>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.dealDetailPage}>
      <div className={styles.backButtonContainer}>
        <Button onClick={handleBack} type="link">חזור</Button>
      </div>
      <div className={styles.dealDetailCard}>
        <div className={styles.detailsContainer}>
          <h2>{deal.title}</h2>
          <p>{deal.description}</p>
          <strong>תנאים למימוש ההטבה:</strong>
          <p>{deal.conditions}</p>
          <strong>תוקף:</strong>
          <p>{deal.validity ? `${deal.validity}` : ""}</p>
          <div className={styles.buttonContainer}>
            <a href={deal.link} target="_blank" rel="noopener noreferrer" className={styles.cardButton}>
              לינק להטבה
            </a>
          </div>
        </div>
        <div className={styles.imageContainerDetail}>
          {deal.image && <img src={deal.image} alt={deal.title} />}
        </div>
      </div>
    </div>
  );
};

export default DealDetailPage;