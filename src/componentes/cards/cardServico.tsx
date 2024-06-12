import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ViewServico } from '../interface/iServico';
import VisualizarServicos from '../modais/visualizarDados/visualizarServico';
import { CardText } from 'react-bootstrap';
import { useState } from 'react';

type props = {
    servico: ViewServico
    handleConteudoModal?: (conteudo: JSX.Element | null, titulo: string) => void, 
    consumo: string
}

export default function CardServicos (props: props) {
    const [tituloModal, setTituloModal] = useState(props.servico.nome)
    const [servico, setServico] = useState(props.servico)
    
    const handleButtonClick = () => {
        if (props.handleConteudoModal !== undefined) {
        props.handleConteudoModal(<VisualizarServicos tema="#e3a8f7" servico={props.servico} />, tituloModal);
        }
    }
    return (
        <>
            <Card>
                <Card.Header as="h5">Dados do serviço</Card.Header>
                <Card.Body>
                {props.consumo === 'sim' ? (
                    <>
                        <CardText>
                            <strong>Nome: </strong><a>{props.servico.nome}</a>
                        </CardText>
                        <CardText>
                            <strong>Preço: </strong><a>R$ {props.servico.preco}</a>
                        </CardText>
                    </>
                ):
                    <>
                        <Card.Text>
                            <a> {servico.nome}</a>
                        </Card.Text>
                        <Button variant="primary" style={{ backgroundColor: '#BA68C8', borderColor: '#BA68C8'}} onClick={() => handleButtonClick()}>Ver Detalhes</Button>
                    </>
                }
                </Card.Body>
            </Card> 
            <br/>
        </>
    )
}