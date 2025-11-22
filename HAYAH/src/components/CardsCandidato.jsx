import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CardsCandidato({ applications = [] }) {
  const [tab, setTab] = useState("em")

  const shown = applications.filter(a => tab === 'em' ? !a.finished : a.finished)

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-center text-2xl md:text-3xl font-semibold text-[#123a33] dark:text-[#dfd4bf]">Bem Vindo(a)!!</h1>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#123a33] dark:text-[#dfd4bf]">Minhas Candidaturas</h2>
          <div className="flex items-center gap-4">
            <nav className="text-sm text-[#123a33] dark:text-[#dfd4bf]">
              <button className={`mr-4 pb-1 ${tab==='em' ? 'border-b-2 border-[#123a33]' : 'text-opacity-70'}`} onClick={() => setTab('em')}>Em Andamento</button>
              <button className={`${tab==='fin' ? 'border-b-2 border-[#123a33]' : 'text-opacity-70'}`} onClick={() => setTab('fin')}>Finalizadas</button>
            </nav>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {shown.map((app) => (
            <article key={app.id} className="bg-[#f2ead8] dark:bg-[#091c1a] border-2 border-[#0a2e1a] dark:border-[#dfd4bf] rounded-lg p-4 flex items-center gap-4">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-md border p-2">
                {app.logo ? <img src={app.logo} alt={app.company} className="max-h-full max-w-full" /> : <div className="text-xs text-center">Logo</div>}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-[#0a2e1a] dark:text-[#dfd4bf]">{app.title}</div>
                    <div className="text-sm text-[#123a33] dark:text-[#dfd4bf]">Status: <span className="font-medium">{app.status}</span></div>
                    <div className="text-xs text-[#123a33] dark:text-[#dfd4bf] mt-1">Encerramento da Vaga: {app.closingDate}</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button className="px-3 py-1 rounded border border-[#0a2e1a] dark:border-[#dfd4bf] text-[#0a2e1a] dark:text-[#dfd4bf] bg-transparent hover:bg-[#e9e0d0] dark:hover:bg-[#12302b]">Desistir</button>

                  {app.canSchedule ? (
                    <button className="px-3 py-1 rounded bg-[#123a33] text-white">Agendar</button>
                  ) : (
                    <Link to={app.url || '#'} className="px-3 py-1 rounded border border-[#0a2e1a] dark:border-[#dfd4bf] text-[#0a2e1a] dark:text-[#dfd4bf]">Veja a Vaga</Link>
                  )}
                </div>
              </div>
            </article>
          ))}

          {shown.length === 0 && (
            <div className="col-span-full text-center text-[#123a33] dark:text-[#dfd4bf]">Nenhuma candidatura nesta aba.</div>
          )}
        </div>
      </div>
    </section>
  )
}
