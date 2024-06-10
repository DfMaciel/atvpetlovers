import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./telas/listaClientes";
import FormularioCadastroCliente from "./modais/formulariosCadastro/formularioCadastroCliente";
import ListaPets from "./telas/listaPets";
import ListaServicos from "./telas/listaServicos";
import Modal from 'react-bootstrap/Modal';
import FormularioCadastroPet from "./modais/formulariosCadastro/formularioCadastroPet";
import FormularioCadastroServico from "./modais/formulariosCadastro/formularioCadastroServico";
import FormularioCadastroProduto from "./modais/formulariosCadastro/formularioCadastroProduto";

type state = {
    tela: string
    tituloModal: string,
    conteudoModal: null | JSX.Element,
    abrirModal: boolean
}

interface ConteudoModais {
    [key: string]: JSX.Element
}

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
        }],
        servicos: [{
            nome: 'Serviço 1',
            preco: 50,
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
        }],
        servicos: [{
            nome: "Serviço 5",
            preco: 110,
        }],
        id: 5
    },
];

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Listar Clientes',
            abrirModal: false,
            tituloModal: '',
            conteudoModal: null 
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    conteudoModais: ConteudoModais = {
        'Cadastrar Cliente': <FormularioCadastroCliente tema='#e3a8f7' />,
        'Cadastrar Produto': <FormularioCadastroProduto tema='#e3a8f7' />,
        'Cadastrar Pet': <FormularioCadastroPet tema='#e3a8f7' />,
        'Cadastrar Serviço': <FormularioCadastroServico tema='#e3a8f7' />
        }

    handleModal = (exibir: boolean, conteudo: JSX.Element | null, titulo: string) => {
        this.setState({
            abrirModal: exibir,
            conteudoModal: conteudo,
            tituloModal: titulo
        })
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);

        if (this.conteudoModais.hasOwnProperty(novaTela)) {
            this.handleModal(true, this.conteudoModais[novaTela], novaTela)
        } 
        else {
            this.setState({
                tela: novaTela
            });
        }
    };

    render() {
        let barraNavegacao = <BarraNavegacao selecionarView={this.selecionarView} tema="#B80BF3" botoes={[
            {nome: 'Cliente', dropdownItems: ['Listar Clientes', 'Cadastrar Cliente'].map(item => ({nome: item}))},
            {nome: 'Pet', dropdownItems: ['Listar Pets', 'Cadastrar Pet'].map(item => ({nome: item}))},
            {nome: 'Serviço', dropdownItems: ['Listar Serviços', 'Cadastrar Serviço'].map(item => ({nome: item}))},
            {nome: 'Produtos', dropdownItems: ['Listar Produtos', 'Cadastrar Produto'].map(item => ({nome: item}))} 
        ]}/>
        
        let tela;

        switch (this.state.tela) {
            case 'Listar Clientes':
                tela = <ListaCliente clientes={clientes} tema="#e3a8f7" />;
                break;
            case 'Listar Pets':
                tela = <ListaPets tema="#e3a8f7" />;
                break;
            case 'Listar Serviços':
                tela = <ListaServicos tema="#e3a8f7" />;
                break;
            case 'Listar Produtos':
                tela = <ListaPets tema="#e3a8f7" />;
                break;
            default:
                tela = <ListaPets tema="#e3a8f7" />;
                break;
        }

        return (
            <>
                {barraNavegacao}
                {tela}
                <Modal centered size="lg" show={this.state.abrirModal} onHide={() => this.handleModal(false, null, '')}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.tituloModal}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.conteudoModal}
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}