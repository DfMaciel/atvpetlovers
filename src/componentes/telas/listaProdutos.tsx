/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import CardProdutos from "../cards/cardProduto";
import { ViewProduto } from "../interface/iProduto";
import { Modal } from "react-bootstrap";

type props = {
    tema: string;
    produtos: ViewProduto[];
    verCliente: boolean;
}

type state = {
    conteudoModal: JSX.Element | null
    tituloModal: string
    verCliente: boolean;
}

export default class ListaProdutos extends Component<props, state>{
    constructor(props: props) {
        super(props)
        this.state = {
            conteudoModal: null,
            tituloModal: '',
            verCliente: this.props.verCliente
        }
    }

    handleConteudoModal = (conteudo: JSX.Element | null, titulo: string) => {
        this.setState({ conteudoModal: conteudo });
        this.setState({ tituloModal: titulo });
    }
    
    render() {
        let tema = this.props.tema
        let conteudo = null;
        switch (this.state.verCliente) {
            case true: 
                conteudo = (
                    (this.state.conteudoModal !== null) ?
                        <Modal centered size="lg" show={this.state.conteudoModal !== null} onHide={() => this.handleConteudoModal(null, '')}>
                            <Modal.Header closeButton>
                                <Modal.Title>{this.state.tituloModal}</Modal.Title>
                             </Modal.Header>
                            <Modal.Body>
                                {this.state.conteudoModal}
                            </Modal.Body>
                        </Modal>
                    : <div className="container-fluid">
                        {this.props.produtos.map((produto, idx) => (
                            <CardProdutos key={idx} produto={produto} handleConteudoModal={this.handleConteudoModal} consumo='sim'/>
                        ))}
                      </div>
                    )
                break;
            case false:
                conteudo = (
                    <>
                        <div className="container-fluid">
                            <h3 style={{textAlign: "center"}}> Lista de Produtos </h3>
                            {this.props.produtos.map((produto, idx) => (
                                <CardProdutos key={idx} produto={produto} handleConteudoModal={this.handleConteudoModal} consumo=''/>
                            ))}
                        </div>
                        {this.state.conteudoModal !== null && (
                            <Modal centered size="lg" show={this.state.conteudoModal !== null} onHide={() => this.handleConteudoModal(null, '')}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{this.state.tituloModal}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {this.state.conteudoModal}
                                </Modal.Body>
                            </Modal>
                            )
                        }
                    </>
                )
                break;
            }
        return ( 
            <>
                {conteudo}
            </>
        )
    }
}
