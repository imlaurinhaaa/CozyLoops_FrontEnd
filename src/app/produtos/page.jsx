"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Search } from 'lucide-react';
import styles from "./Produtos.module.css";
import Header from "../../components/Header";
import Card from "../../components/Card";

export default function Produtos() {
    const [products, setProducts] = useState([]);
    const url = process.env.NEXT_PUBLIC_API_URL
    const uploads = process.env.NEXT_PUBLIC_UPLOADS_URL
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${url}/products`);
                setProducts(response.data);
                console.log(response.data);
                console.log(uploads);


            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [url, search]);

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <h1 className={styles.title}>Nossos Produtos</h1>
                <p className={styles.text}>Explore nossa coleção de produtos feitos à mão com amor e dedicação. Cada peça é única e feita com materiais de alta qualidade para garantir durabilidade e beleza. Encontre o presente perfeito ou algo especial para você!</p>
                <div className={styles.search}>
                    <div className={styles.inputContainer}>
                        <Search className={styles.searchIcon} size={20} />
                        <input className={styles.input}
                            type="text" value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Buscar categorias..." />
                    </div>
                    <button className={styles.button}
                        onClick={async () => {
                            try {
                                const response = await axios.get(`${url}/products?category=${encodeURIComponent(search)}`);
                                setProducts(response.data);
                            } catch (error) {
                                console.error("Error fetching products:", error);
                            }
                        }}
                    >
                        Buscar
                    </button>
                </div>
                <div className={styles.productsList}>
                    {products.map((p) => (
                        <Link key={p.id} href={`/produtos/${p.id}`} style={{ textDecoration: 'none' }}>
                            <Card
                                image={`${uploads}/${p.image}`}
                                name={p.name}
                                category={p.category}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}