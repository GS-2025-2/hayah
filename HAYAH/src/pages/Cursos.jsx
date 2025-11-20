import CardsCursos from "../components/CardsCursos";
import Footer from "../components/Footer";
import logo1 from '../assets/culturainglesa.webp';
import logo2 from '../assets/alura.png';
import logo3 from '../assets/fgv.png';
import logo4 from '../assets/cna.png';
import logo7 from '../assets/aliancafrancesa.png';
import logo8 from '../assets/udemy.png';
import logo9 from '../assets/belasartes.png';

const sampleCourses = [
  { id: 1, title: 'Curso de Inglês', href: 'https://www.culturainglesa.com.br', image: logo1, imageStyle: { width: 'auto', height: '100%', objectFit: 'contain', padding: '1rem' } },
  { id: 2, title: 'Curso de Programação', href: 'https://www.alura.com.br/', image: logo2, imageStyle: { width: 'auto', height: '100%', objectFit: 'contain', padding: '1rem' } },
  { id: 3, title: 'Curso de Gestão Pública', href: 'https://graduacao-online.fgv.br/curso/gestao-publica?utm_source=google&utm_medium=cpa&utm_campaign=ebape_graduacao-tecnologica_conversao&utm_content=search_primeiro-impacto_na_gestao-publica-texto-2&gad_source=1&gad_campaignid=22609943662&gbraid=0AAAAAC0IsFUnaq65A8NK4QSlfD_rq7JZm&gclid=CjwKCAiA8vXIBhAtEiwAf3B-gxo0MgVdDU-42rXwcCr7u-XJkshLVwINAZqjyv7HCWHYphjn4HZKTxoCnBcQAvD_BwE', image: logo3, imageStyle: { width: 'auto', height: '100%', objectFit: 'contain', padding: '1rem' } },
  { id: 4, title: 'Curso de Espanhol', href: 'https://www.cna.com.br/curso-de-espanhol', image: logo4, imageStyle: { width: 'auto', height: '100%', objectFit: 'contain', padding: '1rem' } },
  { id: 5, title: 'Curso de Excel', href: 'https://www.alura.com.br/formacao-excel?utm_term=curso%20de%20excel&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Cursos+-+Campanha+Unificada&utm_source=google&utm_medium=cpc&campaign_id=10211097486_101231556926_673319933461&utm_id=10211097486_101231556926_673319933461&hsa_acc=7964138385&hsa_cam=%5BSearch%5D+%5BPerformance%5D+-+Cursos+-+Campanha+Unificada&hsa_grp=101231556926&hsa_ad=673319933461&hsa_src=g&hsa_tgt=kwd-119107943&hsa_kw=curso%20de%20excel&hsa_mt=p&hsa_net=google&hsa_ver=3&gad_source=1&gad_campaignid=10211097486&gbraid=0AAAAADpqZIA_VJEfXc7Ot5DxMQdcy59DP&gclid=CjwKCAiA8vXIBhAtEiwAf3B-g360gUZ6SIt25GJ81bKE3VhwZECsIJFteZKrbFALx5CGDEEz426jexoCpT8QAvD_BwE', image: logo2, imageStyle: { width: 'auto', height: '100%', objectFit: 'contain', padding: '1rem' } },
  { id: 6, title: 'Curso de Oratória', href: 'https://www.alura.com.br/curso-online-oratoria-conquiste-atencao-seu-publico?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+%5BCursos%5D+-+DSA+-+Escola+Inova%C3%A7%C3%A3o+%26+Gest%C3%A3o&utm_source=google&utm_medium=cpc&campaign_id=21215649534_164498894074_697550537249&utm_id=21215649534_164498894074_697550537249&hsa_acc=7964138385&hsa_cam=%5BSearch%5D+%5BPerformance%5D+%5BCursos%5D+-+DSA+-+Escola+Inova%C3%A7%C3%A3o+%26+Gest%C3%A3o&hsa_grp=164498894074&hsa_ad=697550537249&hsa_src=g&hsa_tgt=dsa-2299591633356&hsa_kw=&hsa_mt=&hsa_net=google&hsa_ver=3&gad_source=1&gad_campaignid=21215649534&gbraid=0AAAAADpqZIAp7t17l7AE2il2R8jnpu2tW&gclid=CjwKCAiA8vXIBhAtEiwAf3B-g2zUVpUpTVf7wL7uhNq3nQk5W64w_IeyHRU6MyXdGVo2INUezwIahhoC5woQAvD_BwE', image: logo2, imageStyle: { width: 'auto', height: '100%', objectFit: 'contain', padding: '1rem' } },
  { id: 7, title: 'Curso de Francês', href: 'https://aliancafrancesaonline.com.br/', image: logo7, imageStyle: { width: 'auto', height: '100%', objectFit: 'contain', padding: '1rem' } },
  { id: 8, title: 'Curso de Lógica', href: 'https://www.udemy.com/course/introducao-logica/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_DSA_Gamma_NonP_la.PT_cc.BR_Subs&campaigntype=Search&portfolio=Brazil&language=PT&product=Course&test=&audience=DSA&topic=&priority=Gamma&funnel=Conversion&utm_content=&utm_term=_._ag_190920049891_._ad_773550771278_._kw__._de_c_._dm__._pl__._ti_dsa-2495030840807_._li_1001773_._pd__._&matchtype=&gad_source=1&gad_campaignid=23007120188&gbraid=0AAAAADROdO2P0a2URfUBz_XL3jtuh7yAC&gclid=CjwKCAiA8vXIBhAtEiwAf3B-g7wZNQzuPpgYPRUDOE6_wexKtkImwu3VuMgfm_bVBm6sJmN5fKyfLBoCEQQQAvD_BwE&couponCode=CP251120G2', image: logo8, imageStyle: { width: 'auto', height: '100%', objectFit: 'contain', padding: '1rem' } },
  { id: 9, title: 'Curso de Marketing Digital', href: 'https://www.belasartes.br/pos-graduacao/matriz-cursos-de-pos-graduacao/comunicacao-e-marketing-digital/?gad_source=1&gad_campaignid=21399277171&gbraid=0AAAAAC_t6v7guOVdHuoDW_pzfAQlRKTgU&gclid=CjwKCAiA8vXIBhAtEiwAf3B-gx0WfdL3K9AtOTfDmwm7jwkilsALeHUqAigBtY4KBZLDm_sgRwP9JhoCrU8QAvD_BwE', image: logo9, imageStyle: { width: 'auto', height: '100%', objectFit: 'contain', padding: '1rem' } },
];

export default function Cursos() {
  return (
    <div className="min-h-screen bg-[#dfd4bf] dark:bg-[#091c1a] transition-colors duration-700 relative text-[#091c1a] dark:text-[#dfd4bf]">

      <header className="bg-[#e9e0d0]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-end">
          <div className="flex items-center gap-4"></div>
        </div>
        <div className="h-1 bg-[#dfd4bf]" />
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
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
