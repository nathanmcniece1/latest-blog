import { ThemeProvider } from './ThemeContext';
import './globals.css';
import { Bebas_Neue, Roboto_Mono, Inter } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
});

const robotoMono = Roboto_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${robotoMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function getInitialTheme() {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme) {
                  return savedTheme === 'dark';
                }
                return window.matchMedia('(prefers-color-scheme: dark)').matches;
              }
              const isDark = getInitialTheme();
              document.documentElement.classList.toggle('dark', isDark);
            })();
          `
        }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}