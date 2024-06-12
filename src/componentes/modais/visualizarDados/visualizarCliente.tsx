import { useState } from "react";
import InputMask from 'react-input-mask';
import { ViewCliente } from "../../interface/iCliente";
import Form from 'react-bootstrap/Form';
import { FloatingLabel, InputGroup } from "react-bootstrap";

type props = {
    tema: string
    cliente: ViewCliente
}

export default function VisualizarCliente (props: props) {
    const [cliente, setCliente] = useState<ViewCliente>(props.cliente)
    const [listaRg, setListaRg] = useState<boolean>(false)
    const [rgEscolhido, setRgEscolhido] = useState<number | null>(null)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCliente(prevState => ({
            ...prevState,
                [name]: value
        }));
    }
    
    const handeEscolhaRg = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const indice = Number(event.target.value);
        setRgEscolhido(indice);
    }

    const handleEdicaoRg = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (rgEscolhido !== null) {
            const { name, value } = event.target;
            const novoRg = cliente.rg.map((rg, rgIndex) => {
                if (rgEscolhido !== rgIndex) return rg;
                return { ...rg, [name]: value };
            });

            setCliente(prevState => ({
                ...prevState,
                 rg: novoRg
            }));
        }
    }
    
    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <FloatingLabel controlId="floatingInput" label="Nome" className="mb-3">
                        <Form.Control type="text" name="nome" className="form-control" placeholder="Nome" value={cliente.nome} onChange={handleInputChange} aria-label="Nome" aria-describedby="basic-addon1"/>
                    </FloatingLabel>
                </div>
                <div className="input-group mb-3">
                    <FloatingLabel controlId="floatingInput" label="Nome Social" className="mb-3">
                        <Form.Control type="text" name="nomeSocial" value={cliente.nomeSocial} onChange={handleInputChange} className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                    </FloatingLabel>
                </div>
                <div className="input-group mb-3">
                <InputGroup>
                    <InputGroup.Text id="basic-addon1" style={{ background: tema, height: 'calc(2.9em + .75rem + 2px)'}}>@</InputGroup.Text>
                    <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                        <Form.Control type="text" name="email" value={cliente.email} onChange={handleInputChange} className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                    </FloatingLabel>
                </InputGroup>
                    

                </div>
                <div className="input-group mb-3">
                    <FloatingLabel controlId="floatingInput" label="Cpf" className="mb-3">
                        <InputMask mask="999.999.999-99" name="cpf" value={cliente.cpf.numero} className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" disabled/>
                    </FloatingLabel>
                </div>
                <div className="input-group mb-3">
                    <FloatingLabel controlId="floatingInput" label="Data de emissão do cpf" className="mb-3">
                        <Form.Control type="text" name="dataEmissaoCPF" value={cliente.cpf.dataEmissao} className="form-control" placeholder="Data de Emissão do CPF" aria-label="Data de emissão cpf" aria-describedby="basic-addon1" disabled/>
                    </FloatingLabel>
                </div>
                <div className="input-group mb-3">
                    <FloatingLabel controlId="floatingInput" label="Rgs" className="mb-3">
                        <Form.Select value={rgEscolhido || ""} className="form-control" aria-describedby="basic-addon1" onChange={(event) => handeEscolhaRg(event)}>
                            <option value="" disabled>Clique para ver os RGs</option>
                            {cliente.rg.map((rg, index) => (
                                <option key={index} value={index}>
                                    {rg.numero}
                                </option>
                        ))}
                        </Form.Select>     
                    </FloatingLabel>             
                </div>
                <div className="input-group mb-3">
                {rgEscolhido !== null && (
                    <div>
                    <FloatingLabel controlId="floatingInput" label="Número do RG" className="mb-3">
                        <InputMask mask="999.999.999-99" name="numero" className="form-control" aria-describedby="basic-addon1" value={cliente.rg[rgEscolhido].numero} onChange={handleEdicaoRg} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Data de emissão do RG" className="mb-3">
                        <input type="text" name="dataEmissao" className="form-control" aria-describedby="basic-addon1" value={cliente.rg[rgEscolhido].dataEmissao} onChange={handleEdicaoRg} onFocus={(event) => event.target.type = 'date'} 
                    onBlur={(event) => event.target.type = 'text'}/>
                    </FloatingLabel>
                    </div>
                )}          
                </div>
                <div className="input-group mb-3">
                    <FloatingLabel controlId="floatingInput" label="Telefone" className="mb-3">
                        <InputMask mask="(99) 99999-9999." name="telefone" value={cliente.telefone} className="form-control" placeholder="Número de telefone" aria-label="Número de telefone" aria-describedby="basic-addon1" onChange={handleInputChange}/>
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