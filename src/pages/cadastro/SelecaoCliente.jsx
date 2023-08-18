import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../components/Tipografia/Tipografia";
import cliente from "./assets/cliente.png";
import freela from "./assets/freela.png";
import { Link } from "../../components/Link/Link";
import { Link as RouterLink } from 'react-router-dom';
import { useCadastroUsuarioContext } from "../../contexto/CadastroUsuario";

const SelecaoCliente = () => {

    const { setPerfil } = useCadastroUsuarioContext()

    return (
        <div style={{ TextAlign: 'center' }}>
            <Tipografia variante="h1" componente="h1">
                Crie seu Cadastro
            </Tipografia>
            <Tipografia variante="h3" componente="h2">
                Como podemos te ajudar?
            </Tipografia>
            <Row>
                <Col md={6} sm={12}>
                    <RouterLink to="interesses" onClick={() => setPerfil('cliente')}>
                        <img src={cliente} alt="" />
                        <Tipografia variante="body" componente="body">
                            Sou cliente e preciso de um Freela!
                        </Tipografia>
                    </RouterLink>
                </Col>
                <Col md={6} sm={12}>
                    <img src={freela} alt="" />
                    <Tipografia variante="body" componente="body">
                        Sou Freela e preciso de cliente!
                    </Tipografia>
                </Col>
            </Row>
            <div>
                <Tipografia variante="body2" componente="body2">
                    já tem conta ?
                </Tipografia>
                <p>
                    <Link variante="secundaria">Faça Login</Link>
                </p>
            </div>
        </div>
    )
}

export default SelecaoCliente;