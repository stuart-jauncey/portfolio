'use client';

import Link from 'next/link';
import styles from './index.module.css';

export function Header() {
    return (
        <header className={styles.root}>
            <Link className={styles.link} href="/">
                <h2>PROFILE</h2>
            </Link>
            <span>/</span>
            <Link className={styles.link} href="/projects">
                <h2>PROJECTS</h2>
            </Link>
            <span>/</span>
            <Link className={styles.link} href="/contact">
                <h2>CONTACT</h2>
            </Link>
        </header>
    );
}
