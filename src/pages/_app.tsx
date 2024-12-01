import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import '../styles/tailwind.css';
import type { AppProps } from "next/app";
import { LanguageProvider } from "../context/LanguageContext";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
  }, []);

  return (
    <ThemeProvider attribute="class">
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;