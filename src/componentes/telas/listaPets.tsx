/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { ViewPet } from "../interface/iPet";
import CardPets from "../cards/cardPets";

type props = {
    tema: string;
    pets: ViewPet[];
}

export default class ListaPets extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <>
                <div className="container-fluid">
                    <h3 style={{textAlign: "center"}}> Lista de Pets </h3>
                    {this.props.pets.map((pet, idx) => (
                        <CardPets key={idx} pet={pet}/>
                    ))}
                </div>
        </>
        )
    }
}