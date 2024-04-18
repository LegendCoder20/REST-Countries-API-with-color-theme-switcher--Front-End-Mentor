import {useDarkMode} from "./DarkModeContext";
import {Link} from "react-router-dom";

function Navbar() {
  const {isDarkMode, toggleDarkMode} = useDarkMode();

  return (
    <>
      <nav className={isDarkMode ? "navbar-dark" : "navbar-light"}>
        <div className="title">
          <b>Where in the world?</b>
        </div>

        <div className="dark-mode" onClick={toggleDarkMode}>
          <img
            src={
              isDarkMode
                ? "https://t4.ftcdn.net/jpg/02/78/71/73/360_F_278717315_KtaKn0mC0lQ16j20iheyMMrPBOWOQKCa.jpg"
                : "https://cdn2.iconfinder.com/data/icons/bubble-set-general/48/Moon-512.png"
            }
          />
          Dark Mode
        </div>
      </nav>
    </>
  );
}

export default Navbar;
