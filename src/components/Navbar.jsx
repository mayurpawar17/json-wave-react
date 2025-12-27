import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <header className="navbar">
      <div className="container nav-content">
        <h1 className="logo">🌊 JSON<span>Wave</span></h1>

        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="#docs" className="nav-btn">Docs</a>
          <button
            onClick={() => setDark(!dark)}
            className="nav-btn"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}
