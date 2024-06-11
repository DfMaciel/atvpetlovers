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

export default class ListaCliente extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <>
                <div className="container-fluid">
                    <h3 style={{textAlign: "center"}}> Lista de Clientes </h3>
                    {this.props.clientes.map((cliente, idx) => (
                        <CardClientes consumo='' key={idx} cliente={cliente}/>
                    ))}
                </div>
        </>
        )
    }
}