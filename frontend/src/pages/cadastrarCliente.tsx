import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FloatingLabel, InputGroup, Button, Form} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import { createCliente } from '../interface/iCliente';
import Navbar from "../componentes/navbar";
import styles from '../styles/cadastro.module.css'
import CadastrarCliente from "../funcoes/cadastroCliente";
import { useNavigate } from "react-router-dom";

export default function CadastroCliente () {
    const redirect= useNavigate()
    const [cliente, setCliente] = useState<createCliente>(
        {
            nome: '',
            nomeSocial: '',
            email: '',
            endereco: {
                estado: '',
                cidade: '',
                bairro: '',
                rua: '',
                numero: '',
                codigoPostal: '',
                informacoesAdicionais: '',
            },
            telefones: [
                {
                    numero: '',
                    ddd: '',
                }
            ]}
    );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCliente(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    
    const handleTelefoneChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const novosTelefones = [...cliente.telefones];
        novosTelefones[index] = { ...novosTelefones[index], [name]: value };
        setCliente(prevState => ({
            ...prevState,
            telefones: novosTelefones
        }));
    }

    const handleEnderecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCliente(prevState => ({
            ...prevState,
            endereco: {
                ...prevState.endereco,
                [name]: value
            }
        }));
    }

    const addTelefone = () => {
        setCliente(prevState => ({
            ...prevState,
            telefones: [...prevState.telefones, { ddd: '', numero: '' }]
        }));
    }

    const removerTelefone = () => {
        setCliente(prevState => ({
            ...prevState,
            telefones: [...prevState.telefones, { ddd: '', numero: '' }]
        }));
    }

    const handleSubmit = async () => {
        const verificarEntrada = Object.values(cliente).some(value =>
            typeof value === 'string' && (value.trim() === '' || value.trim().length === 0)
        )
        if (verificarEntrada) {
            alert('Insira todos os dados corretamente')
            return
        }
        const verificarEntradaEndereco = Object.values(cliente.endereco).some(value =>
            typeof value === 'string' && (value.trim() === '' || value.trim().length === 0)
        )
        if (verificarEntradaEndereco) {
            alert('Insira todos os dados corretamente')
            return
        }
        const verificarEntradaTelefone = cliente.telefones.some(telefone =>
            Object.values(telefone).some(value => typeof value === 'string' && value.trim() === '')
        );
    
        if (verificarEntradaTelefone) {
            alert('Insira todos os dados corretamente');
            return;
        }
        const resultado = await CadastrarCliente(cliente)
        if (resultado.success) {
            alert('Cadastro concluido')
            redirect('/clientes')
        }
        else {
            alert('Erro no cadastro')
        }
    }
    return (
        <>
            <Navbar/>
            <div className={styles.cadastro}>
                <Form className={styles.cadastroForm}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="nome" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" onChange={handleInputChange} required/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="nomeSocial" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" onChange={handleInputChange} required/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control" name="email" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" onChange={handleInputChange} required/>
                    </div>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Endereço
                            </Accordion.Header>
                            <Accordion.Body>
                                    <div className="input-group mb-3">
                                        <FloatingLabel controlId="floatingInput" label="Estado" className="mb-3">
                                            <input name="estado" className="form-control" placeholder="Estado" aria-label="Estado" aria-describedby="basic-addon1" onChange={handleEnderecoChange} required/>
                                        </FloatingLabel>
                                    </div>
                                    <div className="input-group mb-3">
                                        <FloatingLabel controlId="floatingInput" label="Cidade" className="mb-3">
                                            <input name="cidade" className="form-control" placeholder="Cidade" aria-label="Cidade" aria-describedby="basic-addon1" onChange={handleEnderecoChange} required/>
                                        </FloatingLabel>
                                    </div>
                                    <div className="input-group mb-3">
                                        <FloatingLabel controlId="floatingInput" label="Bairro" className="mb-3">
                                            <input name="bairro" className="form-control" placeholder="Bairro" aria-label="Bairro" aria-describedby="basic-addon1" onChange={handleEnderecoChange} required/>
                                        </FloatingLabel>
                                    </div>
                                        <FloatingLabel controlId="floatingInput" label="Rua" className="mb-3">
                                            <input name="rua" className="form-control" placeholder="Rua" aria-label="Rua" aria-describedby="basic-addon1" onChange={handleEnderecoChange} required/>
                                        </FloatingLabel>
                                    <div className="input-group mb-3">
                                        <FloatingLabel controlId="floatingInput" label="Número" className="mb-3">
                                            <input name="numero" className="form-control" placeholder="Número" aria-label="Número" aria-describedby="basic-addon1" onChange={handleEnderecoChange} required/>
                                        </FloatingLabel>
                                    </div>
                                    <div className="input-group mb-3">
                                        <FloatingLabel controlId="floatingInput" label="Código Postal" className="mb-3">
                                            <input name="codigoPostal" className="form-control" placeholder="Código Postal" aria-label="Código Postal" aria-describedby="basic-addon1" onChange={handleEnderecoChange} required/>
                                        </FloatingLabel>
                                    </div>
                                    <div className="input-group mb-3">
                                        <FloatingLabel controlId="floatingInput" label="Informações adicionais" className="mb-3">
                                            <input name="informacoesAdicionais" className="form-control" placeholder="Informações Adicionais" aria-label="Informações Adicionais" aria-describedby="basic-addon1" onChange={handleEnderecoChange} />
                                        </FloatingLabel>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <br/>
                    {cliente.telefones.map((telefone, index) => (
                        <div key={index}>
                            <div className="input-group mb-3">
                                <input className="form-control" name="numero" placeholder="Número de telefone" value={telefone.numero} aria-label="Número de telefone" aria-describedby="basic-addon1" onChange={event => handleTelefoneChange(index, event)} />
                            </div>
                            <div className="input-group mb-3">
                                <input className="form-control" name="ddd" placeholder="DDD" value={telefone.ddd} aria-label="DDD" aria-describedby="basic-addon1" onChange={event => handleTelefoneChange(index, event)} />
                            </div>
                        </div>
                    ))}
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" onClick={addTelefone}>Adicionar Telefone</button>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" onClick={handleSubmit}>Cadastrar</button>
                    </div>
                </Form>
            </div>
        </>
    )
}