import Entrada from "../../io/entrada";
import Exclusao from "../exclusao";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";

export default class ExclusaoCliente extends Exclusao {
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, pets: Array<Pet>) {
        super()
        this.entrada = new Entrada()
        this.clientes = clientes
        this.pets = pets
    }

    public excluir(): void {
        console.log('\nInício da exclusão de cliente')
        let cliCpf = this.entrada.receberTexto('Por favor informe o CPF do cliente que deseja excluir: ')
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cliCpf)
        if (cliente) {
            let indice = this.clientes.indexOf(cliente)
            let confirmacao = this.entrada.receberTexto(`Você deseja excluir o cliente ${cliente.nome} (S/N)? `)
            if (confirmacao.toUpperCase() === 'S') {
                this.clientes.splice(indice, 1)
                this.pets.forEach(pet => {
                    if (pet.getDono === cliente) {
                        pet.setDono(null)
                    }
                })
                console.log('Cliente excluído com sucesso!')
            } else {
                console.log('Exclusão cancelada!')
            }
        } else {
            console.log('Cliente não encontrado!')
        }
    }
}