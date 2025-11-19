    import {createBrowserRouter} from 'react-router-dom'
    import App from '../App.jsx'
    import Home from '../pages/Home.jsx'
    import Cadastro from '../pages/Cadastro.jsx'
    import Candidaturas from '../pages/Candidaturas.jsx'
    import Cursos from '../pages/Cursos.jsx'
    import LoginCandidato from '../pages/LoginCandidato.jsx'
    import LoginRecrutador from '../pages/LoginRecrutador.jsx'
    import Perfil from '../pages/Perfil.jsx'
    import Recrutador from '../pages/Recrutador.jsx'

    export const router = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "cadastro", element: <Cadastro /> },
      { path: "candidaturas", element: <Candidaturas /> },
      { path: 'cursos', element: <Cursos />},
      { path: 'loginCandidato', element: <LoginCandidato />},
      { path: 'loginRecrutador', element: <LoginRecrutador />},
      { path: "perfil", element: <Perfil /> },
      { path: 'recrutador', element: <Recrutador />},
    ],
      }
        ])
