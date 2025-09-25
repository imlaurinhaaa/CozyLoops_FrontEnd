import React from "react";
import styles from "../styles/CardSocial.module.css";
import { Instagram, Github, Mail, Linkedin, Laptop } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

export default function CardSocial({ icon, name, url }) {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
            <div className={styles.icon}>
                {icon === 'instagram' && <Instagram size={28} color="#ff24a0" />}
                {icon === 'github' && <Github size={28} color="#ff24a0" />}
                {icon === 'mail' && <Mail size={28} color="#ff24a0" />}
                {icon === 'linkedin' && <Linkedin size={28} color="#ff24a0" />}
                {icon === 'laptop' && <Laptop size={28} color="#ff24a0" />}
                <h3 className={styles.name}>{name}</h3>
            </div>
            </div>
            <div className={styles.info}>
                <Link href={url} target
                    className={styles.link}>{url}</Link>
            </div>
        </div>
    )
}
