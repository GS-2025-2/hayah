import React, { useMemo, useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import CandidateCard from "../components/CardsRecrutadores";

const sampleData = [
  {
    job: "Desenvolvedor Senior React",
    candidates: [
      { name: "Candidato 1", cpf: "000.000.000-05", details: { location: "Porto Alegre", skills: "React, JavaScript", soft: "Comunicação, Criatividade", experience: "3 anos como Dev Front-end na WebTech" } },
      { name: "Candidato 2", cpf: "000.000.000-02", details: { location: "Rio de Janeiro", skills: "React", soft: "Proatividade", experience: "3 anos" } },
      { name: "Candidato 3", cpf: "000.000.000-03", details: { location: "Belo Horizonte", skills: "React, TypeScript", soft: "Liderança", experience: "6 anos" } }
    ]
  },
  {
    job: "Estagiário de Marketing",
    candidates: [
      { name: "Candidato 4", cpf: "000.000.000-04", details: { location: "Curitiba", skills: "SEO", soft: "Criatividade", experience: "6 meses" } },
      { name: "Candidato 5", cpf: "000.000.000-05", details: { location: "Porto Alegre", skills: "Redes Sociais", soft: "Organização", experience: "1 ano" } },
      { name: "Candidato 6", cpf: "000.000.000-06", details: { location: "Salvador", skills: "Copywriting", soft: "Comunicação", experience: "8 meses" } }
    ]
  },
  {
    job: "Gerente de vendas",
    candidates: [
      { name: "Candidato 7", cpf: "000.000.000-07", details: { location: "Manaus", skills: "Negociação", soft: "Foco", experience: "4 anos" } },
      { name: "Candidato 8", cpf: "000.000.000-08", details: { location: "Fortaleza", skills: "CRM", soft: "Liderança", experience: "5 anos" } },
      { name: "Candidato 9", cpf: "000.000.000-09", details: { location: "Recife", skills: "Vendas B2B", soft: "Resiliência", experience: "7 anos" } }
    ]
  }
];

export default function Recrutador() {
  const [cityFilter, setCityFilter] = useState("");
  const [jobFilter, setJobFilter] = useState("");
  const [techFilter, setTechFilter] = useState("");

  const { cities, jobs, techs } = useMemo(() => {
    const citySet = new Set();
    const jobSet = new Set();
    const techSet = new Set();

    sampleData.forEach((g) => {
      jobSet.add(g.job);
      g.candidates.forEach((c) => {
        if (c.details?.location) citySet.add(c.details.location);
        const skills = (c.details?.skills || "").split(",").map(s => s.trim()).filter(Boolean);
        skills.forEach(s => techSet.add(s));
      });
    });

    return { cities: Array.from(citySet).sort(), jobs: Array.from(jobSet).sort(), techs: Array.from(techSet).sort() };
  }, []);

  const filteredGroups = useMemo(() => {
    const techLower = techFilter.trim().toLowerCase();

    return sampleData
      .filter(g => (jobFilter ? g.job === jobFilter : true))
      .map(g => {
        const candidates = g.candidates.filter(c => {
          const cityMatch = cityFilter ? (c.details?.location || "").toLowerCase() === cityFilter.toLowerCase() : true;
          const techMatch = techFilter
            ? (c.details?.skills || "").toLowerCase().includes(techLower)
            : true;
          return cityMatch && techMatch;
        });
        return { job: g.job, candidates };
      })
      .filter(g => g.candidates.length > 0);
  }, [cityFilter, jobFilter, techFilter]);

  return (
    <div className="bg-[#f2ead8] dark:bg-[#091c1a] min-h-screen">
      <Navbar />

      <main className="px-7 py-30 mx-auto bg-[#f2ead8] dark:bg-[#091c1a]" style={{ maxWidth: 1100 }}>
        <div className="rounded-lg p-6 bg-[#f2ead8] dark:bg-[#091c1a]">
          <h1 className="text-center text-4xl font-semibold text-[#123a33] dark:text-[#dfd4bf]">Bem Vindo(a)!!</h1>

          <div className="flex justify-between items-center gap-4 mt-10 mb-4 flex-wrap">
            <div className="flex items-center gap-3">
              <label className="text-sm text-[#123a33] dark:text-[#dfd4bf]">Cidade</label>
              <select
                value={cityFilter}
                onChange={e => setCityFilter(e.target.value)}
                className="px-3 py-1 rounded border border-[#c9c0ad] dark:border-[#dfd4bf] bg-white dark:bg-[#091c1a] text-[#123a33] dark:text-[#dfd4bf]"
              >
                <option value="">Todas</option>
                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm text-[#123a33] dark:text-[#dfd4bf]">Área</label>
              <select
                value={jobFilter}
                onChange={e => setJobFilter(e.target.value)}
                className="px-3 py-1 rounded border border-[#c9c0ad] dark:border-[#dfd4bf] bg-white dark:bg-[#091c1a] text-[#123a33] dark:text-[#dfd4bf]"
              >
                <option value="">Todas</option>
                {jobs.map((j) => <option key={j} value={j}>{j}</option>)}
              </select>
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm text-[#123a33] dark:text-[#dfd4bf]">Tecnologia</label>
              <input
                value={techFilter}
                onChange={e => setTechFilter(e.target.value)}
                placeholder="ex: React"
                className="px-3 py-1 rounded border border-[#c9c0ad] dark:border-[#dfd4bf] bg-white dark:bg-[#091c1a] text-[#123a33] dark:text-[#dfd4bf]"
              />
            </div>

            <div className="ml-auto">
              <button
                onClick={() => { setCityFilter(""); setJobFilter(""); setTechFilter(""); }}
                className="px-9 py-1 rounded-full bg-[#123a33] text-white dark:bg-[#dfd4bf] dark:text-[#0a2e1a] border border-transparent dark:border-[#0a2e1a] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#123a33] dark:focus:ring-[#dfd4bf]"
              >
                Limpar
              </button>
            </div>
          </div>

          {filteredGroups.length === 0 ? (
            <p className="text-center text-[#123a33] dark:text-[#dfd4bf]">Nenhum candidato encontrado com esses filtros.</p>
          ) : (
            filteredGroups.map((group, idx) => (
              <section key={idx} className="mb-7">
                <h2 className="pb-2 border-b-2 border-[#c9c0ad] dark:border-[#dfd4bf] text-[#123a33] dark:text-[#dfd4bf]">{group.job}</h2>
                <div className="flex flex-wrap items-start gap-4 mt-4">
                  {group.candidates.map((c, i) => (
                    <CandidateCard key={i} name={c.name} cpf={c.cpf} details={c.details} />
                  ))}
                </div>
              </section>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}