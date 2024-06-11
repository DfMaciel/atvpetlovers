/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import CardProdutos from "../cards/cardProduto";
import CardServicos from "../cards/cardServico";
import { ViewProduto } from "../interface/iProduto";
import { ViewServico } from "../interface/iServico";

type props = {
    tema: string;
    produtos: ViewProduto[];
    servicos: ViewServico[]
}

type state = {
    tipoBusca: string;
}

export default class ListaConsumoPets extends Component<props, state>{
    constructor(props: props) {
        super(props)
        this.state = {
            tipoBusca: '',
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
        return ( 
            <>
                <div className="container-fluid">
                    <h3 style={{textAlign: "center"}}> Consumo por Pets </h3>
                    <div className="input-group mb-3">
                        <input type="text" name="tipo" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                        <input type="text" name="raca" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                        <select name="tipoBusca" className="form-control" onChange={this.handleTipoBusca} aria-label="Tipo de busca" aria-describedby="basic-addon1">
                            <option value="" selected disabled>Selecione o tipo de pesquisa</option>
                            <option value="produto">Produtos</option>
                            <option value="servico">Serviços</option>
                        </select>
                        <button className="btn btn-outline-secondary" type="button" style={{ background: this.props.tema }}>Buscar</button>
                    </div>
                    {this.state.tipoBusca === 'produto' && (
                        this.props.produtos.map((produto, idx) => (
                            <CardProdutos produto={produto} consumo='sim'/>
                        )))}
                    {this.state.tipoBusca === 'servico' && (
                        this.props.servicos.map((servico, idx) => (
                            <CardServicos servico={servico} consumo='sim'/>
                        ))
                    )}
                </div>
            </>
        )
    }
}