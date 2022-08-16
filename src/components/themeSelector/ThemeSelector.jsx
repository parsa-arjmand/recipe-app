import "./ThemeSelector.css";
import { useTheme } from "../../hooks/useTheme";
import modeIcon from "../../assets/mode.svg";
const themes = ["#4280f5", "#dec741", "#5087a2"];
function ThemeSelector() {
  const { mode, changeColor, toggleTheme } = useTheme();

  return (
    <div className="theme-selector-container">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          alt="theme mode"
          onClick={() => toggleTheme(mode === "light" ? "dark" : "light")}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="colors-wrapper">
        {themes.map((theme) => (
          <div
            onClick={() => changeColor(theme)}
            key={theme}
            className="theme-select"
            style={{ background: theme }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;
