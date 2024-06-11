import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ViewServico } from '../interface/iServico';
import VisualizarServicos from '../modais/visualizarDados/visualizarServico';
import { CardText } from 'react-bootstrap';

type props = {
    servico: ViewServico
    handleConteudoModal?: (conteudo: JSX.Element | null, titulo: string) => void, 
    consumo: string
}

type state = {
    modalServico: boolean,
    tituloModal: string,
    servico: ViewServico,
}

export default class CardServicos extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            modalServico: false,
            tituloModal: this.props.servico.nome,
            servico: this.props.servico,
        }
    }
    
    handleButtonClick = () => {
        if (this.props.handleConteudoModal !== undefined) {
        this.props.handleConteudoModal(<VisualizarServicos tema="#e3a8f7" servico={this.props.servico} />, this.state.tituloModal);
        }
    }

    render() {
        return (
            <>
                <Card>
                    <Card.Header as="h5">Dados do serviço</Card.Header>
                    <Card.Body>
                    {this.props.consumo === 'sim' ? (
                        <>
                            <CardText>
                                <strong>Nome: </strong><a>{this.props.servico.nome}</a>
                            </CardText>
                            <CardText>
                                <strong>Preço: </strong><a>R$ {this.props.servico.preco}</a>
                            </CardText>
                        </>
                    ):
                        <>
                            <Card.Text>
                                <a> {this.state.servico.nome}</a>
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