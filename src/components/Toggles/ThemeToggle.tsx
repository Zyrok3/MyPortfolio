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
      className={`theme-toggle relative w-16 h-9 p-1 cursor-pointer rounded-full transition-colors ${theme === 'dark' ? 'bg-gray-800' : 'bg-yellow-400'
        }`}
      onClick={toggleTheme}
      onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
    >
      <div
        className={`theme-toggle-circle absolute top-1/2 left-1 w-7 h-7 rounded-full shadow transform transition-transform ${theme === 'dark'
          ? 'bg-white translate-x-7 -translate-y-1/2'
          : 'bg-black -translate-y-1/2'
          }`}
      ></div>

      {/* Sun Icon */}
      <svg
        className={`absolute top-1/2 left-2 w-5 h-5 transform transition-opacity duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'
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
        className={`absolute top-1/2 right-2 w-5 h-5 transform transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'
          } -translate-y-1/2`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M13 6V3M18.5 12V7M14.5 4.5H11.5M21 9.5H16M15.5548 16.8151C16.7829 16.8151 17.9493 16.5506 19 16.0754C17.6867 18.9794 14.7642 21 11.3698 21C6.74731 21 3 17.2527 3 12.6302C3 9.23576 5.02061 6.31331 7.92462 5C7.44944 6.05072 7.18492 7.21708 7.18492 8.44523C7.18492 13.0678 10.9322 16.8151 15.5548 16.8151Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>

    </div>
  );
};

export default ThemeToggle;