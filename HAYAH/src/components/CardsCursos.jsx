import { Link } from "react-router-dom";

export default function CardsCursos({ courses = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {courses.map((c) => {
        const defaultImgHeight = '9rem';
        const containerHeight = (c.imageStyle && c.imageStyle.height) ? c.imageStyle.height : defaultImgHeight;

        return (
          <article key={c.id} className="bg-[#dfd4bf] border-2 border-[#0a2e1a] rounded-lg overflow-hidden shadow-sm flex flex-col">
            {c.image ? (
              <div className="w-full flex items-center justify-center bg-transparent" style={{ height: containerHeight }}>
                <img
                  src={c.image}
                  alt={c.title}
                  className={c.imageClass || 'max-h-full max-w-full'}
                  style={{ objectFit: (c.imageStyle && c.imageStyle.objectFit) || 'contain', padding: (c.imageStyle && c.imageStyle.padding) || 0, width: (c.imageStyle && c.imageStyle.width) || 'auto', height: (c.imageStyle && c.imageStyle.height) || '100%' }}
                />
              </div>
            ) : (
              <div className="w-full flex items-center justify-center bg-[#0a2e1a] text-[#dfd4bf]" style={{ height: containerHeight }}>
                <div className="font-bold text-2xl">{(c.title || "").split(" ").slice(0,2).map(s=>s[0]).join("")}</div>
              </div>
            )}

            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-[#0a2e1a]">{c.title}</h3>

              <div className="mt-4 mt-auto">
                <Link to={c.href || '#'} aria-label={`Abrir curso ${c.title}`} className="inline-block w-full text-center border-2 border-[#0a2e1a] text-[#0a2e1a] rounded-md py-2 px-3 hover:bg-[#0a2e1a] hover:text-[#dfd4bf] transition">
                  {c.cta || 'Acessar'}
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}