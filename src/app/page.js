'use client';

import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import styles from "./page.module.css";
import Link from 'next/link';
import Image from 'next/image'



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

  const getBlogContainerClass = (category) => {
    const baseClass = `${styles.blogContainer} ${isDarkMode ? styles.darkBlogContainer : styles.lightBlogContainer}`;
    const categoryClass = styles[`${category.toLowerCase()}Container`] || '';
    return `${baseClass} ${categoryClass}`;
  };

  if (!mounted) {
    return null; // or return a loading spinner
  }

  return (
    <div className={`${styles.container} ${isDarkMode ? 'dark' : ''}`}>
      <header className={styles.header}>
        <h1>Musashi</h1>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {isDarkMode ? <Image src="/images/white-sun.png" alt="Logo" width={18} height={18} /> : <Image src="/images/grey-moon.png" alt="Logo" width={16} height={16} />}
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
      <Link href="/about" className={getBlogContainerClass('Crypto')}>
        <div>
          <h3>The Internet of NFTs</h3>
          <p className={styles.previewText}>To anyone paying attention, it appears we&apos;re at an interesting moment in the history of the Web. On the back of ~60 years of Moore&apos;s Law...</p>
          <div className={styles.blogData}>
            <p className={styles.blogCategory}>Crypto ~</p>
            <p className={styles.blogCategory}>10.03.23</p>
          </div>
        </div>
      </Link>
      <div className={getBlogContainerClass('AI')}>
        <h3>The Intersection of AI and Blockchain</h3>
        <p className={styles.previewText}>To anyone paying attention, it appears we&apos;re at an interesting moment in the history of the Web. On the back of ~60 years of Moore&apos;s Law...</p>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>AI ~</p>
          <p className={styles.blogCategory}>10.03.23</p>
        </div>
      </div>
      <div className={getBlogContainerClass('Biology')}>
        <h3>Biomimicry in Blockchain Design</h3>
        <p className={styles.previewText}>To anyone paying attention, it appears we&apos;re at an interesting moment in the history of the Web. On the back of ~60 years of Moore&apos;s Law...</p>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>Biology ~</p>
          <p className={styles.blogCategory}>10.03.23</p>
        </div>
      </div>
      <div className={getBlogContainerClass('Philosophy')}>
        <h3>Philosophical Implications of Decentralized Systems</h3>
        <p className={styles.previewText}>To anyone paying attention, it appears we&apos;re at an interesting moment in the history of the Web. On the back of ~60 years of Moore&apos;s Law...</p>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>Philosophy ~</p>
          <p className={styles.blogCategory}>10.03.23</p>
        </div>
      </div>
      <div className={getBlogContainerClass('Crypto')}>
        <h3>Cryptonetworks as Media Networks</h3>
        <p className={styles.previewText}>To anyone paying attention, it appears we&apos;re at an interesting moment in the history of the Web. On the back of ~60 years of Moore&apos;s Law...</p>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>Crypto ~</p>
          <p className={styles.blogCategory}>10.03.23</p>
        </div>
      </div>
      <div className={getBlogContainerClass('Crypto')}>
        <h3>The Evolution of Digital Ownership</h3>
        <p className={styles.previewText}>To anyone paying attention, it appears we&apos;re at an interesting moment in the history of the Web. On the back of ~60 years of Moore&apos;s Law...</p>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>Crypto ~</p>
          <p className={styles.blogCategory}>10.03.23</p>
        </div>
      </div>
      <div className={getBlogContainerClass('Crypto')}>
        <h3>Decentralized Finance: A New Financial Paradigm</h3>
        <p className={styles.previewText}>To anyone paying attention, it appears we&apos;re at an interesting moment in the history of the Web. On the back of ~60 years of Moore&apos;s Law...</p>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>Crypto ~</p>
          <p className={styles.blogCategory}>10.03.23</p>
        </div>
      </div>
      <div className={getBlogContainerClass('AI')}>
        <h3>The Intersection of AI and Blockchain</h3>
        <p className={styles.previewText}>To anyone paying attention, it appears we&apos;re at an interesting moment in the history of the Web. On the back of ~60 years of Moore&apos;s Law...</p>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>AI ~</p>
          <p className={styles.blogCategory}>10.03.23</p>
        </div>
      </div>
      <div className={getBlogContainerClass('Philosophy')}>
        <h3>Philosophical Implications of Decentralized Systems</h3>
        <p className={styles.previewText}>To anyone paying attention, it appears we&apos;re at an interesting moment in the history of the Web. On the back of ~60 years of Moore&apos;s Law...</p>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>Philosophy ~</p>
          <p className={styles.blogCategory}>10.03.23</p>
        </div>
      </div>
      <div className={getBlogContainerClass('Biology')}>
        <h3>Biomimicry in Blockchain Design</h3>
        <p className={styles.previewText}>To anyone paying attention, it appears we&apos;re at an interesting moment in the history of the Web. On the back of ~60 years of Moore&apos;s Law...</p>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>Biology ~</p>
          <p className={styles.blogCategory}>10.03.23</p>
        </div>
      </div>
      <div className={getBlogContainerClass('Philosophy')}>
        <h3>Philosophical Implications of Decentralized Systems</h3>
        <p className={styles.previewText}>To anyone paying attention, it appears we&apos;re at an interesting moment in the history of the Web. On the back of ~60 years of Moore&apos;s Law...</p>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>Philosophy ~</p>
          <p className={styles.blogCategory}>10.03.23</p>
        </div>
      </div>
    </div>
  );
}