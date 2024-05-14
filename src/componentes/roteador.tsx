import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaPets from "./listaPets";
import ListaServicos from "./listaServicos";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#B80BF3" botoes={['Clientes', 'Pets', 'Serviços', 'Cadastro', 'Listagens']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3a8f7" />
                </>
            )
        } else if (this.state.tela === 'Pets') {
            return (
                <>
                    {barraNavegacao}
                    <ListaPets tema="#e3a8f7" />
                </>
            )
        } else if (this.state.tela === 'Serviços') {
                return (
                    <> 
                        {barraNavegacao}
                        <ListaServicos tema="#e3a8f7"/>
                    </>
                )
        } else if (this.state.tela === 'Cadastro') {
            return (
                <> 
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3a8f7" />
                </>
            )
        } else if (this.state.tela === 'Listagens') {
            return (
                <> 
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3a8f7" />
                </>
            )
        }
    }
}