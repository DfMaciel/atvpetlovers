import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import EdicaoClientes from "../negocio/cliente/edicaoCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import CadastroPet from "../negocio/pet/cadastroPet";
import EdicaoPet from "../negocio/pet/edicaoPet";
import ListagemPets from "../negocio/pet/listagemPet";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import CadastroServico from "../negocio/servico/cadastroServico";
import ListagemProduto from "../negocio/produto/listagemProduto";
import ListagemServicos from "../negocio/servico/listagemServico";
import EdicaoProduto from "../negocio/produto/edicaoProduto";
import EdicaoServico from "../negocio/servico/edicaoServico";
import ExclusaoCliente from "../negocio/cliente/exclusaoCliente";
import ExclusaoPets from "../negocio/pet/exclusaoPet";
import ExclusaoProduto from "../negocio/produto/exclusaoProduto";
import ExclusaoServico from "../negocio/servico/exclusaoServico";
import AdicionarProduto from "../negocio/cliente/adicionarProduto";
import AdicionarServico from "../negocio/cliente/adicionarServico";
import ListagemClientesProdutos from "../negocio/produto/listagemDezClientes";
import ListagemClientesServicos from "../negocio/servico/listagemDezClientes";
import ProdutosMaisConsumidos from "../negocio/produto/listagemMaisConsumidos";
import ServicosMaisConsumidos from "../negocio/servico/listagemMaisConsumidos";
import ListagemProdutosMaisConsumidosPets from "../negocio/produto/listagemMaisConsumidosPets";
import ListagemServicosMaisConsumidosPets from "../negocio/servico/listagemMaisConsumidosPets";
import ListagemClientesValorProdutos from "../negocio/produto/listagemDezClientesValor";
import ListagemClientesValorServicos from "../negocio/servico/listagemDezClientesValor";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar`);
    console.log(`2 - Listar`);
    console.log(`3 - Edição`)
    console.log(`4 - Exclusão`)
    console.log('5 - Adicionar consumo')
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`\nPor favor, escolha uma opção: `)
    switch (opcao) {
        case 1: 
            let cadastroExecucao = true
            while (cadastroExecucao) {
                console.log('\n')
                console.log('--- Cadastro ---')
                console.log(`1 - Cadastro de clientes`)
                console.log(`2 - Cadastro de pets`)
                console.log(`3 - Cadastro de produtos`)
                console.log(`4 - Cadastro do serviços`)
                console.log(`0 - Voltar`)
                let escolhaCadastro = entrada.receberNumero(`\nPor favor, escolha uma opção de cadastro: `)
                switch(escolhaCadastro) {
                    case 1:
                        let cadastroCliente = new CadastroCliente(empresa.getClientes)
                        cadastroCliente.cadastrar()
                        break;
                    case 2:
                        let cadastroPet = new CadastroPet(empresa.getPets, empresa.getClientes)
                        cadastroPet.cadastrar()
                        break;
                    case 3:
                        let cadastroProdutos = new CadastroProduto(empresa.getProdutos)
                        cadastroProdutos.cadastrar()
                        break;
                    case 4:
                        let cadastroServicos = new CadastroServico(empresa.getServicos)
                        cadastroServicos.cadastrar()
                        break;
                    case 0:
                        cadastroExecucao = false
                        break;
                    default:
                        console.log('Número inválido')
                }
            }
            break;
        case 2:
            let listagemExecucao = true
            while (listagemExecucao) {

                console.log('\n')
                console.log('--- Listagem ---')
                console.log(`1 - Listagem de clientes`)
                console.log(`2 - Listagem de pets`)
                console.log(`3 - Listagem de produtos`)
                console.log(`4 - Listagem do serviços`)
                console.log(`5 - Clientes que mais consumiram produtos`)
                console.log(`6 - Clientes que mais consumiram serviços`)
                console.log(`7 - Produtos mais consumidos`)
                console.log(`8 - Serviços mais consumidos`)
                console.log(`9 - Produtos mais consumidos por pets`)
                console.log(`10 - Serviços mais consumidos por pets`)
                console.log(`11 - Clientes que mais gastaram com produtos`)
                console.log(`12 - Clientes que mais gastaram com serviços`)
                console.log(`0 - Voltar`)
                let escolhaListagem = entrada.receberNumero(`\nPor favor, escolha uma opção de listagem: `)
                switch(escolhaListagem) {
                    case 1:
                        let listagemClientes = new ListagemClientes(empresa.getClientes)
                        listagemClientes.listar()
                        break;
                    case 2:
                        let listagemPet = new ListagemPets(empresa.getPets)
                        listagemPet.listar()
                        break;
                    case 3:
                        let listagemProdutos = new ListagemProduto(empresa.getProdutos)
                        listagemProdutos.listar()
                        break;
                    case 4:
                        let listagemServicos = new ListagemServicos(empresa.getServicos)
                        listagemServicos.listar()
                        break;
                    case 5:
                        let listagemClientesProdutos = new ListagemClientesProdutos(empresa.getClientes)
                        listagemClientesProdutos.listar()
                        break;
                    case 6:
                        let listagemClientesServicos = new ListagemClientesServicos(empresa.getClientes)
                        listagemClientesServicos.listar()
                        break;
                    case 7:
                        let produtosMaisConsumidos = new ProdutosMaisConsumidos(empresa.getClientes)
                        produtosMaisConsumidos.listar()
                        break;
                    case 8:
                        let servicosMaisConsumidos = new ServicosMaisConsumidos(empresa.getClientes)
                        servicosMaisConsumidos.listar()
                        break;
                    case 9:
                        let listagemProdutosMaisConsumidosPets = new ListagemProdutosMaisConsumidosPets(empresa.getClientes)
                        listagemProdutosMaisConsumidosPets.listar()
                        break;
                    case 10:
                        let listagemServicosMaisConsumidosPets = new ListagemServicosMaisConsumidosPets(empresa.getClientes)
                        listagemServicosMaisConsumidosPets.listar()
                        break;
                    case 11:
                        let listagemClientesValorProdutos = new ListagemClientesValorProdutos(empresa.getClientes)
                        listagemClientesValorProdutos.listar()
                        break;
                    case 12:
                        let listagemClientesValorServicos = new ListagemClientesValorServicos(empresa.getClientes)
                        listagemClientesValorServicos.listar()
                        break;
                    case 0:
                        listagemExecucao = false
                        break; 
                    default:
                        console.log('Número inválido')  
                }
            }
            break;

        case 3:
            let edicaoExecucao = true
            while (edicaoExecucao) {
                console.log('\n')
                console.log('--- Edição ---')
                console.log(`1 - Edição de clientes`)
                console.log(`2 - Edição de pets`)
                console.log(`3 - Edição de produtos`)
                console.log(`4 - Edição do serviços`)
                console.log(`0 - Voltar`)
                let escolhaEdicao = entrada.receberNumero(`\nPor favor, escolha uma opção de edição: `)
                switch(escolhaEdicao) {
                    case 1:
                        let edicaoClientes = new EdicaoClientes(empresa.getClientes)
                        edicaoClientes.editar()
                        break;
                    case 2:
                        let edicaoPet = new EdicaoPet(empresa.getPets)
                        edicaoPet.editar()
                        break;
                    case 3:
                        let edicaoProdutos = new EdicaoProduto(empresa.getProdutos)
                        edicaoProdutos.editar()
                        break;
                    case 4:
                        let edicaoServicos = new EdicaoServico(empresa.getServicos)
                        edicaoServicos.editar()
                        break;
                    case 0:
                        edicaoExecucao = false
                        break;
                    default:
                        console.log('Número inválido')
                }
            }
            break
            
        case 4:
            let exclusaoExecucao = true
            while (exclusaoExecucao) {
                    console.log('\n')
                    console.log('--- Exclusão ---')
                    console.log(`1 - Exclusão de clientes`)
                    console.log(`2 - Exclusão de pets`)
                    console.log(`3 - Exclusão de produtos`)
                    console.log(`4 - Exclusão do serviços`)
                    console.log(`0 - Voltar`)
                    let escolhaExclusao = entrada.receberNumero(`\nPor favor, escolha uma opção de exclusão: `)
                    switch(escolhaExclusao) {
                        case 1:
                            let exclusaoClientes = new ExclusaoCliente(empresa.getClientes, empresa.getPets)
                            exclusaoClientes.excluir()
                            break;
                        case 2:
                            let exclusaoPet = new ExclusaoPets(empresa.getPets, empresa.getClientes)
                            exclusaoPet.excluir()
                            break;
                        case 3:
                            let exclusaoProdutos = new ExclusaoProduto(empresa.getProdutos)
                            exclusaoProdutos.excluir()
                            break;
                        case 4:
                            let exclusaoServicos = new ExclusaoServico(empresa.getServicos)
                            exclusaoServicos.excluir()
                            break;
                        case 0:
                            exclusaoExecucao = false
                            break;
                        default:
                            console.log('Opção inválida.')
                        }
                    }
                    break;
        case 5:
            let adicao = true
            while (adicao) {
                console.log('\n')
                console.log('--- Adicionar consumo ---')
                console.log('1 - Adicionar consumo de produtos')
                console.log('2 - Adicionar consumo de serviços')
                console.log('0 - Voltar')
                let opcaoConsumo = entrada.receberNumero('Por favor, escolha uma opção: ')
                switch (opcaoConsumo) {
                    case 1:
                        let adicionarProduto = new AdicionarProduto(empresa.getProdutos, empresa.getClientes)
                        adicionarProduto.adicionar()
                        break;
                    case 2:
                        let adicionarServico = new AdicionarServico(empresa.getServicos, empresa.getClientes)
                        adicionarServico.adicionar()
                        break;
                    case 0:
                        adicao = false
                        break;
                    default:
                        console.log('Opção inválida.')
                    }
                }
                break;
        case 0: 
            console.log('\n')
            console.log('Até mais')
            execucao = false
            break;
        default:
            console.log('\nOpção inválida.')
        }
}