import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import CardsCandidato from "../components/CardsCandidato";
import cortexLogo from "../assets/cortex.png";

const sampleApplications = [
    { id: 1, company: 'Cortex', logo: cortexLogo, title: 'Analista de Fluxos e Processos', status: 'Entrevista com RH', closingDate: '20/12/2025', canSchedule: true, finished: false, url: '#' },
    { id: 2, company: 'Cortex', logo: cortexLogo, title: 'Analista de Fluxos e Processos', status: 'Finalizada', closingDate: '20/12/2025', canSchedule: true, finished: false, url: '#' },
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