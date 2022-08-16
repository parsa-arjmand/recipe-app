import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Recipe, Search, Create } from "./pages";
import Navbar from "./components/navbar/Navbar";
import { useTheme } from "./hooks/useTheme";
function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
