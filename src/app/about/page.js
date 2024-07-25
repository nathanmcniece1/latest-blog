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

  return (
    <div className={`${styles.container} ${isDarkMode ? 'dark' : ''}`}>
      <header className={styles.header}>
        <h1>Musashi</h1>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
    </div>
  );
}