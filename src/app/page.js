'use client';

import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import styles from "./page.module.css";
import Link from 'next/link';

import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
});

export default function Home() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const blogContainerClass = `${styles.blogContainer} ${isDarkMode ? styles.darkBlogContainer : styles.lightBlogContainer}`;

  if (!mounted) {
    return null; // or return a loading spinner
  }

  return (
    <div className={`${styles.container} ${isDarkMode ? 'dark' : ''}`}>
      <header className={styles.header}>
        <h1>Musashi</h1>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
      <nav className={styles.navigation}>
        <a href="#" className={`${styles.navItem} ${styles.allItem} ${styles.active}`}>ALL</a>
        <a href="#" className={`${styles.navItem} ${styles.cryptoItem}`}>CRYPTO</a>
        <a href="#" className={`${styles.navItem} ${styles.philosophyItem}`}>PHILOSOPHY</a>
        <a href="#" className={`${styles.navItem} ${styles.biologyItem}`}>BIOLOGY</a>
        <a href="#" className={`${styles.navItem} ${styles.aiItem}`}>AI</a>
        <a href="#" className={`${styles.navItem} ${styles.miscItem}`}>MISC</a>
      </nav>
     <Link href="/about" className={blogContainerClass}>
  <div>
    <h3>The Internet of NFTs</h3>
    <div className={styles.blogData}>
      <p className={styles.blogCategory}>Crypto ~</p>
      <p>10.03.23</p>
    </div>
  </div>
</Link>
      <div className={blogContainerClass}>
        <h3>Blockchains as Institutions for the Digital Age</h3>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>Crypto ~</p>
          <p>10.03.23</p>
        </div>
      </div>
      <div className={blogContainerClass}>
        <h3>Cryptonetworks as Media Networks</h3>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>Crypto ~</p>
          <p>10.03.23</p>
        </div>
      </div>
      <div className={blogContainerClass}>
        <h3>The Evolution of Digital Ownership</h3>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>Crypto ~</p>
          <p>10.03.23</p>
        </div>
      </div>
      <div className={blogContainerClass}>
        <h3>Decentralized Finance: A New Financial Paradigm</h3>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>Crypto ~</p>
          <p>10.03.23</p>
        </div>
      </div>
      <div className={blogContainerClass}>
        <h3>The Intersection of AI and Blockchain</h3>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>AI ~</p>
          <p>10.03.23</p>
        </div>
      </div>
      <div className={blogContainerClass}>
        <h3>Philosophical Implications of Decentralized Systems</h3>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>Philosophy ~</p>
          <p>10.03.23</p>
        </div>
      </div>
      <div className={blogContainerClass}>
        <h3>Biomimicry in Blockchain Design</h3>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>Biology ~</p>
          <p>10.03.23</p>
        </div>
      </div>
      <div className={blogContainerClass}>
        <h3>Philosophical Implications of Decentralized Systems</h3>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>Philosophy ~</p>
          <p>10.03.23</p>
        </div>
      </div>
    </div>
  );
}