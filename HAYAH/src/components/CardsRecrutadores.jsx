import React, { useState } from "react";

export default function CandidateCard({ name, cpf, details }) {
  const [openMessage, setOpenMessage] = useState(false);
  const [messageText, setMessageText] = useState("");

  function handleRecommend() {
    const subject = encodeURIComponent(`Recomendação: ${name}`);
    const body = encodeURIComponent(`Gostaria de recomendar o(a) ${name} para oportunidades na sua empresa.\n\nCargo: ${details?.job || "-"}\nCPF: ${cpf}`);
    window.location.href = `mailto:recrutamento@empresa.com?subject=${subject}&body=${body}`;
  }

  function handleSendMessage() {
    setOpenMessage(true);
  }

  function submitMessage() {
    console.log(`Mensagem para ${name}:`, messageText);
    alert("Mensagem enviada com sucesso (demo).");
    setMessageText("");
    setOpenMessage(false);
  }

  return (
    <article
      tabIndex={0}
      className="relative group bg-[#091c1a] dark:bg-[#f2ead8] border-2 border-[#f2ead8] dark:border-[#0a2e1a] rounded-lg p-3 pb-12 w-64 box-border m-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f2ead8] dark:focus:ring-[#123a33] transform transition-all duration-500 hover:-translate-y-1 hover:scale-[1.0]"
    >
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-[#f2ead8] dark:text-[#0a2e1a]">{name}</div>
        <div className="text-sm text-[#f2ead8] opacity-80 dark:text-[#0a2e1a]">CPF: {cpf}</div>
      </div>

      <div className="mt-3 text-sm text-[#f2ead8] dark:text-[#0a2e1a] opacity-0 group-hover:opacity-100 group-focus:opacity-100 max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-700">
        <p><strong>Localização:</strong> {details?.location || "-"}</p>
        <p><strong>Habilidades Técnicas:</strong> {details?.skills || "-"}</p>
        <p><strong>Softskills:</strong> {details?.soft || "-"}</p>
        <p><strong>Experiência:</strong> {details?.experience || "-"}</p>
      </div>

      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex gap-2 justify-between">
        <button
          onClick={handleRecommend}
          className="flex-1 px-3 py-1 rounded-full bg-[#f2ead8] text-[#091c1a] text-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#f2ead8] dark:bg-[#123a33] dark:text-[#dfd4bf]"
          aria-label={`Recomendar ${name}`}
        >
          Recomendar
        </button>

        <button
          onClick={handleSendMessage}
          className="flex-1 px-3 py-1 rounded-full bg-transparent border-2 border-[#f2ead8] text-[#f2ead8] text-sm hover:bg-[#f2ead8] hover:text-[#091c1a] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#f2ead8] dark:border-[#123a33] dark:text-[#123a33] dark:hover:bg-[#123a33] dark:hover:text-white"
          aria-label={`Enviar mensagem para ${name}`}
        >
          Mensagem
        </button>
      </div>

      {openMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpenMessage(false)} aria-hidden />
          <div className="relative z-10 w-full max-w-md bg-[#f2ead8] dark:bg-[#0a2e1a] rounded-lg p-4 shadow-lg">
            <h3 className="text-lg font-semibold text-[#091c1a] dark:text-[#dfd4bf]">Enviar mensagem para {name}</h3>
            <textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              rows={6}
              className="w-full mt-3 p-2 border rounded bg-white dark:bg-[#091c1a] dark:text-[#dfd4bf]"
              placeholder="Digite sua mensagem aqui..."
            />
            <div className="mt-3 flex justify-end gap-2">
              <button onClick={() => setOpenMessage(false)} className="px-3 py-1 rounded bg-gray-200 dark:bg-[#123a33] dark:text-[#dfd4bf]">Cancelar</button>
              <button onClick={submitMessage} className="px-3 py-1 rounded bg-[#091c1a] text-[#f2ead8]">Enviar</button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}