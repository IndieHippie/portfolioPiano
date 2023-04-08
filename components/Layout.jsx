import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function Layout({ children }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {mounted && children}
    </div>
  );
}

export default Layout;
