/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect, useState } from "react"
import { viewCliente } from "../interface/iCliente"
import { Card, Button, Modal } from "react-bootstrap"

export default function CardClientes ({clienteEscolhido}: {clienteEscolhido: viewCliente}) {
    const [modalCliente, setModalCliente] = useState(false)
    const [tituloModal, setTituloModal] = useState('')
    const [cliente, setCliente] = useState(clienteEscolhido)
    const [tipoModal, setTipoModal] = useState('')
    
    const handleModal = (exibir: boolean, titulo: string) => {
            setModalCliente(exibir)
            setTituloModal(titulo)
            setTipoModal(tipoModal)
    }

    return (
        <>
            <Card>
                <Card.Header as="h5">Dados do cliente</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <strong>Nome: </strong><a>{cliente.nome}</a>
                    </Card.Text>
                    <Card.Text>
                        <strong>Email: </strong><a>{cliente.email}</a>
                    </Card.Text>
                </Card.Body>
                <Button variant="danger" onClick={() => handleModal(true, cliente.nome)}>Ver Detalhes</Button>
            </Card>
            <br/>

            <Modal centered size="lg" show={modalCliente} onHide={() => handleModal(false, '')}>
            <Modal.Header closeButton>
                <Modal.Title>{tituloModal}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <VerCliente cliente={cliente}/> */}
            </Modal.Body>
        </Modal>
        </>
    )
}