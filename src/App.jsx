import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoadingSpinner from "./components/LoadingSpinner";

const Home = lazy(() => import("./components/Home"));
const Gallery = lazy(() => import("./components/Gallery"));
const About = lazy(() => import("./components/About"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || savedTheme === null;
  });

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="min-h-screen bg-slate-200 dark:bg-zinc-950">
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
