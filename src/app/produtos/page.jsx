"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./Produtos.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

export default function Produtos() {
    const [productsData, setProdutos] = useState([]);
    const fetchProdutos = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/api/products");
            if (response.status === 200 && Array.isArray(response.data)) {
                setProdutos(response.data);
            } else {
                console.error("Resposta inesperada:", response);
            }
        } catch (error) {
            console.error("Erro ao buscar armas:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProdutos();
    }, []);

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <div className={styles.productsList}>
                    {productsData.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}