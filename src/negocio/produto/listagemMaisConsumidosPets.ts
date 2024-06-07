import Listagem from '../listagem'
import Cliente from '../../modelo/cliente'
import Entrada from '../../io/entrada'

export default class ListagemProdutosMaisConsumidosPets extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada ()
    }
    public listar(): void {
        console.log('\nListagem de produtos mais consumidos por pets')
        let tipoPet = this.entrada.receberTextoObrigatorio('Por favor informe o tipo do pet: ', 'Tipo inválido, por favor insira um tipo válido.')
        let racaPet = this.entrada.receberTextoObrigatorio('Por favor informe a raça do pet: ', 'Raça inválida, por favor insira uma raça válida.')
        let produtosConsumidos: Array<{ produtoNome: string, quantidade: number }> = []
        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                if (pet.getTipo === tipoPet && pet.getRaca === racaPet) {
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
                }
            })
        }
    )
    produtosConsumidos.sort((a, b) => b.quantidade - a.quantidade).forEach((produto, index) => {
        console.log(`${index + 1}º - ${produto.produtoNome} - Quantidade: ${produto.quantidade}`)
    })

    let digitar = this.entrada.receberTexto('Aperte enter para continuar')

    }
}