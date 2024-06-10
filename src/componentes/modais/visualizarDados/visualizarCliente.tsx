import { Component } from "react";
import InputMask from 'react-input-mask';
import { ViewCliente } from "../../interface/iCliente";
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from "react-bootstrap";

type props = {
    tema: string
    cliente: ViewCliente
}

type state = {
    cliente: ViewCliente
    mostrarListaRg: boolean
    rgEscolhido: number | null
}

export default class VisualizarCliente extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            cliente: this.props.cliente,
            mostrarListaRg: false,
            rgEscolhido: null
        }
    }
    
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            ...prevState,
            cliente: {
                ...prevState.cliente,
                [name]: value
            }
        }));
    }

    mostrarListaRg = () => {
        this.setState(prevState => ({
            mostrarListaRg: !prevState.mostrarListaRg
        }));
    }

    handeEscolhaRg = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const indice = Number(event.target.value);
        this.setState({
            rgEscolhido: indice
        })
    }

    handleEdicaoRg = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.state.rgEscolhido !== null) {
            const { name, value } = event.target;
            const novoRg = this.state.cliente.rg.map((rg, rgIndex) => {
                if (this.state.rgEscolhido !== rgIndex) return rg;
                return { ...rg, [name]: value };
            });

            this.setState(prevState => ({
                cliente: { ...prevState.cliente, rg: novoRg }
            }));
        }
    }

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <FloatingLabel controlId="floatingInput" label="Nome" className="mb-3">
                            <Form.Control type="text" name="nome" className="form-control" placeholder="Nome" value={this.state.cliente.nome} onChange={this.handleInputChange} aria-label="Nome" aria-describedby="basic-addon1"/>
                        </FloatingLabel>
                    </div>
                    <div className="input-group mb-3">
                        <FloatingLabel controlId="floatingInput" label="Nome Social" className="mb-3">
                            <Form.Control type="text" name="nomeSocial" value={this.state.cliente.nomeSocial} onChange={this.handleInputChange} className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                        </FloatingLabel>
                    </div>
                    <div className="input-group mb-3">
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                            <input type="text" name="email" value={this.state.cliente.email} onChange={this.handleInputChange} className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" /> 
                        </FloatingLabel>

                    </div>
                    <div className="input-group mb-3">
                        <InputMask mask="999.999.999-99" name="cpf" value={this.state.cliente.cpf.numero} className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" disabled/>
                    </div>
                    <div className="input-group mb-3">
                    <input type="text" name="dataEmissaoCPF" value={this.state.cliente.cpf.dataEmissao} className="form-control" placeholder="Data de Emissão do CPF" aria-label="Data de emissão cpf" aria-describedby="basic-addon1" disabled/>
                    </div>
                    <div className="input-group mb-3">
                        <Form.Select value={this.state.rgEscolhido || ""} className="form-control" aria-describedby="basic-addon1" onChange={(event) => this.handeEscolhaRg(event)}>
                            {this.state.cliente.rg.map((rg, index) => (
                                <option key={index} value={index}>
                                    {rg.numero}
                                </option>
                        ))}
                        </Form.Select>                  
                    </div>
                    <div className="input-group mb-3">
                    {this.state.rgEscolhido !== null && (
                        <div>
                            <InputMask mask="999.999.999-99" name="numero" className="form-control" aria-describedby="basic-addon1" value={this.state.cliente.rg[this.state.rgEscolhido].numero} onChange={this.handleEdicaoRg} />
                            <input type="text" name="dataEmissao" className="form-control" aria-describedby="basic-addon1" value={this.state.cliente.rg[this.state.rgEscolhido].dataEmissao} onChange={this.handleEdicaoRg} onFocus={(event) => event.target.type = 'date'} 
                        onBlur={(event) => event.target.type = 'text'}/>
                        </div>
                    )}          
                    </div>
                    <div className="input-group mb-3">
                        <InputMask mask="(99) 99999-9999." name="telefone" value={this.state.cliente.telefone} className="form-control" placeholder="Número de telefone" aria-label="Número de telefone" aria-describedby="basic-addon1" onChange={this.handleInputChange}/>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}