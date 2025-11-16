import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSun, FaMoon } from "react-icons/fa";

// Logos
import logoWhite from '../assets/logo_whitemode.png';
import logoDark from '../assets/logo_darkmode.png';

export default function NavBar() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (dark) root.classList.add("dark");
      else root.classList.remove("dark");

      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (e) {}
  }, [dark]);

  return (
    <nav
      aria-label="Main navigation"
      className={`
        w-full p-4 shadow-md fixed top-0 left-0 z-50
        ${dark ? "bg-[#091c1a] text-white" : "bg-[#dfd4bf] text-black"}
      `}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">

    {/* Logo */}
    <Link to="/" className="flex items-center">
      
      {/* Logo modo claro */}
      <img
        src={logoWhite}
        alt="Logo Hayah Light"
        className="h-10 block dark:hidden"
      />

      {/* Logo modo escuro */}
      <img
        src={logoDark}
        alt="Logo Hayah Dark"
        className="h-10 hidden dark:block"
      />

    </Link>


        {/* Menu Desktop */}
        <ul className="flex gap-8 items-center">
          <li>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </li>

          <li className="flex items-center gap-8">
            <Link to="/" >Propósito</Link>
            <Link to="/cursos" className="hover:text-blue-500">Treinamentos</Link>
            <Link to="/">Vagas</Link>

            {/* Ícone de perfil */}
            <Link
              to="/perfil"
              aria-label="Perfil"
              className=" text-gray-600 hover:text-blue-500 dark:text-gray-300"
            >
              <FaUser className="w-5 h-5" />
            </Link>

            {/* Botão de tema */}
            <button
              onClick={() => setDark((d) => !d)}
              aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
              className="ml-2 text-gray-600 hover:text-blue-500 dark:text-gray-300 p-1 rounded focus:outline-none focus:ring"
            >
              {dark ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </button>
          </li>
        </ul>

      </div>
    </nav>
  );
}
