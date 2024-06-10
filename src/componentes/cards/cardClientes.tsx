import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ViewCliente} from '../interface/iCliente';
import { Modal } from 'react-bootstrap';
import VisualizarCliente from '../modais/visualizarDados/visualizarCliente';
import ListaPets from '../telas/listaPets';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import VisualizarServicos from '../modais/visualizarDados/visualizarServico';

type props = {
    cliente : ViewCliente
}

type state = {
    modalCliente: boolean,
    tituloModal: string,
    cliente: ViewCliente,
    tipoModal: string
}

export default class CardClientes extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            modalCliente: false,
            tituloModal: '',
            cliente: this.props.cliente,
            tipoModal: '',
        }
    }

    handleModal = (exibir: boolean, titulo: string, tipoModal: string) => {
        this.setState({
            modalCliente: exibir,
            tituloModal: titulo,
            tipoModal: tipoModal
        })
    }

    escolherModal = (tipoModal: string) => {
        switch(tipoModal) {
            case 'verdados':
                return <VisualizarCliente tema="#e3a8f7" cliente={this.state.cliente}/>
            case 'pets':
                return <ListaPets tema="#e3a8f7" pets={this.state.cliente.pets}/>
            case 'produtos':
                return <VisualizarCliente tema="#e3a8f7" cliente={this.state.cliente}/>
            case 'servicos':
                return <VisualizarServicos tema="#e3a8f7" servico={this.state.cliente.servicos}/>
        }
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
                        <ButtonGroup> 
                            <Button variant="primary"  style={{ backgroundColor: '#BA68C8', borderColor: '#BA68C8'}} onClick={() => this.handleModal(true, this.state.cliente.nome, 'verdados')}>Ver Detalhes</Button>
                            <Button variant="primary" style={{ backgroundColor: '#BA68C8', borderColor: '#BA68C8'}} onClick={() => this.handleModal(true, 'Lista de Pets', 'pets')}>Pets</Button>
                            <Button variant="primary" style={{ backgroundColor: '#BA68C8', borderColor: '#BA68C8'}} onClick={() => this.handleModal(true, 'Produtos consumidos', 'produtos')}>Produtos</Button>
                            <Button variant="primary" style={{ backgroundColor: '#BA68C8', borderColor: '#BA68C8'}} onClick={() => this.handleModal(true, 'Serviços consumidos', 'servicos')}>Serviços</Button>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
                
                <Modal centered size="lg" show={this.state.modalCliente} onHide={() => this.handleModal(false, '', '')}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.tituloModal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.escolherModal(this.state.tipoModal)}
                </Modal.Body>
            </Modal>
         </>
        )
    }
}