import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Cadastro() {
  return (
    <div className="min-h-screen bg-[#dfd4bf] dark:bg-[#091c1a] transition-colors duration-700">
      <Navbar />

      <div className="flex flex-col items-center pt-30 py-30 px-10">
        {/* Frase com linhas acima e abaixo */}
        <div className="w-full max-w-4xl mb-10">
          <hr className="border-t-2 border-[#0a2e1a] dark:border-[#dfd4bf] mb-6" />
          <h1 className="text-center text-4xl font-bold text-[#091c1a] dark:text-[#dfd4bf]">
            Informe seus dados para criar sua nova conta.
          </h1>
          <hr className="border-t-2 border-[#0a2e1a] dark:border-[#dfd4bf] mt-6 py-6" />
        </div>

        {/* Formulário mais afastado */}
        <form className="w-full max-w-5xl bg-[#C4B79E] dark:bg-[#D3E0DD] p-7 rounded-xl shadow-lg space-y-6">

          {/* Observação destacada */}
          <div className="bg-[#C4B79E] dark:bg-[#D3E0DD] border-l-4 border-[#0a2e1a] dark:border-[#16453F] p-4  ">
            <p className="text-sm md:text-base text-[#0a2e1a] dark:text-[#091c1a] font-medium">
              <strong className="font-semibold uppercase">Observação:</strong> Contas de <strong>recrutador</strong> só podem ser criadas mediante contratação de um dos nossos pacotes. Para isso, entre em contato com nossa equipe pelo e-mail <a href="mailto:Comercial@hayah.com.br" className="underline hover:text-[#0a2e1a] dark:hover:text-[#4AF297]">comercial@hayah.com.br</a>.
            </p>
          </div>

          {/* Inputs abaixo da observação */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="CPF"
              className="rounded px-4 py-2 focus:outline-none focus:ring 
                        bg-transparent text-[#091c1a] border-[#091c1a] 
                        dark:bg-transparent dark:text-[#dfd4bf] dark:border-[#16453F] placeholder-[#16453F] dark:placeholder-[#132e2a]
                        border-4"
            />
            <input
              type="password"
              placeholder="Senha"
              className="rounded px-4 py-2 focus:outline-none focus:ring 
                        bg-transparent text-[#091c1a] border-[#091c1a] 
                        dark:bg-transparent dark:text-[#dfd4bf] dark:border-[#16453F] placeholder-[#16453F] dark:placeholder-[#132e2a]
                        border-4"
            />
            <input
              type="password"
              placeholder="Nova Senha"
              className="rounded px-4 py-2 focus:outline-none focus:ring 
                        bg-transparent text-[#091c1a] border-[#091c1a] 
                        dark:bg-transparent dark:text-[#dfd4bf] dark:border-[#16453F] placeholder-[#16453F] dark:placeholder-[#132e2a]
                        border-4"
            />
            <input
              type="text"
              placeholder="Endereço"
              className="rounded px-4 py-2 focus:outline-none focus:ring 
                        bg-transparent text-[#091c1a] border-[#091c1a] 
                        dark:bg-transparent dark:text-[#dfd4bf] dark:border-[#16453F] placeholder-[#16453F] dark:placeholder-[#132e2a]
                        border-4"
            />
            <input
              type="text"
              placeholder="Idiomas"
              className="rounded px-4 py-2 focus:outline-none focus:ring 
                        bg-transparent text-[#091c1a] border-[#091c1a] 
                        dark:bg-transparent dark:text-[#dfd4bf] dark:border-[#16453F] placeholder-[#16453F] dark:placeholder-[#132e2a]
                        border-4"
            />
          </div>

          <textarea
            placeholder="Habilidades Técnicas"
            className="w-full h-24 rounded px-4 py-2 border-4 border-[#091c1a] bg-transparent text-[#091c1a] focus:outline-none focus:ring 
           dark:border-[#16453F] dark:bg-transparent dark:text-[#dfd4bf] placeholder-[#16453F] dark:placeholder-[#132e2a]"
          />
          <textarea
            placeholder="Softskills"
            className="w-full h-24 rounded px-4 py-2 border-4 border-[#091c1a] bg-transparent text-[#091c1a] focus:outline-none focus:ring 
           dark:border-[#16453F] dark:bg-transparent dark:text-[#dfd4bf] placeholder-[#16453F] dark:placeholder-[#132e2a]"
          />
          <textarea
            placeholder="Experiências"
            className="w-full h-24 rounded px-4 py-2 border-4 border-[#091c1a] bg-transparent text-[#091c1a] focus:outline-none focus:ring 
           dark:border-[#16453F] dark:bg-transparent dark:text-[#dfd4bf] placeholder-[#16453F] dark:placeholder-[#132e2a]"
          />
          <textarea
            placeholder="Formação"
            className="w-full h-24 rounded px-4 py-2 border-4 border-[#091c1a] bg-transparent text-[#091c1a] focus:outline-none focus:ring 
           dark:border-[#16453F] dark:bg-transparent dark:text-[#dfd4bf] placeholder-[#16453F] dark:placeholder-[#132e2a]"
          />

          <div className="py-2">
            <label className="block text-lg font-medium text-[#091c1a] dark:text-[#091c1a] py-2">
              Anexe seus Certificados:
            </label>
            <input
              type="file"
              className="file:border file:border-[#0a2e1a] file:text-[#0a2e1a] 
                        dark:file:border-[#16453F] dark:file:text-[#16453F] 
                        file:py-2 file:px-6 file:rounded-lg file:text-sm file:font-medium 
                        file:bg-transparent file:shadow-xl 
                        text-[#091c1a] dark:text-[#091c1a]"
            />
          </div>

          <div className="flex justify-end">
           <button
              type="submit"
              className="bg-[#0a2e1a] text-[#dfd4bf] py-3 px-6 rounded-lg shadow-xl transition hover:bg-[#0c3a24] 
                        dark:bg-[#4AF297] dark:text-[#091c1a] dark:hover:bg-[#3ebd8f]"
            >
              Concluir
          </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}