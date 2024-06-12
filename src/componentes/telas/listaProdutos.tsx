/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import CardProdutos from "../cards/cardProduto";
import { ViewProduto } from "../interface/iProduto";
import { Modal } from "react-bootstrap";

type props = {
    tema: string;
    produtos: ViewProduto[];
    verCliente: boolean;
}

export default function ListaProdutos (props: props) {
    const [conteudoModal, setConteudoModal] = useState<JSX.Element | null>(null);
    const [tituloModal, setTituloModal] = useState<string>('');
    const [verCliente, setVerCliente] = useState<boolean>(props.verCliente);

    const handleConteudoModal = (conteudo: JSX.Element | null, titulo: string) => {
        setConteudoModal(conteudo)
        setTituloModal(titulo)
    }
    let tema = props.tema
    let conteudo = null;
    switch (verCliente) {
        case true: 
            conteudo = (
                (conteudoModal !== null) ?
                    <Modal centered size="lg" show={conteudoModal !== null} onHide={() => handleConteudoModal(null, '')}>
                        <Modal.Header closeButton>
                            <Modal.Title>{tituloModal}</Modal.Title>
                            </Modal.Header>
                        <Modal.Body>
                            {conteudoModal}
                        </Modal.Body>
                    </Modal>
                : <div className="container-fluid">
                    {props.produtos.map((produto, idx) => (
                        <CardProdutos key={idx} produto={produto} handleConteudoModal={handleConteudoModal} consumo='sim'/>
                    ))}
                    </div>
                )
            break;
        case false:
            conteudo = (
                <>
                    <div className="container-fluid">
                        <h3 style={{textAlign: "center"}}> Lista de Produtos </h3>
                        {props.produtos.map((produto, idx) => (
                            <CardProdutos key={idx} produto={produto} handleConteudoModal={handleConteudoModal} consumo=''/>
                        ))}
                    </div>
                    {conteudoModal !== null && (
                        <Modal centered size="lg" show={conteudoModal !== null} onHide={() => handleConteudoModal(null, '')}>
                            <Modal.Header closeButton>
                                <Modal.Title>{tituloModal}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {conteudoModal}
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