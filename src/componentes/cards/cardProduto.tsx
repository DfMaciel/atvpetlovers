import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ViewProduto } from '../interface/iProduto';
import VisualizarServicos from '../modais/visualizarDados/visualizarServico';
import { CardText } from 'react-bootstrap';

type props = {
    produto: ViewProduto
    handleConteudoModal?: (conteudo: JSX.Element | null, titulo: string) => void,
    consumo: string
}

type state = {
    modalProduto: boolean,
    tituloModal: string,
    produto: ViewProduto,
}

export default class CardProdutos extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            modalProduto: false,
            tituloModal: this.props.produto.nome,
            produto: this.props.produto,
        }
    }
    
    handleButtonClick = () => {
        if (this.props.handleConteudoModal !== undefined) {
            this.props.handleConteudoModal (<VisualizarServicos tema="#e3a8f7" servico={this.props.produto} />, this.state.tituloModal);
        }
    }

    render() {
        return (
            <>
                <Card>
                    <Card.Header as="h5">Dados do Produto</Card.Header>
                    <Card.Body>
                    {this.props.consumo === 'sim' ? (
                        <>
                            <CardText>
                                <strong>Nome: </strong><a>{this.props.produto.nome}</a>
                            </CardText>
                            <CardText>
                                <strong>Preço: </strong><a> R$ {this.props.produto.preco}</a>
                            </CardText>
                        </>
                    ):
                    <>
                        <Card.Text>
                            <a> {this.state.produto.nome}</a>
                        </Card.Text>
                        <Button variant="primary" style={{ backgroundColor: '#BA68C8', borderColor: '#BA68C8'}} onClick={() => this.handleButtonClick()}>Ver Detalhes</Button>
                    </>
                    }
                    </Card.Body>
                </Card> 
                <br/>
            </>
        )
    }
}