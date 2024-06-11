/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import CardProdutos from "../cards/cardProduto";
import { ViewProduto } from "../interface/iProduto";

type props = {
    tema: string;
    produtos: ViewProduto[];
}

export default class ListaProdutosMaisConsumidos extends Component<props>{
    constructor(props: props) {
        super(props)
        this.state = {
        }
    }
    
    render() {
        return ( 
            <>
                <div className="container-fluid">
                    <h3 style={{textAlign: "center"}}> Produtos Mais Vendidos </h3>
                    {this.props.produtos.map((produto, idx) => (
                        <CardProdutos key={idx} produto={produto} consumo='sim'/>
                    ))}
                </div>
            </>
        )
    }
}