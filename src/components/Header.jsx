import React from "react";
import styles from "../styles/Header.module.css";
import { House, ShoppingBag, User, Lightbulb } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (<header className={styles.header}>
        <Image className={styles.logo} src="/images/log-semfundo.png" alt="Cozy Loops Logo" width={90} height={90} />
        <h1 className={styles.title}>Cozy Loops</h1>
        <nav>
            <ul className={styles.menu}>
                <Link href="/home" className={styles.menuItem}>
                    <House size={16} />
                    Home
                </Link>
                <Link href="/produtos" className={styles.menuItem}>
                    <ShoppingBag size={16} />
                    Produtos
                </Link>
                <Link href="/sobre" className={styles.menuItem}>
                    <User size={16} />
                    Sobre
                </Link>
                <Link href="/inspiracoes" className={styles.menuItem}>
                    <Lightbulb size={16} />
                    Inspirações
                </Link>
            </ul>
        </nav>
    </header>
    );
}       