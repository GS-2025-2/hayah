import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSun, FaMoon } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a2e1a] text-[#dfd4bf] pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* Recursos */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Recursos</h3>
          <ul className="space-y-1">
            <li><Link to="#">Entrevistas Anônimas</Link></li>
            <li><Link to="#">Apenas Avaliações Técnicas</Link></li>
            <li><Link to="#">Inclusão Social</Link></li>
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Empresa</h3>
          <ul className="space-y-1">
            <li><Link to="/">Sobre Hayah</Link></li>
            <li><Link to="https://maps.app.goo.gl/UrtyfuDsWRFBLk5h7">Nosso Escritório</Link></li>
            <li><Link to="#">Privacidade</Link></li>
          </ul>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Links Rápidos</h3>
          <ul className="space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/home">Propósito</Link></li>
            <li><Link to="/Cursos">Cursos</Link></li>
            <li><Link to="/LoginCandidato">Login Candidatos</Link></li>
            <li><Link to="/LoginRecrutador">Login Recrutadores</Link></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Siga-nos</h3>
          <div className="flex space-x-4 text-xl">
            <Link to="#"><FaUser /></Link>
            <Link to="#"><FaSun /></Link>
            <Link to="#"><FaMoon /></Link>
          </div>
          <p className="mt-2">© 2025 Hayah</p>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contato</h3>
          <p>comercial@hayah.com.br</p>
          <p>+55 (11) 98722-6151</p>
          <p className="mt-2 text-xs">Fale diretamente com nossa equipe se houver qualquer dúvida.</p>
        </div>
      </div>
    </footer>
  );
}