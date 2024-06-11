/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardClientes from "../cards/cardClientes";
import { ViewCliente } from "../interface/iCliente";

type props = {
    tema: string;
    clientes: ViewCliente[];
}

type state = {
    tipoBusca: string
}

export default class ListaClienteConsumoQuantidade extends Component<props, state>{
    constructor(props: props) {
        super(props)
        this.state = {
            tipoBusca: ''
        }
    }

    handleTipoBusca = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    
    render() {
        let tema = this.props.tema
        return (
            <>
                <div className="container-fluid">
                    <h3 style={{textAlign: "center"}}> Maior Consumo (Em quantidade) </h3>
                    <select name="tipoBusca" className="form-control" style={{marginTop: '1%', marginBottom: '2%'}} onChange={this.handleTipoBusca} aria-label="Tipo de busca" aria-describedby="basic-addon1">
                            <option value="" selected disabled>Selecione o tipo de pesquisa</option>
                            <option value="produto">Produtos</option>
                            <option value="servico">Serviços</option>
                        </select>
                    {this.props.clientes.map((cliente, idx) => (
                        <CardClientes consumo='sim' key={idx} cliente={cliente}/>
                    ))}
                </div>
        </>
        )
    }
}