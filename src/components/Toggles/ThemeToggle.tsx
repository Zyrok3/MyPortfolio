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
      className={`theme-toggle relative w-16 h-9 p-1 cursor-pointer rounded-full transition-colors ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-yellow-400'
      }`}
      onClick={toggleTheme}
      onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
    >
      <div
        className={`theme-toggle-circle absolute top-1/2 left-1 w-7 h-7 rounded-full shadow transform transition-transform ${
          theme === 'dark'
            ? 'bg-white translate-x-7 -translate-y-1/2'
            : 'bg-black -translate-y-1/2'
        }`}
      ></div>

      {/* Sun Icon */}
      <svg
        className={`absolute top-1/2 left-2 w-5 h-5 transform transition-opacity duration-300 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        } -translate-y-1/2`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="5" fill="#FFD700" />
        <g stroke="#FFD700" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2V5" />
          <path d="M12 19V22" />
          <path d="M4.22 4.22L6.34 6.34" />
          <path d="M17.66 17.66L19.78 19.78" />
          <path d="M2 12H5" />
          <path d="M19 12H22" />
          <path d="M4.22 19.78L6.34 17.66" />
          <path d="M17.66 6.34L19.78 4.22" />
        </g>
      </svg>

      {/* Moon Icon */}
      <svg
        className={`absolute top-1/2 right-2 w-5 h-5 transform transition-opacity duration-300 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        } -translate-y-1/2`}
        viewBox="0 0 24 24"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 12.79C20.25 12.96 19.47 13.05 18.68 13.05C14.82 13.05 11.63 9.87 11.63 6.01C11.63 5.22 11.72 4.44 11.89 3.69C8.74 4.16 6.31 7 6.31 10.35C6.31 14.18 9.49 17.35 13.33 17.35C16.69 17.35 19.53 14.92 20 11.79Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default ThemeToggle;