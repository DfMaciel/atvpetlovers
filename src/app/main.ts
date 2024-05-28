import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import CadastroPet from "../negocio/pet/cadastroPet";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar`);
    console.log(`2 - Listar`);
    console.log(`3 - Edição`)
    console.log(`4 - Exclusão`)
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    switch (opcao) {
        case 1: 
            console.log('\n')
            console.log('--- Cadastro ---')
            console.log(`1 - Cadastro de clientes`)
            console.log(`2 - Cadastro de pets`)
            console.log(`3 - Cadastro de produtos`)
            console.log(`4 - Cadastro do serviços`)
            console.log(`0 - Voltar`)
            let escolhaCadastro = entrada.receberNumero(`Por favor, escolha uma opção de cadastro: `)
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
                    let cadastroServicos = new CadastroServicos(empresa.getServicos)
                    cadastroServicos.cadastrar()
                    break;
                case 0:
                    break;
                default:
                    console.log('Número inválido')
            }
        case 2:
            console.log('\n')
            console.log('--- Listagem ---')
            console.log(`1 - Listagem de clientes`)
            console.log(`2 - Listagem de pets`)
            console.log(`3 - Listagem de produtos`)
            console.log(`4 - Listagem do serviços`)
            console.log(`0 - Voltar`)
            let escolhaListagem = entrada.receberNumero(`Por favor, escolha uma opção de listagem: `)
            switch(escolhaListagem) {
                case 1:
                    let listagemClientes = new ListagemClientes(empresa.getClientes)
                    listagemClientes.listar()
                    break;
                case 2:
                    let listagemPet = new ListagemPet(empresa.getPets, empresa.getClientes)
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
                case 0:
                    break;
                default:
                    console.log('Número inválido')
            }
        case 3:
            console.log('\n')
            console.log('--- Edição ---')
            console.log(`1 - Edição de clientes`)
            console.log(`2 - Edição de pets`)
            console.log(`3 - Edição de produtos`)
            console.log(`4 - Edição do serviços`)
            console.log(`0 - Voltar`)
            let escolhaEdicao = entrada.receberNumero(`Por favor, escolha uma opção de edição: `)
            switch(escolhaEdicao) {
                case 1:
                    let edicaoClientes = new EdicaoClientes(empresa.getClientes)
                    edicaoClientes.editar()
                    break;
                case 2:
                    let edicaoPet = new EdicaoPet(empresa.getPets, empresa.getClientes)
                    edicaoPet.editar()
                    break;
                case 3:
                    let edicaoProdutos = new EdicaoProduto(empresa.getProdutos)
                    edicaoProdutos.editar()
                    break;
                case 4:
                    let edicaoServicos = new EdicaoServicos(empresa.getServicos)
                    edicaoServicos.editar()
                    break;
                case 0:
                    break;
                default:
                    console.log('Número inválido')
            }
        case 4:
            console.log('\n')
            console.log('--- Edição ---')
            console.log(`1 - Edição de clientes`)
            console.log(`2 - Edição de pets`)
            console.log(`3 - Edição de produtos`)
            console.log(`4 - Edição do serviços`)
            console.log(`0 - Voltar`)
            let escolhaExclusao = entrada.receberNumero(`Por favor, escolha uma opção de exclusão: `)
            switch(escolhaExclusao) {
                case 1:
                    let exclusaoClientes = new ExclusaoClientes(empresa.getClientes)
                    exclusaoClientes.excluir()
                    break;
                case 2:
                    let exclusaoPet = new ExclusaoPet(empresa.getPets, empresa.getClientes)
                    exclusaoPet.excluir()
                    break;
                case 3:
                    let exclusaoProdutos = new ExclusaoProduto(empresa.getProdutos)
                    exclusaoProdutos.excluir()
                    break;
                case 4:
                    let exclusaoServicos = new ExclusaoServicos(empresa.getServicos)
                    exclusaoServicos.excluir()
                    break;
                case 0:
                    break;
                default:
                    console.log('Número inválido')
            }
        case 0: 
            console.log('\n')
            console.log('Até mais')
    }
}