'use client';

import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import styles from "../page.module.css";

import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
});

export default function About() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const containerDivClass = `${styles.containerDiv} ${isDarkMode ? styles.darkContainerDiv : styles.lightContainerDiv}`;

  return (
    <div className={`${styles.container} ${isDarkMode ? 'dark' : ''}`}>
      <header className={styles.header}>
        <h1>Musashi</h1>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
      <div className={containerDivClass}>
        <h2>The Internet of NFTs</h2>
        <div className={styles.blogData}>
          <p className={styles.blogCategory}>Crypto ~</p>
          <p>10.03.23</p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          To anyone paying attention, it appears we&apos;re at an interesting moment in the history of the Web. On the back of ~60 years of Moore&apos;s Law, the Web is now astonishingly responsive and high-resolution, and where ~5 billion people (and growing!) are increasingly spending their lives. As remarkable as the Web is, though, it has — for reasons social, economic and technological — become concentrated in the hands of a very small handful of actors whose interests are proving highly misaligned with our broader interests as a global community. Where it was once hoped that the Internet would bring the world together, to enlighten and empower, it&apos;s now effectively breaking things instead. To anyone paying attention, it appears we&apos;re at an interesting moment in the history of the Web. On the back of ~60 years of Moore&apos;s Law, the Web is now astonishingly responsive and high-resolution, and where ~5 billion people (and growing!) are increasingly spending their lives. As remarkable as the Web is, though, it has — for reasons social, economic and technological — become concentrated in the hands of a very small handful of actors whose interests are proving highly misaligned with our broader interests as a global community. Where it was once hoped that the Internet would bring the world together, to enlighten and empower, it&apos;s now effectively breaking things instead. 
          <br /><br />
          Fortunately, as if just in-time, we&apos;ve happened upon some new &apos;technological primitives&apos; — blockchains, smart contracts, tokens, new forms of cryptography — that seem to offer the promise of a more enlightened Internet. These new primitives we refer to collectively as &quot;crypto&quot;, and the alternative financial system it&apos;s given rise to as the &quot;cryptoeconomy&quot;. And yet, at this point, one would be hard-pressed to argue that the cryptoeconomy, as it stands, goes any real way towards solving the fundamental problems of today&apos;s Web. While NFTs are providing artists and content creators with new economic possibilities and interesting notions of digital identity abound, as citizens of the Internet, we remain overwhelmingly stuck in the &apos;Web 2.0&apos; paradigm, where surveillance capitalism remains the economic engine powering the logic of our increasingly online lives.
          <br /><br />
          To anyone paying attention, it appears we&apos;re at an interesting moment in the history of the Web. On the back of ~60 years of Moore&apos;s Law, the Web is now astonishingly responsive and high-resolution, and where ~5 billion people (and growing!) are increasingly spending their lives. As remarkable as the Web is, though, it has — for reasons social, economic and technological — become concentrated in the hands of a very small handful of actors whose interests are proving highly misaligned with our broader interests as a global community. Where it was once hoped that the Internet would bring the world together, to enlighten and empower, it&apos;s now effectively breaking things instead.
          <br /><br />
          Fortunately, as if just in-time, we&apos;ve happened upon some new &apos;technological primitives&apos; — blockchains, smart contracts, tokens, new forms of cryptography — that seem to offer the promise of a more enlightened Internet. These new primitives we refer to collectively as &quot;crypto&quot;, and the alternative financial system it&apos;s given rise to as the &quot;cryptoeconomy&quot;. And yet, at this point, one would be hard-pressed to argue that the cryptoeconomy, as it stands, goes any real way towards solving the fundamental problems of today&apos;s Web. While NFTs are providing artists and content creators with new economic possibilities and interesting notions of digital identity abound, as citizens of the Internet, we remain overwhelmingly stuck in the &apos;Web 2.0&apos; paradigm, where surveillance capitalism remains the economic engine powering the logic of our increasingly online lives.
        </p>
      </div>
    </div>
  );
}