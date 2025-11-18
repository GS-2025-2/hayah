import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSun, FaMoon } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-[#0a2e1a] text-[#dfd4bf] pt-12 pb-6 relative">
      {/* Simulação de borda ondulada */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-12"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Conteúdo do rodapé */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Contatos:</h3>
          <p>comercial@hayah.com.br</p>
          <p>+55 (11) 98722-6151</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">Participantes:</h3>
          <p>Tomás Braga</p>
          <p>Clara Barbosa</p>
          <p>Pedro Lanin</p>
        </div>

        <div className="text-sm">
          <p>Bla bla bla — 2025 © direitos autorais</p>
        </div>
      </div>
    </footer>
  );
}