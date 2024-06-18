/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import InputMask from 'react-input-mask';
import { viewCliente } from '../interface/iCliente';
import Form from 'react-bootstrap/Form';
import { FloatingLabel, InputGroup } from "react-bootstrap";
import { useEffect, useState } from 'react';

export default function VisualizarCliente (clienteEscolhido: viewCliente) {
    const [cliente, setCliente] = useState<viewCliente>(clienteEscolhido)
    const [listaTelefones, setListaTelefone] = useState<boolean>(false)
    const [telefoneEscolhido, setTelefoneEscolhido] = useState<number | null>(null)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCliente(prevState => ({
            ...prevState,
                [name]: value
        }));
    }

    const handeEscolhaTelefone = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const indice = Number(event.target.value);
        setTelefoneEscolhido(indice);
    }

    const handleEdicaoTelefone = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (telefoneEscolhido !== null) {
            const { name, value } = event.target;
            const novoTelefone = cliente.telefones.map((telefone, telefoneIndex) => {
                if (telefoneEscolhido !== telefoneIndex) return telefone;
                return { ...telefone, [name]: value };
            });

            setCliente(prevState => ({
                ...prevState,
                 rg: novoTelefone
            }));
        }
    }
    
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
                    <InputGroup.Text id="basic-addon1" style={{height: 'calc(2.9em + .75rem + 2px)'}}>@</InputGroup.Text>
                    <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                        <Form.Control type="text" name="email" value={cliente.email} onChange={handleInputChange} className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                    </FloatingLabel>
                </InputGroup>
                    

                </div>
                <div className="input-group mb-3">
                    <label> Endereço </label>
                    <FloatingLabel controlId="floatingInput" label="Estado" className="mb-3">
                        <input name="cpf" value={cliente.endereco.estado} className="form-control" placeholder="Estado" aria-label="Estado" aria-describedby="basic-addon1" disabled/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Cidade" className="mb-3">
                        <input name="cidade" value={cliente.endereco.cidade} className="form-control" placeholder="Cidade" aria-label="Cidade" aria-describedby="basic-addon1" disabled/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Bairro" className="mb-3">
                        <input name="bairro" value={cliente.endereco.bairro} className="form-control" placeholder="Bairro" aria-label="Bairro" aria-describedby="basic-addon1" disabled/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Rua" className="mb-3">
                        <input name="rua" value={cliente.endereco.rua} className="form-control" placeholder="Rua" aria-label="Rua" aria-describedby="basic-addon1" disabled/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Número" className="mb-3">
                        <input name="numero" value={cliente.endereco.numero} className="form-control" placeholder="Número" aria-label="Número" aria-describedby="basic-addon1" disabled/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Código Postal" className="mb-3">
                        <input name="codigoPostal" value={cliente.endereco.codigoPostal} className="form-control" placeholder="Código Postal" aria-label="Código Postal" aria-describedby="basic-addon1" disabled/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Informações adicionais" className="mb-3">
                        <input name="informacoesAdicionais" value={cliente.endereco.informacoesAdicionais} className="form-control" placeholder="Informações Adicionais" aria-label="Informações Adicionais" aria-describedby="basic-addon1" disabled/>
                    </FloatingLabel>
                </div>
                <div className="input-group mb-3">
                    <FloatingLabel controlId="floatingInput" label="Telefones" className="mb-3">
                        <Form.Select value={telefoneEscolhido || ""} className="form-control" aria-describedby="basic-addon1" onChange={(event) => handeEscolhaTelefone(event)}>
                            <option value="" disabled>Clique para ver os RGs</option>
                            {cliente.telefones.map((telefone, index) => (
                                <option key={index} value={index}>
                                    {telefone.numero}
                                </option>
                        ))}
                        </Form.Select>     
                    </FloatingLabel>             
                </div>
                <div className="input-group mb-3">
                {telefoneEscolhido !== null && (
                    <div>
                        <FloatingLabel controlId="floatingInput" label="Número do telefone" className="mb-3">
                            <InputMask mask="9999-9999" name="numero" className="form-control" aria-describedby="basic-addon1" value={cliente.telefones[telefoneEscolhido].numero} onChange={handleEdicaoTelefone} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="DDD do telefone" className="mb-3">
                            <input type="text" name="ddd" className="form-control" aria-describedby="basic-addon1" value={cliente.telefones[telefoneEscolhido].ddd} onChange={handleEdicaoTelefone} />
                        </FloatingLabel>
                    </div>
                )}          
                </div>
                <div className="input-group mb-3">
                    <button className="btn-primary btn-outline-secondary" type="button" >Editar</button>
                    <button className="btn-primary btn-outline-secondary" type="button" >Excluir</button>
                </div>
            </form>
        </div>
    )
}