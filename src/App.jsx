import Router from './routes';
import ThemeToggle from './components/ThemeToggle';
import { useState } from 'react';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [theme, setTheme] = useState("light");
  const { toggleTheme } = useTheme(theme, setTheme);

  return (
      <div className={`min-h-screen transition-colors duration-300
        ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-gray-100'}`}
      >
        <header className="p-4 flex justify-end">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </header>
        <main>
          <Router />
        </main>
      </div>
  );
}