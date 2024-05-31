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
        let nome = this.entrada.receberTextoObrigatorio(`Digite o nome do produto: `, `Nome inválido, por favor insira um nome válido.`)
        let preco = this.entrada.receberNumeroObrigatorio(`Digite o preço do produto: R$`, `Preço inválido, por favor insira um preço válido.`)
        let produto = new Produto(nome)
        produto.preco = preco
        this.produtos.push(produto)
    }
}