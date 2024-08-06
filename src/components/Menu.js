import React from 'react';
import styles from './Menu.module.css';

const Menu = ({ isOpen, isDarkMode }) => {
  if (!isOpen) return null;

  return (
    <div className={`${styles.menuOverlay} ${isDarkMode ? styles.darkMenu : ''} ${isOpen ? styles.menuOpen : ''}`}>
      <div className={styles.menuContent}>
        <nav className={styles.menuNav}>
          <a href="#about">ABOUT</a>
          <a href="#books">BOOKS</a>
          <a href="#blog">BLOG</a>
          <a href="#library">LIBRARY</a>
        </nav>
      </div>
    </div>
  );
};

export default Menu;