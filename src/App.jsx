import Router from './routes';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [theme, setTheme] = useState("light");
  const { toggleTheme } = useTheme(theme, setTheme);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 
      ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-gray-100"}`}
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Router />
      </main>
    </div>
  );
}