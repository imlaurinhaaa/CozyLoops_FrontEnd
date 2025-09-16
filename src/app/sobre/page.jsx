import React from 'react';
import Image from 'next/image';
import styles from './Sobre.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Sobre() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.introduction}>
                <div className={styles.me}>
                    <Image 
                        src="/images/Laura.jpeg"
                        alt="Laura Developer"
                        width={300}
                        height={300}
                        className={styles.image}
                    />
                </div>
                <div className={styles.meSection}>
                    <h1 className={styles.title}>Sobre Mim</h1>
                    <p className={styles.text}>Olá! Meu nome é Laura Violla, tenho 17 anos e estudo Desenvolvimento de Sistemas no Senai Valinhos. Sou apaixonada por tecnologia e adoro criar soluções inovadoras que facilitem a vida das pessoas.</p>
                    <p className={styles.text}>Além da minha paixão por desenvolvimento web, também sou uma entusiasta do crochê. Adoro as peças únicas e personalizadas, e acredito que o crochê é uma forma maravilhosa de expressar criatividade e uma maneira de relaxar.</p>
                    <p className={styles.text}>Este projeto foi desenvolvido pelo Docente Felipe Silva Santos , unindo minhas duas paixões: tecnologia e crochê. Espero que você goste do site e encontre inspiração para suas próprias criações!</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}