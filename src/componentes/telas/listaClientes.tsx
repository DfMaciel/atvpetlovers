/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardClientes from "../cardClientes";

type props = {
    tema: string;
    clientes: cliente[];
}

interface cliente {
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

export default class ListaCliente extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <h3 style={{textAlign: "center"}}> Lista de Clientes </h3>
                {this.props.clientes.map((cliente, idx) => (
                    <CardClientes key={idx} cliente={cliente}/>
                ))}
            </div>
        )
    }
}