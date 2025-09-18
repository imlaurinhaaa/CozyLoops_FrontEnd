"use client";
import styles from '../styles/Inspiracao.module.css';
import { useState } from 'react';

export default function Inspiracao({ name, social, url, about, video }) {
    const nameExibido = name ? name : "Nome não fornecido";
    const socialExibido = social ? social : "Social não fornecido";
    const urlExibido = url ? url : "URL não fornecida";
    const aboutExibido = about ? about : "Sobre não fornecido";
    const videoExibido = video ? video : "Vídeo não fornecido";
    const [show, setShow] = useState(false);

    return (
        <>
            <div className={styles.inspiration}>
                <h3 className={styles.inspirationName}>{nameExibido}</h3>
                <p className={styles.inspirationSocial}>{socialExibido}</p>
                <button onClick={() => setShow(true)} className={styles.buttonModal}>✨ Conhecer</button>
            </div>

            {show && (
                <div onClick={() => setShow(false)} className={styles.modal}>
                    <div onClick={(e) => e.stopPropagation()} className={styles.modalContent}>
                        <button onClick={() => setShow(false)} className={styles.closeModalButton}>×</button>                        
                        {video && (
                            <div className={styles.modalVideoContainer}>
                                <video className={styles.modalVideo} controls autoPlay loop muted>
                                    <source src={videoExibido} type="video/mp4" />
                                </video>
                            </div>
                        )}
                        
                        <div className={styles.modalTextContainer}>
                            <div className={styles.modalIcon}>🎀</div>
                            <h2 className={styles.modalTitle}>{nameExibido}</h2>
                            <p className={styles.modalText}><strong>Sobre:</strong> {aboutExibido}</p>
                            <p className={styles.modalTextLast}><strong>Instagram:</strong> <a href={urlExibido} target="_blank" rel="noopener noreferrer">{socialExibido}</a></p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}