import { Card } from "./components/Card/Card";
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema";
import { Styles } from "./components/StylesGlobal/Styles";

function App() {
  return (
    <ProvedorTema>
      <Styles />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
