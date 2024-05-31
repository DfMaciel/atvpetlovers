import Exclusao from "../exclusao";
import Produto from "../../modelo/produto";
import Entrada from "../../io/entrada";
import ListagemProduto from "./listagemProduto";

export default class ExclusaoProduto extends Exclusao {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor (produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public excluir(): void {
        console.log('\nInício da exclusão de produto')
        let listaProdutos = new ListagemProduto(this.produtos)
        listaProdutos.listar()
        let escolhaProduto = this.entrada.receberTexto('Por favor informe o nome do produto que deseja excluir: ')
        let produto = this.produtos.find(produto => produto.getNome === escolhaProduto)
        if (produto) {
            console.log('Produto encontrado: ', produto.getNome)
            let confirmacao = this.entrada.receberTextoObrigatorio(`Você deseja excluir o produto ${produto.getNome} (S/N)? `, 'Confirmação inválida, por favor insira uma resposta correta.')
                if (confirmacao.toUpperCase() === 'S') {
                    let indice = this.produtos.indexOf(produto)
                    this.produtos.splice(indice, 1)
                    console.log('Produto excluído com sucesso')
                }
                else {
                    console.log('Exclusão cancelada.')
                    return
                }
        } else {
            console.log('Produto não encontrado')
        }
        
    }
}