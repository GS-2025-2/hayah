import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Wavify from "react-wavify";

import fotoEntrvista from "../assets/entrevistasHome.jpg";
import fotoEquity from "../assets/equityProposito.jpg";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#dfd4bf] dark:bg-[#091c1a] transition-colors duration-700 relative text-[#091c1a] dark:text-[#dfd4bf]">
      <Navbar />

      <header className="bg-[#e9e0d0]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-end">
          <div className="flex items-center gap-4"></div>
        </div>
        <div className="h-1 bg-[#dfd4bf]" />
      </header>

      <section className="max-w-6xl mx-auto px-3 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-[#091c1a] dark:text-[#dfd4bf]">Encontre o profissional apenas pelas qualificações</h1>
            <p className="mt-4 text-[#091c1a] dark:text-[#dfd4bf]">Converta o candidato a se inscrever na plataforma. Suba vagas e encontre talentos com critérios claros e inclusivos.</p>
            <div className="mt-6 flex gap-3 items-center">
              <input placeholder="Coloque seu e-mail corporativo" className="flex-1 p-3 rounded border border-[#cfc6b6] bg-white dark:bg-[#071912] text-[#091c1a] dark:text-[#dfd4bf] placeholder-[#6b6b6b] dark:placeholder-[#cfc6b6]" />
              <button className="bg-[#091c1a] text-[#dfd4bf] dark:bg-[#dfd4bf] dark:text-[#091c1a] px-4 py-2 rounded">Enviar</button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md aspect-video bg-[#f3efe6] dark:bg-[#071716] rounded-lg shadow-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/2H4eNdrBcUc"
                title="Vídeo Hayah"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <div className="relative -mb-20" aria-hidden>
        <Wavify
          fill="#0a2e1a"
          paused={true}
          options={{ height: 10, amplitude: 200, speed: 0.2, points: 2 }}
          className="w-full h-20 block"
        />
      </div>
      <section className="mt-16">
        <div className="bg-[#0a2e1a] text-[#dfd4bf]">
          <div className="max-w-6xl mx-auto px-3 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-30 items-center">
              <div className="md:order-last">
                <h2 className="text-3xl font-bold">Entrevistas totalmente as cegas</h2>
                <p className="mt-4 leading-relaxed">
                  Encontrar profissionais por qualificação e oportunidade, com
                  foco em inclusão e acessibilidade. Trabalhamos para conectar
                  talentos a oportunidades reais, com processos justos e
                  transparentes.
                </p>
                <p className="mt-4">Saiba mais sobre como atuamos.</p>
              </div>
              <div className="flex justify-center md:justify-start md:order-first">
                <div className="w-150 h-60 bg-white/5 rounded-lg flex items-center justify-center text-[#0a2e1a]">
                  <img src={fotoEntrvista} alt="Diversidade e inclusão" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative -mb-20" aria-hidden>
        <Wavify
          fill="#0a2e1a"
          paused={true}
          options={{ height: 10, amplitude: 200, speed: 0.2, points: 2 }}
          className="w-full h-20 block"
          style={{ transform: "rotate(180deg)" }}
        />
      </div>
        <div className="bg-[#dfd4bf] dark:bg-[#091c1a] text-[#091c1a] dark:text-[#dfd4bf]">
          <div className="max-w-6xl mx-auto px-3 py-30">
              <div id="proposito" className="grid grid-cols-1 md:grid-cols-2 gap-30 items-center">
              <div>
                <h2 className="text-3xl font-bold">Nosso Propósito</h2>
                <p className="mt-4 leading-relaxed">
                  Nosso propósito é construir um processo de recrutamento verdadeiramente justo, onde oportunidades são definidas por talento, não por aparência. Acreditamos que remover vieses e ampliar o acesso à capacitação transforma vidas e fortalece empresas. Por isso, unimos tecnologia, anonimização e educação para conectar pessoas e vagas de maneira ética, inclusiva e baseada em competências reais.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="w-150 h-60 bg-white/5 rounded-lg flex items-center justify-center text-[#dfd4bf]">
                  <img src={fotoEquity} alt="Equity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
}
