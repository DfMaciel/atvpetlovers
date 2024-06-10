import { Component } from "react";
import Form from 'react-bootstrap/Form';
import { FloatingLabel, InputGroup } from "react-bootstrap";
import { ViewServico } from "../../interface/iServico";

type props = {
    tema: string
    servico: ViewServico
}

type state = {
    servico: ViewServico
}

export default class VisualizarServicos extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            servico: this.props.servico
        }
    }
    
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            ...prevState,
            servic: {
                ...prevState.servico,
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
                            <Form.Control type="text" name="nome" className="form-control" placeholder="Nome" value={this.state.servico.nome} onChange={this.handleInputChange} aria-label="Nome" aria-describedby="basic-addon1"/>
                        </FloatingLabel>
                    </div>
                    <div className="input-group mb-3">
                        <FloatingLabel controlId="floatingInput" label="Preço" className="mb-3">
                            <Form.Control type="number" name="tipo" value={this.state.servico.preco} onChange={this.handleInputChange} className="form-control" placeholder="Preço" aria-label="Tipo" aria-describedby="basic-addon1" />
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