import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../components/Tipografia/Tipografia";
import { Link } from "react-router-dom";
import { Botao } from "../../components/Botao/Botao";
import styled from "@emotion/styled";
import conclusao from "./assets/cliente-concluido.png";

const ImagemEstilizada = styled.img`
    max-width: 100%;
    border-radius: 16px;
`

const Concluido = () => {
    return (
        <>
            <div>
                <Tipografia variante="h1" componente="h1">
                    Seu perfil está completo!
                </Tipografia>
                <Tipografia variante="h3" componente="h2">
                    Agora é só começar a se conectar com os seus melhores freelancers do mercado!
                </Tipografia>
            </div>
            <figure>
                <ImagemEstilizada src={conclusao} alt="" />
            </figure>
            <Row justify="center">
                <Col lg={6} md={6} sm={6} style={{ textAlign: 'center' }}>
                    <Link to='/cadastro'>
                        <Botao variante="secundaria">
                            Voltar para a home
                        </Botao>
                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default Concluido;