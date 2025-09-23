import React from 'react';
import Image from 'next/image';
import styles from './Sobre.module.css';
import Header from '../../components/Header';
import CardSocial from '../../components/CardSocial';

export default function Sobre() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.introduction}>
                <div className={styles.me}>
                    <Image
                        src="/images/laura.png"
                        alt="Laura Developer"
                        width={550}
                        height={550}
                        className={styles.image}
                    />
                </div>
                <div className={styles.meSection}>
                    <h1 className={styles.title}>Sobre Mim ✨</h1>
                    <p className={styles.text}>Olá! Meu nome é Laura Violla, tenho 17 anos e estudo Desenvolvimento de Sistemas no Senai Valinhos. Sou apaixonada por tecnologia e adoro criar soluções inovadoras que facilitem a vida das pessoas.</p>
                    <p className={styles.text}>Além da minha paixão por desenvolvimento web, também sou uma entusiasta do crochê. Adoro as peças únicas e personalizadas, e acredito que o crochê é uma forma maravilhosa de expressar criatividade e uma maneira de relaxar.</p>
                    <p className={styles.text}>Este projeto foi desenvolvido pelo Docente Felipe Silva Santos , unindo minhas duas paixões: tecnologia e crochê. Espero que você goste do site e encontre inspiração para suas próprias criações!</p>
                </div>
            </div>
            <div className={styles.contact}>
                <h2 className={styles.title}>Onde me encontrar</h2>
                <div className={styles.socialList}>
                    <CardSocial
                        icon="instagram"
                        name="Instagram"
                        url="https://www.instagram.com/imlaurinhaaa?igsh=OTNtdnJwMnJ3NGd2"
                    />
                    <CardSocial
                        icon="linkedin"
                        name="Linkedin"
                        url="www.linkedin.com/in/laura-ferreira-violla-a526b12b1"
                    />
                    <CardSocial
                        icon="github"
                        name="Github"
                        url="https://github.com/imlaurinhaaa"
                    />
                    <CardSocial
                        icon="mail"
                        name="Email"
                        url="mailto:laura.violla@aluno.senai.br"
                    />
                </div>
            </div>
        </div>
    );
}