import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function LoginCandidato() {
  return (
    <div
      className="
        min-h-screen 
        bg-[#dfd4bf] dark:bg-[#091c1a]
        transition-colors duration-700
        relative
      "
    >
      <Navbar />

      {/* Conteúdo centralizado */}
      <div className="flex flex-col items-center justify-center pt-45 px-6">
        <div className="container mx-auto text-center mb-8">
          <h1 className="text-5xl font-bold text-[#091c1a] dark:text-[#dfd4bf]">
            Acesso ao Portal do Candidato
          </h1>
        </div>

        <div className="container pt-15 max-w-md mx-auto mb-30">
            <form className="flex flex-col gap-4 w-full" action="login">
                    <label className="text-lg font-medium dark:text-[#dfd4bf]" htmlFor="cpf">
                        CPF:
                    </label>
                      <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        className="rounded px-4 py-2 focus:outline-none focus:ring 
                          bg-transparent text-[#091c1a] border-[#091c1a] 
                          dark:bg-transparent dark:text-[#dfd4bf] dark:border-[#16453F] 
                          border-4"
                      />
                  <label className="text-lg font-medium dark:text-[#dfd4bf]" htmlFor="senha">
                    Senha:
                  </label>
                    <input
                      type="password"
                      id="senha"
                      name="senha"
                      className="rounded px-4 py-2 focus:outline-none focus:ring 
                          bg-transparent text-[#091c1a] border-[#091c1a] 
                          dark:bg-transparent dark:text-[#dfd4bf] dark:border-[#16453F] 
                          border-4"
                 />


                    {/* Link de recuperação de senha */}
                    <div className="text-right">
                        <a
                        href="/recuperar-senha"
                        className="text-sm text-[#0a2e1a] dark:text-[#4AF297] hover:underline"
                        >
                        Esqueci minha senha
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 mx-auto bg-[#0a2e1a] text-white py-2 px-6 w-65 rounded-full hover:bg-[#0c3a24] transition shadow-xl
                        dark:bg-[#4AF297] dark:text-[#091c1a] dark:hover:bg-[#3ebd8f]"
                    >
                        Acessar conta
                    </button>
            </form>
        <div className="container py-13 max-w-md mx-auto mt-auto">
                <div className="text-center">
                       <h3 className="text-[#0a2e1a] dark:text-[#dfd4bf] font-medium text-font-[Istok Web]">
                        Não possui Login? 
                       </h3>
                        <button className="mt-4 mx-auto border border-[#0a2e1a] text-[#0a2e1a] dark:border-[#4AF297] dark:text-[#4AF297] py-2 px-6 w-75 rounded-lg hover:bg-[#0a2e1a] houver:border-[#dfd4bf] hover:text-[#dfd4bf] dark:hover:border-[#3ebd8f] dark:hover:text-[#3ebd8f] transition shadow-xl" >
                            Criar Conta
                        </button>
                </div>
         </div>
        </div>
      </div>
    <Footer />

    </div>
  );
}