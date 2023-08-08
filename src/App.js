import { CampoTexto } from "./components/CampoTexto/CampoTexto";
import { Card } from "./components/Card/Card";
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema";
import { Styles } from "./components/StylesGlobal/Styles";
import { Tipografia } from "./components/Tipografia/Tipografia";

function App() {
  return (
    <ProvedorTema>
      <Styles />
      <Card>
        <Tipografia variante="h1" componente="h1">Freelando</Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers.
          Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
        </Tipografia>
        <CampoTexto titulo="Nome Completo"/>
      </Card>
    </ProvedorTema>
  );
}

export default App;
