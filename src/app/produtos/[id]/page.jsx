"use client";
import React, { use } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { CircleArrowLeft } from 'lucide-react';
import styles from "./[id].module.css";
import Header from "../../../components/Header";

export default function ProductDetailsPage({ params }) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const url = process.env.NEXT_PUBLIC_API_URL;
    const uploads = process.env.NEXT_PUBLIC_UPLOADS_URL;
    const resolvedParams = use(params);

    const FetchProduct = async () => {
        try {
            const response = await axios.get(`${url}/products/${resolvedParams.id}`);
            setProduct(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching product:", error);
            setProduct(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (resolvedParams.id) {
            FetchProduct(resolvedParams.id);
        }
    }, [resolvedParams.id])

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.productCard}>
                <div className={styles.buttonBack}>
                    <CircleArrowLeft size={32} color="#FF24A0" onClick={() => window.history.back()} className={styles.back} />
                </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.img}>
                        <Image
                            className={styles.productImage}
                            src={product ? `${uploads}/${product.image}` : "/images/placeholder.png"}
                            alt={product ? product.name : "Imagem não disponível"}
                            width={400}
                            height={400}
                            priority
                        />
                    </div>
                    <div className={styles.product}>
                        <h1 className={styles.productName}>{product ? product.name : "Nome do Produto"}</h1>
                        <p className={styles.productCategory}>{product ? product.category : "Categoria do Produto"}</p>
                        <div className={styles.productList}>
                            <li className={styles.productItem}>
                                <p className={styles.titleItem}>Descrição:</p> <p>{product ? product.description : "Descrição não disponível"}</p>
                            </li>
                            <li className={styles.productItem}>
                                <p className={styles.titleItem}>Preço para vendas:</p> <p className={styles.textItem}>{product ? `R$ ${product.price}` : "Preço não disponível"}</p>
                            </li>
                            <li className={styles.productItem}>
                                <p className={styles.titleItem}>Tempo de confecção:</p> <p className={styles.textItem}>{product ? product.time : "Tempo não disponível"}</p>
                            </li>
                        </div>
                    </div>
                    <li className={styles.productSuggestion}>
                        <p className={styles.titleItem}>Sugestões:</p> <p className={styles.textItem}>{product ? product.suggestion : "Sugestão não disponível"}</p>
                    </li>
                </div>
            </div>
            </div>
        </div>
    );
}