import { Component } from "react";
import InputMask from 'react-input-mask';
import { ViewCliente } from "../../interface/iCliente";

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
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    mostrarListaRg = () => {
        this.setState(prevState => ({
            mostrarListaRg: !prevState.mostrarListaRg
        }));
    }

    handeEscolhaRg = (indice: number) => {
        this.setState({
            rgEscolhido: indice
        })
    }

    handleEdicaoRg = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.state.rgEscolhido !== null) {
            const novoRg = this.state.cliente.rg.map((rg, rgIndex) => {
                if (this.state.rgEscolhido !== rgIndex) return rg;
                return { ...rg, numero: event.target.value };
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
                        <input type="text" className="form-control" placeholder="Nome" value={this.state.cliente.nome} aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" name="nomeSocial" value={this.state.cliente.nomeSocial} onChange={this.handleInputChange} className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                        <input type="text" name="email" value={this.state.cliente.email} onChange={this.handleInputChange} className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />                    </div>
                    <div className="input-group mb-3">
                        <InputMask mask="999.999.999-99" name="cpf" value={this.state.cliente.cpf.numero} className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" readOnly/>
                    </div>
                    {/* <div className="input-group mb-3">
                    <input type="text" name="dataEmissaoCPF" value={this.state.cliente.dataEmissaoCpf} onChange={this.handleInputChange} className="form-control" placeholder="Data de Emissão do CPF" onFocus={(event) => event.target.type = 'date'} 
                        onBlur={(event) => event.target.type = 'text'} aria-label="Data de emissão cpf" aria-describedby="basic-addon1" />
                    </div> */}
                    <div className="input-group mb-3">
                    <input type="text" value={this.state.rgEscolhido !== null ? this.state.cliente.rg[this.state.rgEscolhido].numero : ''} onClick={this.mostrarListaRg} onChange={this.handleEdicaoRg} />
                    {this.state.mostrarListaRg && this.state.cliente.rg.map((rg, index) => (
                            <div key={index}>
                                <button onClick={() => this.handeEscolhaRg(index)}>{rg.numero}</button>
                            </div>
                        ))}                    
                    </div>
                    {/* <div className="input-group mb-3">
                    <input type="text" name="dataEmissaoRG" value={this.state.cliente.dataEmissaoRg} onChange={this.handleInputChange} className="form-control" placeholder="Data de Emissão do RG" onFocus={(event) => event.target.type = 'date'}
                        onBlur={(event) => event.target.type = 'text'} aria-label="Data de emissão rg" aria-describedby="basic-addon1" />
                    </div> */}
                    <div className="input-group mb-3">
                        <InputMask mask="(99) 99999-9999." name="telefone" value={this.state.cliente.telefone} className="form-control" placeholder="Número de telefone" aria-label="Número de telefone" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}