'use client';

import Link from 'next/link';
import styles from './index.module.css';

export function Header() {
    return (
        <div className={styles.root}>
            <Link className={styles.link} href="/">
                / PROFILE /
            </Link>
            <Link className={styles.link} href="/projects">
                / PROJECTS /
            </Link>
            <Link className={styles.link} href="/contact">
                / CONTACT /
            </Link>
        </div>
    );
}
