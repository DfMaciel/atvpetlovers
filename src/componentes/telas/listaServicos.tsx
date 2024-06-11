/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import CardServicos from "../cards/cardServico";
import { ViewServico } from "../interface/iServico";
import { Modal } from "react-bootstrap";

type props = {
    tema: string;
    servicos: ViewServico[];
    verCliente: boolean;
}

type state = {
    conteudoModal: JSX.Element | null
    tituloModal: string
    verCliente: boolean;
}

export default class ListaServicos extends Component<props, state>{
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
                        {this.props.servicos.map((servico, idx) => (
                            <CardServicos key={idx} servico={servico} handleConteudoModal={this.handleConteudoModal} consumo=''/>
                        ))}
                      </div>
                    )
                break;
            case false:
                conteudo = (
                    <>
                        <div className="container-fluid">
                            <h3 style={{textAlign: "center"}}> Lista de Serviços </h3>
                            {this.props.servicos.map((servico, idx) => (
                                <CardServicos key={idx} servico={servico} handleConteudoModal={this.handleConteudoModal} consumo='' />
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