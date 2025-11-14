import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="w-full p-4 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          HAYAH
        </Link>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-controls="mobile-menu"
            aria-expanded={open}
            className="p-2 rounded-md focus:outline-none focus:ring"
          >
            {/* simple hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </li>

          <li>
            <Link to="/cursos" className="hover:text-blue-500">Cursos</Link>
          </li>
        </ul>

      </div>

      {/* Mobile menu (shows when toggle is open) */}
      {open && (
        <div id="mobile-menu" className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 gap-2">
            <li>
              <Link to="/" onClick={() => setOpen(false)} className="block w-full">Home</Link>
            </li>
            <li>
              <Link to="/cursos" onClick={() => setOpen(false)} className="block w-full">Cursos</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
