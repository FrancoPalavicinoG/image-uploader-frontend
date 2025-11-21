export function useTheme(theme, setTheme) {
    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };
    return { theme, toggleTheme };
}