'use client';

import { GitHubIcon } from 'app/icons/github';
import { LinkedInIcon } from 'app/icons/linkedin';

import css from './index.module.css';

export default function Contact() {
    const handleLinkClick = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div className={css.root}>
            <h1>Contact</h1>
            <section className={css.section}>
                <h2>Email</h2>
                <p>If you want to get in contact please email me at</p>
                <h3 className={css.copyText}>
                    <a href="mailto:stuartjauncey@hotmail.co.uk">stuartjauncey@hotmail.co.uk</a>
                </h3>
            </section>
            <section className={css.section}>
                <h2>Links</h2>
                <div className={css.linkContainer}>
                    <button
                        className={css.link}
                        onClick={() => handleLinkClick('https://www.linkedin.com/in/stuart-jauncey-448215218')}
                    >
                        <LinkedInIcon />
                        <h3>LinkedIn</h3>
                    </button>
                    <button className={css.link} onClick={() => handleLinkClick('https://github.com/stuart-jauncey')}>
                        <GitHubIcon />
                        <h3>Personal</h3>
                    </button>
                    <button className={css.link} onClick={() => handleLinkClick('https://github.com/StuartJauncey')}>
                        <GitHubIcon />
                        <h3>Work</h3>
                    </button>
                </div>
            </section>
        </div>
    );
}
