import { Link } from "react-router-dom";

export default function CardsCursos({ courses = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {courses.map((c) => (
        <article key={c.id} className="bg-[#dfd4bf] border-2 border-[#0a2e1a] rounded-lg p-4 shadow-sm flex flex-col">
          <div className="flex-1 flex items-center justify-center p-4">
            {c.image ? (
              <img src={c.image} alt={c.title} className="max-h-20 object-contain" />
            ) : (
              <div className="w-20 h-20 rounded-full bg-[#0a2e1a] text-[#dfd4bf] flex items-center justify-center font-bold">{(c.title || "").split(" ").slice(0,2).map(s=>s[0]).join("")}</div>
            )}
          </div>

          <h3 className="mt-4 text-lg font-semibold text-[#0a2e1a]">{c.title}</h3>

          <div className="mt-4">
            <Link to={c.href || '#'} aria-label={`Abrir curso ${c.title}`} className="inline-block w-full text-center border-2 border-[#0a2e1a] text-[#0a2e1a] rounded-md py-2 px-3 hover:bg-[#0a2e1a] hover:text-[#dfd4bf] transition">
              {c.cta || 'Acessar'}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}