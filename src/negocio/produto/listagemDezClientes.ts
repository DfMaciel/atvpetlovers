import Listagem from "../listagem";
import Cliente from "../../modelo/cliente";
import Entrada from "../../io/entrada";

export default class ListagemClientesProdutos extends Listagem {
    private clientes: Array<Cliente>    
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public listar(): void {
        console.log('Listagem dos clientes que mais consumiram produtos:')
        if (this.clientes.length === 0) {
            console.log('Não há clientes cadastrados')
        }
        let listaClientes: Array<{ nome: string, quantidadeProduto: number }> = []
        this.clientes.forEach(cliente => {
            let dadosCliente = {
                nome: cliente.nome,
                quantidadeProduto: cliente.getProdutosConsumidos.length
            }
            listaClientes.push(dadosCliente)
        })

        listaClientes.sort((a, b) => {
            return b.quantidadeProduto - a.quantidadeProduto
        })
    }
}