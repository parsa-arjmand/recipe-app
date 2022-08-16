import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import { useTheme } from "../../hooks/useTheme";
function Navbar() {
  const { color, mode } = useTheme();
  return (
    <header className={`main-head ${mode}`} style={{ background: color }}>
      <nav className="navbar">
        <Link id="logo" to="/">
          دستورات
        </Link>
        <SearchBar />
        <Link className="create-cta" to="/create">
          ساخت دستور
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
