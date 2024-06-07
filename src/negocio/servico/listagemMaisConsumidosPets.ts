import Listagem from '../listagem'
import Cliente from '../../modelo/cliente'
import Entrada from '../../io/entrada'

export default class ListagemServicosMaisConsumidosPets extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada ()
    }
    public listar(): void {
        console.log('\nListagem de serviços mais consumidos por pets')
        let tipoPet = this.entrada.receberTextoObrigatorio('Por favor informe o tipo do pet: ', 'Tipo inválido, por favor insira um tipo válido.')
        let racaPet = this.entrada.receberTextoObrigatorio('Por favor informe a raça do pet: ', 'Raça inválida, por favor insira uma raça válida.')
        let servicosConsumidos: Array<{ servicoNome: string, quantidade: number }> = []
        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                if (pet.getTipo === tipoPet && pet.getRaca === racaPet) {
                    cliente.getServicosConsumidos.forEach(servico=> {
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
                }
            })
        }
    )
    servicosConsumidos.sort((a, b) => b.quantidade - a.quantidade).forEach((servico, index) => {
        console.log(`${index + 1}º - ${servico.servicoNome} - Quantidade: ${servico.quantidade}`)
    })

    let digitar = this.entrada.receberTexto('Aperte enter para continuar')

    }
}