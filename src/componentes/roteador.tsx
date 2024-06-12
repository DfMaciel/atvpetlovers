/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./telas/listaClientes";
import FormularioCadastroCliente from "./modais/formulariosCadastro/formularioCadastroCliente";
import ListaPets from "./telas/listaPets";
import ListaServicos from "./telas/listaServicos";
import Modal from 'react-bootstrap/Modal';
import FormularioCadastroPet from "./modais/formulariosCadastro/formularioCadastroPet";
import FormularioCadastroServico from "./modais/formulariosCadastro/formularioCadastroServico";
import FormularioCadastroProduto from "./modais/formulariosCadastro/formularioCadastroProduto";
import ListaProdutos from "./telas/listaProdutos";
import ListaClienteConsumoQuantidade from "./telas/listaClientesConsumoQuantidade";
import ListaClienteConsumoValor from "./telas/listaClientesConsumoValor";
import ListaProdutosMaisConsumidos from "./telas/listaProdutosMaisConsumidos";
import ListaServicosMaisConsumidos from "./telas/listaServicosMaisConsumidos";
import ListaConsumoPets from "./telas/consumoPet";

export default function Roteador () {

    const [tela, setTela] = useState('Listar Clientes') 
    const [abrirModal, setAbrirModal] = useState(false)
    const [tituloModal, setTituloModal] = useState('')
    const [conteudoModal, setConteudoModal] = useState<null | JSX.Element>(null)

    const clientes = [
        // {
        //     nome: "Cliente 1",
        //     nomeSocial: "C1",
        //     email: "cliente1@email.com",
        //     cpf: "123.456.789-01",
        //     dataEmissaoCpf: "01/01/2000",
        //     rg: "1234567",
        //     dataEmissaoRg: "01/01/2000",
        //     telefone: "(11) 1111-1111",
        //     pets: {
        //         nome: "Pet 1",
        //         tipo: "Cachorro",
        //         raca: "Labrador",
        //         genero: "Macho",
        //     },
        //     id: 1
        // },
        // {
        //     nome: "Cliente 2",
        //     nomeSocial: "C2",
        //     email: "cliente2@email.com",
        //     cpf: "234.567.890-12",
        //     dataEmissaoCpf: "02/02/2001",
        //     rg: "2345678",
        //     dataEmissaoRg: "02/02/2001",
        //     telefone: "(22) 2222-2222",
        //     pets: {
        //         nome: "Pet 2",
        //         tipo: "Gato",
        //         raca: "Siamese",
        //         genero: "Fêmea",
        //     },
        //     id: 2
        // },
        // {
        //     nome: "Cliente 3",
        //     nomeSocial: "C3",
        //     email: "cliente3@email.com",
        //     cpf: "345.678.901-23",
        //     dataEmissaoCpf: "03/03/2002",
        //     rg: "3456789",
        //     dataEmissaoRg: "03/03/2002",
        //     telefone: "(33) 3333-3333",
        //     pets: {
        //         nome: "Pet 3",
        //         tipo: "Pássaro",
        //         raca: "Canário",
        //         genero: "Macho",
        //     },
        //     id: 3
        // },
        {
            nome: "Cliente 4",
            nomeSocial: "C4",
            email: "cliente4@email.com",
            cpf: {
                numero: "456.789.012-34",
                dataEmissao: "04/04/2003",
            },
            rg: [{
                numero: "4567890",
                dataEmissao: "04/04/2003"}, 
                {
                numero: "5678901",
                dataEmissao: "10/05/2002", 
            }],
            telefone: "(44) 44444-4444",
            pets: [{
                nome: "Pet 4",
                tipo: "Cachorro",
                raca: "Poodle",
                genero: "Fêmea",
            }],
            produtos: [{
                nome: 'Produto 1',
                preco: 30,
            },
            {
                nome: 'Produto 2',
                preco: 50,
            }],
            servicos: [{
                nome: 'Serviço 1',
                preco: 50,
            },
            {
                nome: 'Serviço 2',
                preco: 60,
            }],
            id: 4
        },
        {
            nome: "Cliente 5",
            nomeSocial: "C5",
            email: "cliente5@email.com",
            cpf: {
                numero: "567.890.123-45",
                dataEmissao: "05/05/2004",
            },
            rg: [{
                numero: "5678901",
                dataEmissao: "05/05/2004",
            }],
            telefone: "(55) 55555-5555",
            pets: [{
                nome: "Pet 5",
                tipo: "Gato",
                raca: "Persa",
                genero: "Macho",
            }],
            produtos: [{
                nome: "Produto 5",
                preco: 60,
            },
            {
                nome: "Produto 6",
                preco: 80,
            }],
            servicos: [{
                nome: "Serviço 5",
                preco: 110,
            },
            {
                nome: "Serviço 6",
                preco: 130,
            }],
            id: 5
        },
    ];
    
    const pets = [
        {
        nome: "Fido",
        tipo: "Dog",
        raca: "Labrador",
        genero: "Male",
        dono: {
            nome: "Cliente 5",
            nomeSocial: "C5",
            email: "cliente5@email.com",
            cpf: {
                numero: "567.890.123-45",
                dataEmissao: "05/05/2004",
            },
            rg: [{
                numero: "5678901",
                dataEmissao: "05/05/2004",
            }],
            telefone: "(55) 55555-5555",
            pets: [{
                nome: "Pet 5",
                tipo: "Gato",
                raca: "Persa",
                genero: "Macho",
            }],
            produtos: [{
                nome: "Produto 5",
                preco: 60,
            },
            {
                nome: "Produto 6",
                preco: 80,
            }],
            servicos: [{
                nome: "Serviço 5",
                preco: 110,
            },
            {
                nome: "Serviço 6",
                preco: 130,
            }],
            id: 5
        }
        },
        {
        nome: "Whiskers",
        tipo: "Cat",
        raca: "Siamese",
        genero: "Female",
        dono: {
            nome: "Cliente 4",
            nomeSocial: "C4",
            email: "cliente4@email.com",
            cpf: {
                numero: "456.789.012-34",
                dataEmissao: "04/04/2003",
            },
            rg: [{
                numero: "4567890",
                dataEmissao: "04/04/2003"}, 
                {
                numero: "5678901",
                dataEmissao: "10/05/2002", 
            }],
            telefone: "(44) 44444-4444",
            pets: [{
                nome: "Pet 4",
                tipo: "Cachorro",
                raca: "Poodle",
                genero: "Fêmea",
            }],
            produtos: [{
                nome: 'Produto 1',
                preco: 30,
            }],
            servicos: [{
                nome: 'Serviço 1',
                preco: 50,
            }],
            id: 4
        }
        }
    ]
    
    const servicos = [
        {
            nome: 'Serviço 1',
            preco: 50,
        },
        {
            nome: 'Serviço 2',
            preco: 60,
        },
        {
            nome: 'Serviço 3',
            preco: 70,
        },
        {
            nome: 'Serviço 4',
            preco: 80,
        },
        {
            nome: 'Serviço 5',
            preco: 90,
        }
    ]
    
    const produtos = [
        {
            nome: 'Produto 1',
            preco: 30,
        },
        {
            nome: 'Produto 2',
            preco: 50,
        }
    ]

    const conteudoModais: {[key:string]: JSX.Element } = {
        'Cadastrar Cliente': <FormularioCadastroCliente tema='#e3a8f7' />,
        'Cadastrar Produto': <FormularioCadastroProduto tema='#e3a8f7' />,
        'Cadastrar Pet': <FormularioCadastroPet tema='#e3a8f7' />,
        'Cadastrar Serviço': <FormularioCadastroServico tema='#e3a8f7' />
    }

    const handleModal = (exibir: boolean, conteudo: JSX.Element | null, titulo: string) => {
        setAbrirModal(exibir)
        setConteudoModal(conteudo)
        setTituloModal(titulo)
    }

    const selecionarView = (novaTela: string, evento: Event) => {
        evento.preventDefault()
        console.log(novaTela);

        if (conteudoModais.hasOwnProperty(novaTela)) {
            handleModal(true, conteudoModais[novaTela], novaTela)
        } 
        else {
            setTela(novaTela);
        }
    };
    
    let barraNavegacao = <BarraNavegacao selecionarView={selecionarView} tema="#B80BF3" botoes={[
        {nome: 'Cliente', dropdownItems: ['Listar Clientes', 'Cadastrar Cliente','Mais Consumiram (Quantidade)', 'Mais Consumiram (Valor)'].map(item => ({nome: item}))},
        {nome: 'Pet', dropdownItems: ['Listar Pets', 'Cadastrar Pet','Consumo por categoria de pet'].map(item => ({nome: item}))},
        {nome: 'Serviço', dropdownItems: ['Listar Serviços', 'Cadastrar Serviço', 'Mais Consumidos'].map(item => ({nome: item}))},
        {nome: 'Produtos', dropdownItems: ['Listar Produtos', 'Cadastrar Produto', 'Mais Vendidos'].map(item => ({nome: item}))} 
    ]}/>
        
    let telaEscolhida;

    switch (tela) {
        case 'Listar Clientes':
            telaEscolhida = <ListaCliente clientes={clientes} tema="#e3a8f7" />;
            break;
        case 'Listar Pets':
            telaEscolhida = <ListaPets pets={pets} tema="#e3a8f7" />;
            break;
        case 'Listar Serviços':
            telaEscolhida = <ListaServicos verCliente={false} servicos={servicos} tema="#e3a8f7" />;
            break;
        case 'Listar Produtos':
            telaEscolhida = <ListaProdutos verCliente={false} produtos={produtos} tema="#e3a8f7" />;
            break;
        case 'Mais Consumiram (Quantidade)':
            telaEscolhida = <ListaClienteConsumoQuantidade clientes={clientes} tema="#e3a8f7" />;
            break;
        case 'Mais Consumiram (Valor)':
            telaEscolhida = <ListaClienteConsumoValor clientes={clientes} tema="#e3a8f7" />;
            break;
        case 'Mais Vendidos':
            telaEscolhida = <ListaProdutosMaisConsumidos produtos={produtos} tema="#e3a8f7" />;
            break
        case 'Mais Consumidos':
            telaEscolhida = <ListaServicosMaisConsumidos servicos={servicos} tema="#e3a8f7" />;
            break;
        case 'Consumo por categoria de pet':
            telaEscolhida = <ListaConsumoPets tema="#e3a8f7" produtos={produtos} servicos={servicos} />;
            break;
    }

        return (
            <>
                {barraNavegacao}
                {telaEscolhida}
                <Modal centered size="lg" show={abrirModal} onHide={() => handleModal(false, null, '')}>
                    <Modal.Header closeButton>
                        <Modal.Title>{tituloModal}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {conteudoModal}
                    </Modal.Body>
                </Modal>
            </>
        )
    }