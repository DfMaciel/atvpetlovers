import Listagem from "../listagem";
import Produto from "../../modelo/produto";
import Entrada from "../../io/entrada";

export default class ListagemProduto extends Listagem {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        if (this.produtos.length === 0) {
            console.log('Não há produtos cadastrados')
        }
        this.produtos.forEach(produto => {
            console.log(`Nome: ` + produto.nome);
            console.log(`Preço: R$ ` + produto.preco);
            console.log(`--------------------------------------`);
        }
        )
        let entrada = this.entrada.receberTexto(`Aperte enter para continuar`);
    }
}