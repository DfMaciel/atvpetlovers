import Listagem from '../listagem'
import Cliente from '../../modelo/cliente'
import Entrada from '../../io/entrada'

export default class ListagemClientesValorProdutos extends Listagem{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public listar(): void {
        console.log('\nListagem dos dez clientes que mais gastaram com produtos')
        let listaClientes = <Array<{ nomeCliente: string, consumoCliente: number}>>[]
        if (this.clientes.length === 0) {
            console.log('Não há clientes cadastrados')
        }
        this.clientes.forEach(cliente => {
            let consumo = 0
            cliente.getProdutosConsumidos.forEach(produto => {
                consumo += produto.getPreco
            })
            let dadosCliente = {
                nomeCliente: cliente.nome,
                consumoCliente: consumo
            }
            listaClientes.push(dadosCliente)
        })
        
        listaClientes.sort((a, b) => {
            return b.consumoCliente - a.consumoCliente
        })
        
        listaClientes.forEach((cliente, index) => {
            if (index < 10) {
                console.log(` ${index + 1}º - ${cliente.nomeCliente} - Valor consumido: R$${cliente.consumoCliente}`)
            }
        })

        let digitar = this.entrada.receberTexto('Aperte enter para continuar')

    }
}