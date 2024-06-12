import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ViewPet } from '../interface/iPet';
import { Modal } from 'react-bootstrap';
import VisualizarPets from '../modais/visualizarDados/visualizarPet';

type props = {
    pet: ViewPet
}

export default function CardPets (props: props) {
    const [modalPet, setModalPet] = useState(false)
    const [tituloModal, setTituloModal] = useState(props.pet.nome)
    const [pet, setPet] = useState(props.pet)


    const handleModal = (exibir: boolean, titulo: string) => {
        setModalPet(exibir)
        setTituloModal(titulo)
    }

    return (
        <>
            <Card>
                <Card.Header as="h5">Dados do pet</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <a> {pet.nome}</a>
                    </Card.Text>
                    <Button variant="primary"  style={{ backgroundColor: '#BA68C8', borderColor: '#BA68C8'}} onClick={() => handleModal(true, pet.nome)}>Ver Detalhes</Button>
                </Card.Body>
            </Card>
            <br/>
            
            <Modal centered size="lg" show={modalPet} onHide={() => handleModal(false, '')}>
            <Modal.Header closeButton>
                <Modal.Title>{tituloModal}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VisualizarPets tema="#e3a8f7" pet={pet}/>
            </Modal.Body>
        </Modal>
        </>
    )
}