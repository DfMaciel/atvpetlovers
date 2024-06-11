import { Component } from "react";
import Form from 'react-bootstrap/Form';

type props = {
    tema: string
}

const servicos = [
    {
        nome: 'Serviço 1',
        preco: 50,
    },
    {
        nome: 'Serviço 2',
        preco: 60,
    },
    {
        nome: 'Serviço 3',
        preco: 70,
    },
    {
        nome: 'Serviço 4',
        preco: 80,
    },
    {
        nome: 'Serviço 5',
        preco: 90,
    }
]

export default class FormularioAdicaoServico extends Component<props> {
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <Form>
                    <Form.Select className="form-control" aria-describedby="basic-addon1">
                        <option value="" selected disabled>Clique para ver os serviços</option>
                        {servicos.map((servico, index) => (
                            <option key={index} value={index}>
                                {servico.nome}
                            </option>
                    ))}
                    </Form.Select> 
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema, marginTop: '2%' }}>Adicionar</button>
                    </div>
                </Form>
            </div>
        )
    }
}