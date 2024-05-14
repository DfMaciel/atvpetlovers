/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardComponent from "./cardComponent";

type props = {
    tema: string
}

export default class ListaServicos extends Component<props>{
    render() {
        let tema = this.props.tema
        const cards = [{header: 'Serviço 1', titulo: 'Tosa', texto: 'Serviço de Tosa onde seu pet tem o pelo aparado'},
                      {header: 'Serviço 2', titulo: 'Banho', texto: 'Banho confortável para o seu pet'},
                      {header: 'Serviço 3', titulo: 'Vacinação' , texto: 'Vacinação para mantar seu pet seguro'},
                      {header: 'Serviço 4' ,titulo: 'Adestramento' , texto: 'Adestramento seguro e cuidadoso com seu pet'}]
        return (
            <div className="container-fluid">
                <h3 style={{textAlign: "center"}}> Lista de Serviços </h3>
                <br/>
                <div className="list-group">
                    {/* <a href="#" className="list-group-item list-group-item-action">Serviço 1</a>
                    <a href="#" className="list-group-item list-group-item-action">Serviço 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Serviço 3</a>
                    <a href="#" className="list-group-item list-group-item-action">Serviço 4</a>
                    <a href="#" className="list-group-item list-group-item-action">Serviço 5</a>
                    <a href="#" className="list-group-item list-group-item-action">Serviço 6</a> */}
                    {cards.map((card, idx) => (
                        <CardComponent
                            key={idx}
                            header={card.header}
                            titulo={card.titulo}
                            texto={card.texto}
                        />
                    ))}
                    <br />
                </div>
            </div>
        )
    }
}