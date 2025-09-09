import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { inspirationsData } from '../../data/inspirations';
import Inspiracao from '../../components/Inspiracao';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.banner}>
                <Image
                    className={styles.bannerImage}
                    src="/images/banner.png"
                    alt="Banner de Crochê"
                    width={1200}
                    height={520}
                    priority
                />
            </div>
            <div className={styles.inspiration}>
                <h2 className={styles.titleInspiration}>Inspirações no Crochê</h2>
                <p className={styles.textInspiration}>
                    Confira alguns perfis incríveis que compartilham
                    inspirações e técnicas de crochê. Siga-os para se
                    inspirar e aprender mais sobre essa arte maravilhosa!
                </p>
            </div>
            <div className={styles.inspirationList}>
                {inspirationsData.map((inspiracao, index) => (
                    <Inspiracao
                        key={index}
                        name={inspiracao.name}
                        social={inspiracao.social}
                        url={inspiracao.url}
                        about={inspiracao.about}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}