    import {createBrowserRouter} from 'react-router-dom'
    import App from '../App.jsx'
    import Home from '../pages/Home.jsx'
    import About from '../pages/About.jsx'
    import Candidatos from '../pages/Candidatos.jsx'
    import Recrutador from '../pages/Recrutador.jsx'
    import Vagas from '../pages/Vagas.jsx'


    export const router = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "about", element: <About /> },
      { path: "candidatos", element: <Candidatos /> },
      { path: 'recrutador', element: <Recrutador />},
      { path: 'Vagas', element: <Vagas />},
    ],
    }
        ])
