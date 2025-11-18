import Navbar from "../components/NavBar";

export default function Home() {
  return (
    <div
      className="
        min-h-screen 
        bg-white dark:bg-[#091c1a]
        transition-colors duration-700
        relative
      "
    >
      <Navbar />

      {/* Conteúdo da página */}
      <div className="pt-24 px-6">
        <h1 className="text-3xl font-bold dark:text-white">
          Bem-vindo(a) ao HAYAH!
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Aqui fica o conteúdo da sua home...
        </p>
      </div>

      {/* Onda fixa no rodapé */}
      <div className="fixed bottom-0 left-0 w-full -z-10 pointer-events-none select-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="
            w-full 
            transition-colors duration-700
            fill-[#dfd4bf] dark:fill-[#052826]
          "
        >
          <path d="M0,160L80,170.7C160,181,320,203,480,218.7C640,235,800,245,960,229.3C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}
