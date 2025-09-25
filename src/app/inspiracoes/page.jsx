"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Inspiracoes.module.css";
import Header from "../../components/Header";
import Inspiracao from "../../components/Inspiracao";
import Video from "../../components/Video";
import { inspirationsData } from "../../data/inspirations";
import { videosData } from "../../data/videos";

export default function Inspiracoes() {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;
    const totalPages = Math.ceil(inspirationsData.length / pageSize);

    const startIndex = (currentPage - 1) * pageSize;
    const currentItems = inspirationsData.slice(startIndex, startIndex + pageSize);

    const handlePrevious = () => setCurrentPage((p) => Math.max(p - 1, 1));
    const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <h1 className={styles.title}>Inspirações</h1>
                <p className={styles.text}>
                    Explore ideias criativas para suas próprias peças e descubra como aplicá-las em seus projetos com o apoio de nossos tutoriais detalhados e de influenciadores experientes, que compartilham dicas e técnicas para inspirar sua criatividade.
                </p>
                <Link href="/produtos" className={styles.button}>
                    Coloque em prática com nossos produtos
                </Link>
            </div>

            <div className={styles.influencers}>
                <h2 className={styles.title}>Conheça o mundo do Crochê</h2>
                <div className={styles.pagination}>
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className={styles.buttonList}
                    >
                        Anterior
                    </button>

                    <span className={styles.pageIndicator}>
                        Página {currentPage} de {totalPages}
                    </span>

                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={styles.buttonList}
                    >
                        Próxima
                    </button>
                </div>
                <div className={styles.influencerList}>
                    {currentItems.map((inspiracao, index) => (
                        <Inspiracao
                            key={index}
                            name={inspiracao.name}
                            social={inspiracao.social}
                            url={inspiracao.url}
                            about={inspiracao.about}
                            video={inspiracao.video}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.videos}>
                <h1 className={styles.title}>Transforme linhas em arte</h1>
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
            </div>
        </div>
    );
}
