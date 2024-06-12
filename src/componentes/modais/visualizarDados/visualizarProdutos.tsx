import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { FloatingLabel, InputGroup } from "react-bootstrap";
import { ViewProduto } from "../../interface/iProduto";

type props = {
    tema: string
    produto: ViewProduto
}

export default function VisualizarProdutos (props: props) {
    const [produto, setProduto] = useState<ViewProduto>(props.produto)
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setProduto(prevState => ({
            ...prevState,
                [name]: value
        }));
    }
    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <FloatingLabel controlId="floatingInput" label="Nome" className="mb-3">
                        <Form.Control type="text" name="nome" className="form-control" placeholder="Nome" value={produto.nome} onChange={handleInputChange} aria-label="Nome" aria-describedby="basic-addon1"/>
                    </FloatingLabel>
                </div>
                <div className="input-group mb-3">
                    <FloatingLabel controlId="floatingInput" label="Preço" className="mb-3">
                        <Form.Control type="number" name="preco" value={produto.preco} onChange={handleInputChange} className="form-control" placeholder="Preço" aria-label="Tipo" aria-describedby="basic-addon1" />
                    </FloatingLabel>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Editar</button>
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Excluir</button>
                </div>
            </form>
        </div>
    )
}