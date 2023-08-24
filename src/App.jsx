import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema";
import { Estilos } from "./components/EstilosGlobais/Estilos";
import { SessaoUsuarioProvider } from "./contexto/SessaoUsuario";


function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <SessaoUsuarioProvider>
      <RouterProvider router={router} />
      </SessaoUsuarioProvider>
    </ProvedorTema>
  )
}

export default App;

