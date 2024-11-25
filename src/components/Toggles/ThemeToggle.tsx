import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(defaultTheme);
    document.documentElement.classList.toggle('dark', defaultTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="flex items-center space-x-2">
      <span role="img" aria-label="Sun">
        ☀️
      </span>
      <label className="relative inline-block w-10 h-6">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
          className="sr-only"
        />
        <span className="block w-full h-full bg-gray-400 rounded-full shadow-inner"></span>
        <span
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform ${
            theme === 'dark' ? 'translate-x-4' : ''
          } transition-transform`}
        ></span>
      </label>
      <span role="img" aria-label="Moon">
        🌙
      </span>
    </div>
  );
};

export default ThemeToggle;
