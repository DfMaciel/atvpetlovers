import Produto from "../../modelo/produto";
import Edicao from "../edicao";
import Entrada from "../../io/entrada";
import ListagemProduto from "./listagemProduto";

export default class EdicaoProduto extends Edicao {
    private produtos: Array<Produto>
    private entrada: Entrada
    
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public editar():void {
        console.log('\nInicio da edição de produtos')
        let editar = true

        while(editar) {
            let listagemProduto = new ListagemProduto(this.produtos)
            listagemProduto.listar()
            let nomeSelecionado = this.entrada.receberTexto('Digite o nome do produto que será alterado: ')
            let produto = this.produtos.find(produto => produto.nome === nomeSelecionado)
            if (produto) {
                console.log('Produto encontrado: ', produto.nome)
                console.log('O que você deseja alterar?')
                console.log('1 - Nome')
                console.log('2 - Preço')
                console.log('0 - Sair')

                let escolhaEditar = this.entrada.receberNumero('Por favor escolha uma operação: ')
                switch (escolhaEditar) {
                    case 1:
                        let novoNomeProduto = this.entrada.receberTexto('Digite o novo nome do produto: ')
                        if (novoNomeProduto === '') {
                            novoNomeProduto = produto.nome
                            console.log('Nome inválido')
                        }
                        produto.nome = novoNomeProduto
                        break
                    case 2:
                        let novoPrecoProduto = this.entrada.receberNumero('Digite o novo preço do produto: R$')
                        if (novoPrecoProduto === 0) {
                            novoPrecoProduto = produto.preco
                            console.log('Preço inválido')
                        }
                        produto.preco = novoPrecoProduto
                    case 0:
                        editar = false
                        break  
                    default: 
                        console.log('Opção inválida')
                }
                console.log('Produto editado com sucesso.')
                editar = false
                break
            }
            else {
                console.log('Produto não encontrado')
                editar = false
                break
            }
            
            }
        }
    }