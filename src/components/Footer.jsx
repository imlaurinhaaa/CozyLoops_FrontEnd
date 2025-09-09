import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Image src="/images/log-semfundo.png" alt="Cozy Loops Logo" width={100} height={100} />
                <h2 className={styles.title}>Cozy Loops 🧸🌷</h2>
                <p className={styles.text}>Copyright © 2025 all rights reserved</p>
            </div>
        </footer>
    );
}