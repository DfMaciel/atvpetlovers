import { Component } from "react";
import Form from 'react-bootstrap/Form';

type props = {
    tema: string
}

const produtos = [
    {
        nome: 'Produto 1',
        preco: 30,
    },
    {
        nome: 'Produto 2',
        preco: 50,
    }
]

export default class FormularioAdicaoProduto extends Component<props> {
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <Form>
                    <Form.Select className="form-control" aria-describedby="basic-addon1">
                        <option value="" selected disabled>Clique para ver os produtos</option>
                        {produtos.map((produto, index) => (
                            <option key={index} value={index}>
                                {produto.nome}
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