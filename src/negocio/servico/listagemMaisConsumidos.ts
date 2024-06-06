import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ServicosMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, ) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public listar() {
        let servicosConsumidos: Array<{ servicoNome: string, quantidade: number }> = []

        this.clientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(servico => {
                let servicoConsumido = servicosConsumidos.find(servicoConsumido => servicoConsumido.servicoNome === servico.nome)

                if (servicoConsumido) {
                    servicoConsumido.quantidade++
                } else {
                    servicosConsumidos.push({
                        servicoNome: servico.nome,
                        quantidade: 1
                    })
                }
            })
        })

        console.log("Listagem de produtos mais consumidos")
        servicosConsumidos.sort((a, b) => b.quantidade - a.quantidade).forEach((servico, index) => {
            console.log(`${index + 1}º - ${servico.servicoNome} - Quantidade: ${servico.quantidade}`)
        })
    }
}