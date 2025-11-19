import { Link } from "react-router-dom";
import Wavify from "react-wavify"; // static wave above footer

export default function Footer() {
  return (
    <>
      <div className="relative -mb-2" aria-hidden>
        <Wavify
          fill="#0a2e1a"
          paused={true}
          options={{ height: 10, amplitude: 200, speed: 0.2, points: 2 }}
          className="w-full h-20 block"
        />
      </div>

      <footer className="bg-[#0a2e1a] text-[#dfd4bf] pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm justify-items-center">
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
              {/* LinkedIn */}
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/>
              </svg>
              {/* Instagram */}
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              {/* WhatsApp */}
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.52 3.48a12.07 12.07 0 0 0-17.04 0c-4.7 4.7-4.7 12.33 0 17.04a12.07 12.07 0 0 0 17.04 0c4.7-4.7 4.7-12.33 0-17.04zm-8.52 17.02c-1.7 0-3.36-.44-4.8-1.28l-5.08 1.33 1.36-5.04c-.84-1.44-1.28-3.1-1.28-4.8 0-5.06 4.12-9.18 9.18-9.18s9.18 4.12 9.18 9.18-4.12 9.18-9.18 9.18zm5.44-7.08c-.08-.14-.3-.22-.62-.38-.32-.16-1.9-.94-2.2-1.04-.3-.1-.52-.16-.74.16-.22.32-.86 1.04-1.06 1.26-.2.22-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.92-1.78-2.24-.18-.32-.02-.5.14-.66.14-.14.32-.38.48-.58.16-.2.22-.34.34-.56.12-.22.06-.42-.02-.58-.08-.16-.74-1.78-1.02-2.44-.26-.62-.52-.54-.74-.54-.2 0-.42-.02-.64-.02-.22 0-.58.08-.88.38-.3.3-1.16 1.14-1.16 2.78 0 1.64 1.18 3.22 1.34 3.44.16.22 2.32 3.54 5.62 4.82.78.32 1.38.5 1.86.64.78.24 1.5.2 2.06.12.62-.1 1.9-.78 2.18-1.54.28-.76.28-1.42.2-1.54z"/>
              </svg>
            </div>
            <p className="mt-2">© 2025 Hayah</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contato</h3>
            <p>comercial@hayah.com.br</p>
            <p>+55 (11) 98722-6151</p>
            <p className="mt-2 text-xs">Fale diretamente com nossa equipe se houver qualquer dúvida.</p>
          </div>
        </div>
      </footer>
    </>
  );
}