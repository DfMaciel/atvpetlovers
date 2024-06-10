import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ViewPet } from '../interface/iPet';
import { Modal } from 'react-bootstrap';
import VisualizarPets from '../modais/visualizarDados/visualizarPet';

type props = {
    pet: ViewPet
}

type state = {
    modalPet: boolean,
    tituloModal: string,
    pet: ViewPet,
}

export default class CardPets extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            modalPet: false,
            tituloModal: '',
            pet: this.props.pet,
        }
    }

    handleModal = (exibir: boolean, titulo: string) => {
        this.setState({
            modalPet: exibir,
            tituloModal: titulo,
        })
    }

    render() {
        return (
            <>
                <Card>
                    <Card.Header as="h5">Dados do pet</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <a> {this.state.pet.nome}</a>
                        </Card.Text>
                        <Button variant="primary"  style={{ backgroundColor: '#BA68C8', borderColor: '#BA68C8'}} onClick={() => this.handleModal(true, this.state.pet.nome)}>Ver Detalhes</Button>
                    </Card.Body>
                </Card>
                
                <Modal centered size="lg" show={this.state.modalPet} onHide={() => this.handleModal(false, '')}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.tituloModal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <VisualizarPets tema="#e3a8f7" pet={this.state.pet}/>
                </Modal.Body>
            </Modal>
         </>
        )
    }
}