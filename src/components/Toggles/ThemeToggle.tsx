'use client';

import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(defaultTheme);
    document.documentElement.setAttribute('data-theme', defaultTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div
      role="button"
      aria-label="Toggle Theme"
      tabIndex={0}
      className={`theme-toggle relative w-14 h-8 p-1 cursor-pointer rounded-full ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
      }`}
      onClick={toggleTheme}
      onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
    >
      <div
        className={`theme-toggle-circle absolute top-1/2 left-1 w-6 h-6 rounded-full shadow transform ${
          theme === 'dark' ? 'bg-white translate-x-6 -translate-y-1/2' : 'bg-black -translate-y-1/2'
        } transition-transform`}
      ></div>

      {/* Sun Icon */}
      <svg
        className={`absolute top-1/2 left-4 w-4 h-4 transform ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2`}
        viewBox="0 0 24 24"
        fill={theme === 'dark' ? 'black' : 'white'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4V2M12 22V20M4.22 4.22L2.81 2.81M19.78 19.78L21.19 21.19M2 12H4M20 12H22M4.22 19.78L2.81 21.19M19.78 4.22L21.19 2.81M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>

      {/* Moon Icon */}
      <svg
        className={`absolute top-1/2 right-0 w-4 h-4 transform ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2`}
        viewBox="0 0 24 24"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 6V3M18.5 12V7M14.5 4.5H11.5M21 9.5H16M15.5548 16.8151C16.7829 16.8151 17.9493 16.5506 19 16.0754C17.6867 18.9794 14.7642 21 11.3698 21C6.74731 21 3 17.2527 3 12.6302C3 9.23576 5.02061 6.31331 7.92462 5C7.44944 6.05072 7.18492 7.21708 7.18492 8.44523C7.18492 13.0678 10.9322 16.8151 15.5548 16.8151Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
};

export default ThemeToggle;