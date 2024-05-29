import Produto from '../../modelo/produto'
import Cadastro from '../cadastro'
import Entrada from '../../io/entrada'

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        let nome = this.entrada.receberTexto(`Digite o nome do produto: `)
        let preco = this.entrada.receberNumero(`Digite o preço do produto: R$`)
        let produto = new Produto(nome)
        produto.preco = preco
        this.produtos.push(produto)
    }
}