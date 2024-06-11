/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import CardServicos from "../cards/cardServico";
import { ViewServico } from "../interface/iServico";

type props = {
    tema: string;
    servicos: ViewServico[];
}

export default class ListaServicosMaisConsumidos extends Component<props>{
    constructor(props: props) {
        super(props)
        this.state = {
        }
    }
    
    render() {
        return ( 
            <>
                <div className="container-fluid">
                    <h3 style={{textAlign: "center"}}> Serviços Mais Consumidos </h3>
                    {this.props.servicos.map((servico, idx) => (
                        <CardServicos key={idx} servico={servico} consumo='sim'/>
                    ))}
                </div>
            </>
        )
    }
}