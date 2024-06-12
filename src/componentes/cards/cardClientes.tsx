import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import { ViewCliente} from '../interface/iCliente';
import { Modal } from 'react-bootstrap';
import VisualizarCliente from '../modais/visualizarDados/visualizarCliente';
import ListaPets from '../telas/listaPets';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListaServicos from '../telas/listaServicos';
import ListaProdutos from '../telas/listaProdutos';
import '../../index.css'
import FormularioAdicaoPet from '../modais/formulariosAdicao/adicaoPet';
import FormularioAdicaoProduto from '../modais/formulariosAdicao/adicaoProduto';

type props = {
    cliente : ViewCliente
    consumo: string
}

export default function CardClientes (props: props) {
    const [modalCliente, setModalCliente] = useState(false)
    const [tituloModal, setTituloModal] = useState('')
    const [cliente, setCliente] = useState(props.cliente)
    const [tipoModal, setTipoModal] = useState('')
    
    const handleModal = (exibir: boolean, titulo: string, tipoModal: string) => {
            setModalCliente(exibir)
            setTituloModal(titulo)
            setTipoModal(tipoModal)
        }

    const escolherModal = (tipoModal: string) => {
        switch(tipoModal) {
            case 'verdados':
                return <VisualizarCliente tema="#e3a8f7" cliente={cliente}/>
            case 'pets':
                return <ListaPets tema="#e3a8f7" pets={cliente.pets}/>
            case 'produtos':
                return <ListaProdutos verCliente={true} tema="#e3a8f7" produtos={cliente.produtos}/>
            case 'servicos':
                return <ListaServicos verCliente={true} tema="#e3a8f7" servicos={cliente.servicos}/>
            case 'adicionarPet':
                return <FormularioAdicaoPet tema="#e3a8f7" cliente={cliente}/>
            case 'adicionarProduto':
                return <FormularioAdicaoProduto tema="#e3a8f7"/>
            case 'adicionarServico':
                return <FormularioAdicaoProduto tema="#e3a8f7"/>
        }
    }
    return (
        <>
            <Card>
                <Card.Header as="h5">Dados do cliente</Card.Header>
                <Card.Body>
                {props.consumo === '' ? (
                    <Card.Text>
                        <a> {cliente.nome}</a>
                    </Card.Text>
                ):  <Card.Text>
                        <strong>Nome: </strong> <a>{cliente.nome}</a>
                    </Card.Text>
                }
                {props.consumo === '' ? (
                    <ButtonGroup>
                        <Button variant="primary"  style={{ backgroundColor: '#BA68C8', borderColor: '#BA68C8'}} onClick={() => handleModal(true, cliente.nome, 'verdados')}>Ver Detalhes</Button>
                        <DropdownButton variant="primary" menuVariant="dark" className="dropdownCustomizado" as={ButtonGroup} title="Pets" id="bg-nested-dropdown">
                                <Dropdown.Item onClick={() => handleModal(true, 'Lista de Pets', 'pets')}>Lista de Pets</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleModal(true, 'Adicionar Pet', 'adicionarPet')}>Adicionar Pet</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton variant="primary" menuVariant="dark" className="dropdownCustomizado" as={ButtonGroup} title="Produtos" id="bg-nested-dropdown">
                            <Dropdown.Item onClick={() => handleModal(true, 'Produtos consumidos', 'produtos')}>Produtos Consumidos</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleModal(true,'Adicionar Produto', 'adicionarProduto')}>Adicionar Produto</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton variant="primary" menuVariant="dark" className="dropdownCustomizado" as={ButtonGroup} title="Serviços" id="bg-nested-dropdown">
                            <Dropdown.Item onClick={() => handleModal(true, 'Serviços consumidos', 'servicos')}>Serviços Consumidos</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleModal(true, 'Adicionar Serviço', 'adicionarServico')}>Adicionar Serviço</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                ): 
                (
                    <>
                        <Card.Text>
                            <strong>Email: </strong><a>{cliente.email}</a>
                        </Card.Text>
                        <Card.Text>
                            <strong>Telefone: </strong><a>{cliente.telefone}</a>
                        </Card.Text>
                        <Card.Text>
                            <strong>Consumo total: </strong><a>R$ 50</a>
                        </Card.Text>
                        <Card.Text>
                            <strong>Quantidade total: </strong><a>10 itens</a>
                        </Card.Text>
                    </>
                )
                }
                </Card.Body>
            </Card>
            <br/>
            
            <Modal centered size="lg" show={modalCliente} onHide={() => handleModal(false, '', '')}>
            <Modal.Header closeButton>
                <Modal.Title>{tituloModal}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {escolherModal(tipoModal)}
            </Modal.Body>
        </Modal>
        </>
    )
}