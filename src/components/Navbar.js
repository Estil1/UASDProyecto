import { useState, useEffect } from "react";

// assets
import BlancoLogo from "../assets/Blanco.svg";
import AzulLogo from "../assets/Azul.svg";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

const Navbar = () => {
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  // Determine which logo to use based on the current theme
  const logoSrc = theme === "light" ? AzulLogo : BlancoLogo;

  return (
    <div className="navbar bg-base-100 shadow-xl p-4 sm:p-9 flex justify-between items-center">
      <div className="flex-1">
        {/* Set a max width for the logo */}
        <img
          src={logoSrc}
          alt="OM"
          className="btn btn-ghost p-0"
          style={{ maxWidth: "300px", maxHeight: "200px" }}
        />
        <h1 className="text-lg font-bold mx-4"></h1>
      </div>
      <div className="flex-none">
        {/* Toggle button here */}
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
            {/* light theme sun image */}
            <img src={sun} alt="light" className="w-8 h-8 swap-on" />
            {/* dark theme moon image */}
            <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
