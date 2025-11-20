import CardsCursos from "../components/CardsCursos";
import Footer from "../components/Footer";

const sampleCourses = [
  { id: 1, title: 'Curso de Inglês', href: '/cursos/ingles' },
  { id: 2, title: 'Curso de Programação', href: '/cursos/programacao' },
  { id: 3, title: 'Curso de Gestão Pública', href: '/cursos/gestao-publica' },
  { id: 4, title: 'Curso de Espanhol', href: '/cursos/espanhol' },
  { id: 5, title: 'Curso de Excel', href: '/cursos/excel' },
  { id: 6, title: 'Curso de Oratória', href: '/cursos/oratoria' },
  { id: 7, title: 'Curso de Francês', href: '/cursos/frances' },
  { id: 8, title: 'Curso de Lógica', href: '/cursos/logica' },
  { id: 9, title: 'Curso de Marketing Digital', href: '/cursos/marketing-digital' },
];

export default function Cursos() {
  return (
    <div className="min-h-screen bg-[#dfd4bf] dark:bg-[#091c1a] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0a2e1a] mb-8 text-center">Melhore seu currículo!</h1>

        <CardsCursos courses={sampleCourses} />

        <div className="mt-8 flex items-center justify-center gap-4 text-[#0a2e1a]">
          <button className="p-2 rounded border border-[#0a2e1a]">&lt;</button>
          <div>1</div>
          <button className="p-2 rounded border border-[#0a2e1a]">&gt;</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
