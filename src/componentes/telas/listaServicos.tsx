/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState} from "react";
import CardServicos from "../cards/cardServico";
import { ViewServico } from "../interface/iServico";
import { Modal } from "react-bootstrap";

type props = {
    tema: string;
    servicos: ViewServico[];
    verCliente: boolean;
}

export default function ListaServicos (props: props) {
    const [conteudoModal, setConteudoModal] = useState<JSX.Element | null>(null);
    const [tituloModal, setTituloModal] = useState<string>('');
    const [verCliente, setVerCliente] = useState<boolean>(props.verCliente);

    const handleConteudoModal = (conteudo: JSX.Element | null, titulo: string) => {
        setConteudoModal(conteudo);
        setTituloModal(titulo);
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
                    {props.servicos.map((servico, idx) => (
                        <CardServicos key={idx} servico={servico} handleConteudoModal={handleConteudoModal} consumo='sim'/>
                    ))}
                    </div>
                )
            break;
        case false:
            conteudo = (
                <>
                    <div className="container-fluid">
                        <h3 style={{textAlign: "center"}}> Lista de Serviços </h3>
                        {props.servicos.map((servico, idx) => (
                            <CardServicos key={idx} servico={servico} handleConteudoModal={handleConteudoModal} consumo='' />
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