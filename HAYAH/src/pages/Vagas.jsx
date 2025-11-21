import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

import exemploVaga from "../assets/exemploVaga.jpg";


export default function Vagas() {
    return (
        <div className="min-h-screen bg-[#dfd4bf] dark:bg-[#091c1a] transition-colors duration-700 relative text-[#091c1a] dark:text-[#dfd4bf]">
            <Navbar />
            <main className="max-w-6xl mx-auto pt-24 px-4 py-8 ">
                <img src={exemploVaga} alt="Vaga" />
                <br />
                <h1 className="text-3xl font-bold mb-4 text-[#16453F] dark:text-[#4AF297]">Analista de Fluxos e Processos</h1>
                <p className="text-sm mb-2">Publicada em: 31/10/2025 • Valida até: 24/12/2025</p>
                <p className="text-sm mb-6">Local: São Paulo - SP • Modelo: Efetivo - Híbrido • Vaga também para PCD</p>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Sobre a Área</h2>
                    <p>
                        Estamos reestruturando o Pós-Vendas para uma operação de Customer Success escalável e orientada a dados. Trabalhamos com três esteiras:
                    </p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Aquisição & Autonomia (clientes novos)</li>
                        <li>Engajamento & Segmentação (maturação)</li>
                        <li>Retenção & Valor Consultivo (legados)</li>
                    </ul>
                    <p>
                        Buscamos alguém com perfil analítico e técnico para ser a “engenharia” dessa operação.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Missão do Cargo</h2>
                    <p>
                        Como Analista de Fluxos e Processos (CS Ops), você será responsável por desenhar, implementar e otimizar todos os fluxos automatizados que sustentam as jornadas de CS, garantindo eficiência, escala e qualidade.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Responsabilidades</h2>
                    <ul className="list-disc list-inside">
                        <li>Mapear e documentar jornadas e processos de CS.</li>
                        <li>Construir fluxos, automações e Health Scores no Vitally</li>
                        <li>Gerenciar conteúdos, guias e checklists do Pendo.</li>
                        <li>Otimizar métricas de saúde e engajamento.</li>
                        <li>Garantir integridade e integração de dados (CRM, Vitally, Pendo).</li>
                        <li>Monitorar performance e propor melhorias contínuas.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Requisitos</h2>
                    <ul className="list-disc list-inside">
                        <li>Experiência em CS Ops, RevOps ou áreas de processos focadas em CS.</li>
                        <li>Vivência com ferramentas como Vitally, Gainsight, Totango, Sensedata.</li>
                        <li>Conhecimento em plataformas de engajamento (Pendo, Appcues, WalkMe).</li>
                        <li>Forte raciocínio lógico e domínio de fluxos condicionais.</li>
                        <li>Perfil analítico, organizado e orientado à documentação.</li>
                    </ul>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Diferenciais</h2>
                    <ul className="list-disc list-inside">
                        <li>Noções de API e integrações.</li>
                        <li>Experiência com HubSpot ou CRM similar.</li>
                        <li>Vivência em jornadas Tech-Touch.</li>
                        <li>Conhecimento básico de SQL.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Benefícios</h2>
                    <h3 className="text-md font-semibold mb-2">Dia a dia:</h3>
                    <ul className="list-disc list-inside">
                        <li>VR/VA, Gympass/TotalPass, Vittude, auxílio home office.</li>
                    </ul>
                    <h3 className="text-md font-semibold mb-2">Você & Família:</h3>
                    <ul className="list-disc list-inside">
                        <li>Plano de saúde e odontológico, auxílio creche, licenças estendidas, seguro de vida, Day Off de aniversário, Dia da Família, Pausa Mental em dezembro.<br></br>Benefícios conforme política vigente.</li>
                    </ul>
                    <h3 className="text-md font-semibold mb-2">E mais:</h3>
                    <ul className="list-disc list-inside">
                        <li>Propósito claro e impacto direto no crescimento da empresa.</li>
                        <li>Ambiente jovem, colaborativo e meritocrático.</li>
                        <li>Oportunidades reais de desenvolvimento.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Etapas do Processo</h2>
                    <ol className="list-decimal list-inside">
                        <li>Cadastro</li>
                        <li>Talk People</li>
                        <li>Avaliação Técnica</li>
                        <li>Match Cultural</li>
                        <li>Proposta</li>
                        <li>Contratação</li>
                    </ol>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Sobre a Cortex</h2>
                    <p>
                        Líder em inteligência de Go-To-Market no Brasil, desenvolvemos tecnologia de IA e Ciência de Dados para unificar e transformar informações em estratégia. Contamos com grandes investidores como Lightrock, Riverwood e SoftBank. Aqui, você encontrará um ambiente inclusivo, inovador e em constante evolução.
                    </p>
                    <br />
                    <p>#BeCortex — venha construir o futuro com a gente!</p>
                </section>
                
                <hr className="border-t-2 border-[#0a2e1a] dark:border-[#dfd4bf] mt-6 py-1" />
                <div className="mt-8 flex flex-col  gap-4">
                    <h3 className="text-lg font-semibold">Conheça mais sobre nós</h3>
                    <div className="flex gap-4 text-2xl">
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/company/cortex-intelligence/?originalSubdomain=br">
                        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" href="https://www.linkedin.com/company/cortex-intelligence/?originalSubdomain=br">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/>
                        </svg>
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/becortex/">
                        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                        </svg>
                        </a>
                    </div>
                </div>

               
                <div className="flex gap-4 mt-4 pt-6">
                        <button className="bg-[#0a2e1a] text-[#dfd4bf] dark:bg-[#4AF297] dark:text-[#091c1a] py-2 px-6 rounded-lg hover:opacity-90 transition">
                            Candidatar-se
                        </button>
                        <button                         
                        onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                alert("Link copiado para a área de transferência!");
                            }}
                        className="border border-[#0a2e1a] text-[#0a2e1a] dark:border-[#4AF297] dark:text-[#4AF297] py-2 px-6 rounded-lg hover:bg-[#0a2e1a] hover:text-[#dfd4bf] dark:hover:bg-[#4AF297] dark:hover:text-[#091c1a] transition">
                            Compartilhar
                        </button>
                </div>

            </main>
            <Footer />
        </div>
    );
}