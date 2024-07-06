import React from "react";
import { Button } from "antd";
import styles from "../styles/DealDetailPage.module.css";

interface Deal {
  id: string;
  image: string;
  title: string;
  description: string;
  conditions: string;
  validity: string;
  link: string;
}

interface DealDetailPageProps {
  deal: Deal;
  onBack: () => void;
}

const DealDetailPage: React.FC<DealDetailPageProps> = ({ deal, onBack }) => {
  return (
    <div className={styles.dealDetailPage}>
      <div className={styles.backButtonContainer}>
        <Button onClick={onBack} type="link">חזור</Button>
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