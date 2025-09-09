"use client";
import styles from '../styles/Inspiracao.module.css';
import { Modal } from 'antd';
import { useState } from 'react';

export default function Inspiracao({ name, social, url, about }) {
    const nameExibido = name ? name : "Nome não fornecido";
    const socialExibido = social ? social : "Social não fornecido";
    const urlExibido = url ? url : "URL não fornecida";
    const aboutExibido = about ? about : "Sobre não fornecido";
    const [open, setOpen] = useState(false);

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={styles.inspiration} onClick={() => setOpen(true)} style={{ cursor: 'pointer' }}>
                <h3 className={styles.inspirationName}>{nameExibido}</h3>
                <p className={styles.inspirationSocial}>{socialExibido}</p>
            </div>
            <Modal
                open={open}
                title={nameExibido}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p><strong>Sobre:</strong> {aboutExibido}</p>
                <p><strong>Instagram:</strong> <a href={urlExibido} target="_blank" rel="noopener noreferrer">{socialExibido}</a></p>
            </Modal>
        </>
    );
}