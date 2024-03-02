import { useThemeContext } from "../context/ThemeContext";
import { IoSunnyOutline, IoMoon } from "react-icons/io5";

export default function ThemeToggler() {
  const { setTheme, theme } = useThemeContext();

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    <button
      onClick={handleTheme}
      className="outline outline-1 outline-secondary w-9 rounded-full p-0.5 relative"
    >
      <div className="absolute inset-0 flex items-center justify-around px-0.5 children:text-[.95em] children:z-10 children:text-primary">
        <div>
          <IoSunnyOutline />
        </div>
        <div>
          <IoMoon />
        </div>
      </div>
      <div className="w-1/2 aspect-square rounded-full bg-secondary" />
    </button>
  );
}
