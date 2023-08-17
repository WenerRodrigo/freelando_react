import { useState } from "react";
import GrupoRadio from "../../components/Radio/GrupoRadio";
import { Tipografia } from "../../components/Tipografia/Tipografia";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../components/Botao/Botao";
import { Link } from "react-router-dom";

const Interesses = () => {

    const opcoes = [
        {
            valor: 1,
            label: 'TI e Programação',
        },
        {
            valor: 2,
            label: 'Design e Multimídia',
        },
        {
            valor: 3,
            label: 'Revisão',
        },
        {
            valor: 4,
            label: 'Tradução',
        },
        {
            valor: 5,
            label: 'Transcrição',
        },
        {
            valor: 6,
            label: 'Marketing',
        },
    ]

    const [opcao, setOpcao] = useState('');

    return (
        <div style={{ TextAlign: 'center' }}>
            <Tipografia variante="h1" componente="h1">
                Crie seu Cadastro
            </Tipografia>
            <Tipografia variante="h3" componente="h2">
                Qual a área de interesse?
            </Tipografia>
            <GrupoRadio opcoes={opcoes} valor={opcao} onChange={setOpcao} />
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <Link to="/cadastro">
                        <Botao variante="secundaria">Anterior</Botao>
                    </Link>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <div style={{ textAlign: "right" }}>
                        <Link to="/cadastro/dados-pessoais">
                            <Botao>Próxima</Botao>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Interesses;