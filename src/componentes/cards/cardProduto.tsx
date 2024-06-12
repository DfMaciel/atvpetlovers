import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ViewProduto } from '../interface/iProduto';
import VisualizarServicos from '../modais/visualizarDados/visualizarServico';
import { CardText } from 'react-bootstrap';

interface props {
    produto: ViewProduto
    handleConteudoModal?: (conteudo: JSX.Element | null, titulo: string) => void,
    consumo: string
}

export default function CardProdutos (props: props) {
    const [tituloModal, setTituloModal] = useState(props.produto.nome)
    const [produto, setProduto] =useState(props.produto)

    const handleButtonClick = () => {
        if (props.handleConteudoModal !== undefined) {
            props.handleConteudoModal (<VisualizarServicos tema="#e3a8f7" servico={props.produto} />, tituloModal);
        }
    }
    return (
        <>
            <Card>
                <Card.Header as="h5">Dados do Produto</Card.Header>
                <Card.Body>
                {props.consumo === 'sim' ? (
                    <>
                        <CardText>
                            <strong>Nome: </strong><a>{props.produto.nome}</a>
                        </CardText>
                        <CardText>
                            <strong>Preço: </strong><a> R$ {props.produto.preco}</a>
                        </CardText>
                    </>
                ):
                <>
                    <Card.Text>
                        <a> {produto.nome}</a>
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