import Entrada from "../../io/entrada";
import Adicao from "../adicao";
import Produto from "../../modelo/produto";
import Cliente from "../../modelo/cliente";
import ListagemProduto from "../produto/listagemProduto";

export default class AdicionarProduto extends Adicao {
    private produtos: Array<Produto>
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(produtos: Array<Produto>, clientes: Array<Cliente>) {
        super()
        this.produtos = produtos
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public adicionar(): void {
        console.log('\nIniciando registro de produto')
        let listagemProduto = new ListagemProduto(this.produtos)
        listagemProduto.listar()
        let cpfCliente = this.entrada.receberTextoObrigatorio('Por favor informe o cpf do cliente: ', 'Cpf inválido, por favor insira um cpf válido')
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpfCliente)
        if (!cliente) {
            console.log('Cliente não encontrado')
        } 
        else {
            let nomeProduto = this.entrada.receberTextoObrigatorio('Por favor informe o nome do produto: ', 'Nome inválido, por favor insira um nome válido')
            let produto = this.produtos.find(produto => produto.getNome === nomeProduto)
            if (!produto) {
                console.log('Produto não encontrado')
            }
            else {
                cliente.addProdutosConsumidos(produto)
                console.log('Produto registrado com sucesso')
            }
        }
    }
}