import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Cadastro() {

  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    cpf: "",
    senha: "",
    localizacao: "",
    habilidades_tecnicas: "",
    softskills: "",
    experiencias: "",
    formacao: "",
    idiomas: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const forumlario = {
      cpf: form.cpf,
      senha: form.senha,
      localizacao: form.localizacao,
      habilidades_tecnicas: form.habilidades_tecnicas.split(","),
      softskills: form.softskills.split(","),
      experiencias: form.experiencias.split(","),
      formacao: form.formacao.split(","),
      idiomas: form.idiomas.split(","),
    };

    const response = await fetch("http://localhost:5000/cadastro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(forumlario)
    });

    const data = await response.json();
    alert(data.mensagem);

    if (data.mensagem === "Cadastro realizado") {
      navigate("/loginCandidato");
    }

  }


  return (
    <div className="min-h-screen bg-[#dfd4bf] dark:bg-[#091c1a] transition-colors duration-700">
      <Navbar />

      <div className="flex flex-col items-center pt-30 py-30 px-10">
        <div className="w-full max-w-4xl mb-10">
          <hr className="border-t-2 border-[#0a2e1a] dark:border-[#dfd4bf] mb-6" />
          <h1 className="text-center text-4xl font-bold text-[#091c1a] dark:text-[#dfd4bf]">
            Informe seus dados para criar sua nova conta.
          </h1>
          <hr className="border-t-2 border-[#0a2e1a] dark:border-[#dfd4bf] mt-6 py-6" />
        </div>

        <form className="w-full max-w-5xl bg-[#C4B79E] dark:bg-[#D3E0DD] p-7 rounded-xl shadow-lg space-y-6"
        onSubmit={handleSubmit}>

          <div className="bg-[#C4B79E] dark:bg-[#D3E0DD] border-l-4 border-[#0a2e1a] dark:border-[#16453F] p-4  ">
            <p className="text-sm md:text-base text-[#0a2e1a] dark:text-[#091c1a] font-medium">
              <strong className="font-semibold uppercase">Observação:</strong> Contas de <strong>recrutador</strong> só podem ser criadas mediante contratação de um dos nossos pacotes. Para isso, entre em contato com nossa equipe pelo e-mail <a href="mailto:Comercial@hayah.com.br" className="underline hover:text-[#0a2e1a] dark:hover:text-[#4AF297]">comercial@hayah.com.br</a>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              className="rounded px-4 py-2 focus:outline-none focus:ring 
                        bg-transparent text-[#091c1a] border-[#091c1a] 
                        dark:bg-transparent dark:text-[#16453F] dark:border-[#16453F] placeholder-[#16453F] dark:placeholder-[#132e2a]
                        border-4"
              value={form.cpf}
              onChange={handleChange}
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              className="rounded px-4 py-2 focus:outline-none focus:ring 
                        bg-transparent text-[#091c1a] border-[#091c1a] 
                        dark:bg-transparent dark:text-[#16453F] dark:border-[#16453F] placeholder-[#16453F] dark:placeholder-[#132e2a]
                        border-4"
              value={form.senha}
              onChange={handleChange}
            />

            <input
              type="text"
              name="localizacao"
              placeholder="Endereço"
              className="rounded px-4 py-2 focus:outline-none focus:ring 
                        bg-transparent text-[#091c1a] border-[#091c1a] 
                        dark:bg-transparent dark:text-[#16453F] dark:border-[#16453F] placeholder-[#16453F] dark:placeholder-[#132e2a]
                        border-4"
              value={form.localizacao}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Idiomas"
              name="idiomas"
              className="rounded px-4 py-2 focus:outline-none focus:ring 
                        bg-transparent text-[#091c1a] border-[#091c1a] 
                        dark:bg-transparent dark:text-[#16453F] dark:border-[#16453F] placeholder-[#16453F] dark:placeholder-[#132e2a]
                        border-4"
              value={form.idiomas}
              onChange={handleChange}
            />
          </div>

          <textarea
            placeholder="Habilidades Técnicas"
            name="habilidades_tecnicas"
            className="w-full h-24 rounded px-4 py-2 border-4 border-[#091c1a] bg-transparent text-[#091c1a] focus:outline-none focus:ring 
           dark:border-[#16453F] dark:bg-transparent dark:text-[#16453F] placeholder-[#16453F] dark:placeholder-[#132e2a]"
            value={form.habilidades_tecnicas}
            onChange={handleChange}
          />
          <textarea
            placeholder="Softskills"
            name="softskills"
            className="w-full h-24 rounded px-4 py-2 border-4 border-[#091c1a] bg-transparent text-[#091c1a] focus:outline-none focus:ring 
           dark:border-[#16453F] dark:bg-transparent dark:text-[#16453F] placeholder-[#16453F] dark:placeholder-[#132e2a]"
            value={form.softskills}
            onChange={handleChange}
          />
          <textarea
            placeholder="Experiências"
            name="experiencias"
            className="w-full h-24 rounded px-4 py-2 border-4 border-[#091c1a] bg-transparent text-[#091c1a] focus:outline-none focus:ring 
           dark:border-[#16453F] dark:bg-transparent dark:text-[#16453F] placeholder-[#16453F] dark:placeholder-[#132e2a]"
            value={form.experiencias}
            onChange={handleChange}
          />
          <textarea
            placeholder="Formação"
            name="formacao"
            className="w-full h-24 rounded px-4 py-2 border-4 border-[#091c1a] bg-transparent text-[#091c1a] focus:outline-none focus:ring 
           dark:border-[#16453F] dark:bg-transparent dark:text-[#16453F] placeholder-[#16453F] dark:placeholder-[#132e2a]"
            value={form.formacao}
            onChange={handleChange}
          />


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
