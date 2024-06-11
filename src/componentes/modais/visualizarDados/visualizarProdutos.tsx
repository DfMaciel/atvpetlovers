import { Component } from "react";
import Form from 'react-bootstrap/Form';
import { FloatingLabel, InputGroup } from "react-bootstrap";
import { ViewProduto } from "../../interface/iProduto";

type props = {
    tema: string
    produto: ViewProduto
}

type state = {
    produto: ViewProduto
}

export default class VisualizarProdutos extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            produto: this.props.produto
        }
    }
    
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            ...prevState,
            produto: {
                ...prevState.produto,
                [name]: value
            }
        }));
    }

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <FloatingLabel controlId="floatingInput" label="Nome" className="mb-3">
                            <Form.Control type="text" name="nome" className="form-control" placeholder="Nome" value={this.state.produto.nome} onChange={this.handleInputChange} aria-label="Nome" aria-describedby="basic-addon1"/>
                        </FloatingLabel>
                    </div>
                    <div className="input-group mb-3">
                        <FloatingLabel controlId="floatingInput" label="Preço" className="mb-3">
                            <Form.Control type="number" name="preco" value={this.state.produto.preco} onChange={this.handleInputChange} className="form-control" placeholder="Preço" aria-label="Tipo" aria-describedby="basic-addon1" />
                        </FloatingLabel>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Editar</button>
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Excluir</button>
                    </div>
                </form>
            </div>
        )
    }
}