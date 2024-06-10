import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ViewCliente} from './interface/iCliente';
import { Modal } from 'react-bootstrap';
import VisualizarCliente from './modais/visualizarDados/visualizarCliente';

type props = {
    cliente : ViewCliente
}

type state = {
    modalCliente: boolean,
    tituloModal: string,
    cliente: ViewCliente,
}

export default class CardClientes extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            modalCliente: false,
            tituloModal: '',
            cliente: this.props.cliente,
        }
    }

    handleModal = (exibir: boolean, conteudo: ViewCliente | null, titulo: string) => {
        this.setState({
            modalCliente: exibir,
            tituloModal: titulo
        })
    }

    render() {
        return (
            <>
                <Card>
                    <Card.Header as="h5">Dados do cliente</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <a> {this.state.cliente.nome}</a>
                        </Card.Text>
                        <Button variant="primary" onClick={() => this.handleModal(true, this.state.cliente, this.state.cliente.nome)}>Ver Detalhes</Button>
                        {/* <Button variant="primary" onClick={() => this.handleModal(true, this.state.cliente)}>Pets</Button>
                        <Button variant="primary" onClick={() => this.handleModal(true, this.state.cliente)}>Produtos</Button>
                        <Button variant="primary" onClick={() => this.handleModal(true, this.state.cliente)}>Serviços</Button> */}
                    </Card.Body>
                </Card>
                <Modal centered size="lg" show={this.state.modalCliente} onHide={() => this.handleModal(false, null, '')}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.tituloModal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <VisualizarCliente tema="#e3a8f7" cliente={this.state.cliente}/>
                </Modal.Body>
            </Modal>
         </>
        )
    }
}