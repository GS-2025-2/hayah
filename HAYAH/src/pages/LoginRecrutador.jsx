import Footer from "../components/Footer";
import Navbar from "../components/NavBar";


export default function LoginRecrutador() {
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

      {/* Conteúdo centralizado */}
      <div className="flex flex-col items-center justify-center pt-45 px-6">
        <div className="container mx-auto text-center mb-8">
          <h1 className="text-5xl font-bold dark:text-white">
            Acesso ao Portal do Recrutador
          </h1>
        </div>

        <div className="container pt-15 max-w-md mx-auto">
            <form className="flex flex-col gap-4 w-full" action="login">
                    <label className="text-lg font-medium dark:text-white" htmlFor="cpf">
                        CPF:
                    </label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        className="border border-gray-900 rounded px-4 py-2 focus:outline-none focus:ring dark:bg-[#16453F] dark:text-white"
                    />

                    <label className="text-lg font-medium dark:text-white" htmlFor="senha">
                        Senha:
                    </label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        className="border border-gray-900 rounded px-4 py-2 focus:outline-none focus:ring dark:bg-[#16453F] dark:text-white"
                    />

                    {/* Link de recuperação de senha */}
                    <div className="text-right">
                        <a
                        href="/recuperar-senha"
                        className="text-sm text-[#0a2e1a] dark:text-[#dfd4bf] hover:underline"
                        >
                        Esqueci minha senha
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 mx-auto bg-[#0a2e1a] text-white py-2 px-6 w-65 rounded-full hover:bg-[#0c3a24] transition shadow-xl"
                    >
                        Acessar conta
                    </button>
            </form>
        <div className="container py-13 max-w-md mx-auto mt-auto">
                <div className="text-center">
                       <h3 className="text-[#0a2e1a] dark:text-[#dfd4bf]">
                        Não possui Login? 
                       </h3>
                        <button type="submit" className="mt-4 mx-auto border border-[#0a2e1a] text-[#0a2e1a] dark:border-[#dfd4bf] dark:text-[#dfd4bf] py-2 px-6 w-75 rounded-lg hover:bg-[#0a2e1a] hover:text-white dark:hover:bg-[#dfd4bf] dark:hover:text-[#091c1a] transition shadow-xl">
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