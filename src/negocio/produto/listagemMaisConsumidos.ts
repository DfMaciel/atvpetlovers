import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ProdutosMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, ) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public listar() {
        let produtosConsumidos: Array<{ produtoNome: string, quantidade: number }> = []

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                let produtoConsumido = produtosConsumidos.find(produtoConsumido => produtoConsumido.produtoNome === produto.nome)

                if (produtoConsumido) {
                    produtoConsumido.quantidade++
                } else {
                    produtosConsumidos.push({
                        produtoNome: produto.nome,
                        quantidade: 1
                    })
                }
            })
        })

        console.log("Listagem de produtos mais consumidos")
        produtosConsumidos.sort((a, b) => b.quantidade - a.quantidade).forEach((produto, index) => {
            console.log(`${index + 1}º - ${produto.produtoNome} - Quantidade: ${produto.quantidade}`)
        })
    }
}