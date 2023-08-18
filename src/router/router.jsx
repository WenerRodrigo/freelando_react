import { createBrowserRouter } from "react-router-dom";
import LayoutBase from "../pages/LayoutBase";
import DadosPessoais from "../pages/cadastro/DadosPessoais";
import Interesses from "../pages/cadastro/Interesses";
import LayoutBaseCadastro from "../pages/cadastro/LayoutBaseCadastro";
import SelecaoCliente from "../pages/cadastro/SelecaoCliente";
import Concluido from "../pages/cadastro/Concluido";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        children: [
            {
                path:'cadastro',
                element: <LayoutBaseCadastro />,
                children: [
                    {
                        path: '',
                        element: <SelecaoCliente />
                    },
                    {
                        path: 'interesses',
                        element: <Interesses />
                    },
                    {
                        path: 'dados-pessoais',
                        element: <DadosPessoais />
                    },
                    {
                        path: 'concluido',
                        element: <Concluido />
                    }
                ]
            }
        ],
    },
]);