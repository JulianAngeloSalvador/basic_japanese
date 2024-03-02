import { useThemeContext } from "../context/ThemeContext";

export default function ThemeToggler() {
  const { setTheme, theme } = useThemeContext();

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return <button onClick={handleTheme}>Theme</button>;
}
