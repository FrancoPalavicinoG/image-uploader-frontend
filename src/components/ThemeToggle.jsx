export default function ThemeToggle({ theme, toggleTheme }) {
    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
}