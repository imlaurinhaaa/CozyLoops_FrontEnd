import React from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css";

export default function Card({ image, name, category }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.cardImage}
                    src={image}
                    alt={name}
                    width={200}
                    height={200}
                    priority
                />
            </div>
            <h2 className={styles.cardTitle}>{name}</h2>
            <p className={styles.cardCategory}>
                {category}
            </p>
        </div>
    );
}