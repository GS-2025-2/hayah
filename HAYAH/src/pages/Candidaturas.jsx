import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import CardsCandidato from "../components/CardsCandidato";

const sampleApplications = [
    { id: 1, company: 'BTA', logo: '', title: 'Desenvolvedor Senior React', status: 'Entrevista com RH', closingDate: '20/12/2025', canSchedule: true, finished: false, url: '#' },
    { id: 2, company: 'Unibave', logo: '', title: 'Coordenador de TI', status: 'Perfil em analise', closingDate: '10/12/2025', canSchedule: false, finished: false, url: '#' },
    { id: 3, company: 'Outros', logo: '', title: 'Analista', status: 'Finalizado', closingDate: '01/10/2025', canSchedule: false, finished: true, url: '#' }
];

export default function Candidaturas() {
    return (
        <div className="min-h-screen bg-[#dfd4bf] dark:bg-[#091c1a] transition-colors duration-700 relative text-[#091c1a] dark:text-[#dfd4bf]">
            <Navbar />

            <main className="px-7 py-28 mx-auto bg-[#dfd4bf] dark:bg-[#091c1a]" style={{ maxWidth: 1100 }}>
                <div className="rounded-lg p-6 bg-[#dfd4bf] dark:bg-[#091c1a]">
                    <CardsCandidato applications={sampleApplications} />
                </div>
            </main>

            <Footer />
        </div>
    );
}