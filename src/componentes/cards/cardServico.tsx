import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal } from 'react-bootstrap';
import { ViewServico } from '../interface/iServico';
import VisualizarServicos from '../modais/visualizarDados/visualizarServico';

type props = {
    servico: ViewServico
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
            tituloModal: '',
            servico: this.props.servico,
        }
    }

    handleModal = (exibir: boolean, titulo: string) => {
        this.setState({
            modalServico: exibir,
            tituloModal: titulo,
        })
    }

    render() {
        return (
            <>
                <Card>
                    <Card.Header as="h5">Dados do serviço</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <a> {this.state.servico.nome}</a>
                        </Card.Text>
                        <Button variant="primary"  style={{ backgroundColor: '#BA68C8', borderColor: '#BA68C8'}} onClick={() => this.handleModal(true, this.state.servico.nome)}>Ver Detalhes</Button>
                    </Card.Body>
                </Card>
                
                <Modal centered size="lg" show={this.state.modalServico} onHide={() => this.handleModal(false, '')}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.tituloModal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <VisualizarServicos tema="#e3a8f7" servico={this.state.servico}/>
                </Modal.Body>
            </Modal>
         </>
        )
    }
}