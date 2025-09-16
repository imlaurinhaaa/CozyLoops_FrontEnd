import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { inspirationsData } from '../../data/inspirations';
import { videosData } from '../../data/videos';
import Inspiracao from '../../components/Inspiracao';
import Video from '../../components/Video';

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
                <h2 className={styles.title}>Inspirações no Crochê</h2>
                <p className={styles.text}>
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
            <div className={styles.video}>
                <h2 className={styles.title}>Aprenda Crochê</h2>
                <p className={styles.text}> Descubra o mundo do crochê com nossos tutoriais e dicas. Aprenda desde os pontos básicos até técnicas avançadas para criar peças incríveis. Se você é iniciante ou já tem experiência, temos algo para todos!</p>
            </div>
            <div className={styles.videoList}>
                {videosData.map((video, index) => (
                    <Video
                        key={index}
                        src={video.src}
                        title={video.title}
                        description={video.description}
                    />  
                ))}
            </div>
            <Footer />
        </div>
    );
}