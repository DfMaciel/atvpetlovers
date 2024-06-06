import Listagem from "../listagem";
import Cliente from "../../modelo/cliente";
import Entrada from "../../io/entrada";

export default class ListagemClientesServicos extends Listagem {
    private clientes: Array<Cliente>    
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public listar(): void {
        console.log('Listagem dos clientes que mais consumiram serviços:')
        if (this.clientes.length === 0) {
            console.log('Não há clientes cadastrados')
        }
        let listaClientes: Array<{ nome: string, quantidadeServico: number }> = []
        this.clientes.forEach(cliente => {
            let dadosCliente = {
                nome: cliente.nome,
                quantidadeServico: cliente.getServicosConsumidos.length
            }
            listaClientes.push(dadosCliente)
        })

        listaClientes.sort((a, b) => {
            return b.quantidadeServico - a.quantidadeServico
        })

        listaClientes.forEach((cliente, index) => {
            if (index < 10) {
                console.log(` ${index + 1}º - ${cliente.nome} - Quantidade consumida: ${cliente.quantidadeServico}`)
            }
        })
        
        let digitar = this.entrada.receberTexto('Aperte enter para continuar')
    }
}