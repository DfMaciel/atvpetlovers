import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type props = {
    cliente :{
        nome: string,
        nomeSocial: string,
        email: string,
        cpf: string,
        dataEmissaoCpf: string,
        rg: string,
        dataEmissaoRg: string,
        telefone: string,
        pets: {
            nome: string,
            tipo: string,
            raca: string,
            genero: string,
        },
        id: number
    }
}

export default class CardClientes extends Component<props> {
    render() {
        return (
            <Card>
                <Card.Header as="h5">Dados do cliente</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <a> {this.props.cliente.nome}</a>
                    </Card.Text>
                    <Button variant="primary">Ver Detalhes</Button>
                </Card.Body>
            </Card>
        )
    }
}