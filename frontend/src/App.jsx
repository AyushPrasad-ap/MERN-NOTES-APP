import { Route, Routes } from 'react-router';
import { useState, useEffect } from "react";

import HomePage from './pages/HomePage.jsx';
import CreateNotePage from './pages/CreateNotePage.jsx';
import NoteDetailPage from './pages/NoteDetailPage.jsx';



const App = () => {

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    // set data-theme on <html> (recommended for daisyUI) and on root div
    document.documentElement.setAttribute("data-theme", theme);
    // also keep localStorage in sync
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Error setting theme in localStorage", error);
    }
  }, [theme]);

  return (
    <div data-theme={theme} >

      <Routes>
        <Route path="/" element={<HomePage theme={theme} setTheme={setTheme} />} />
        <Route path="/create" element={<CreateNotePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App