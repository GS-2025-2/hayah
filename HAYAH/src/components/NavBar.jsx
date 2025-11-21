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

  const [showProfileMenu, setShowProfileMenu] = useState(false);

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
      className="w-full p-4 shadow-md fixed top-0 left-0 z-50 bg-[#0a2e1a]"
      style={{ color: '#dfd4bf' }}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logoDark}
            alt="Logo Hayah"
            className="h-10"
            style={{ filter: 'drop-shadow(0 1px 2px #0008)' }}
          />
        </Link>

        {/* Menu Desktop */}
        <ul className="flex gap-8 items-center relative">
          <li>
            <Link to="/" style={{ color: '#dfd4bf' }} className="hover:opacity-80">Home</Link>
          </li>
          <li className="flex items-center gap-8">
            <Link to="/" style={{ color: '#dfd4bf' }} className="hover:opacity-80">Propósito</Link>
            <Link to="/cursos" style={{ color: '#dfd4bf' }} className="hover:opacity-80">Cursos</Link>
           

            {/* Ícone de perfil com menu suspenso */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu((prev) => !prev)}
                aria-label="Perfil"
                style={{ color: '#dfd4bf' }}
                className="hover:opacity-80"
              >
                <FaUser className="w-5 h-5" />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-50 bg-white dark:bg-[#1f1f1f] shadow-lg rounded-md z-50">
                  <Link
                    to="/loginCandidato"
                    className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Login para Candidatos
                  </Link>
                  <Link
                    to="/LoginRecrutador"
                    className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Login para Recrutadores
                  </Link>
                </div>
              )}
            </div>

            {/* Botão de tema */}
            <button
              onClick={() => setDark((d) => !d)}
              aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
              style={{ color: '#dfd4bf' }}
              className="ml-2 p-1 rounded focus:outline-none focus:ring hover:opacity-80"
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