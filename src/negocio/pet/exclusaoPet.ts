import Exclusao from "../exclusao";
import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Cliente from "../../modelo/cliente";

export default class ExclusaoPets extends Exclusao {
    private pets: Array<Pet>
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super()
        this.pets = pets
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public excluir(): void {
        console.log('\nInício da exclusão de pet')
            let petEscolhido = this.entrada.receberTexto('Por favor insira o nome do pet que deseja excluir: ')
            let pet = this.pets.find(pet => pet.getNome === petEscolhido)
            if (pet) {
                let indice = this.pets.indexOf(pet)
                let confirmacao = this.entrada.receberTextoObrigatorio(`Você deseja excluir o pet ${pet.getNome} (S/N)? `, 'Confirmação inválida, por favor insira uma resposta correta.')
                if (confirmacao.toUpperCase() === 'S') {
                    this.pets.splice(indice, 1)
                    this.clientes.forEach(cliente => {
                        if (cliente.getPets.find(pet => pet.getNome === petEscolhido)) {
                            cliente.excluirPet(cliente.getPets.filter(pet => pet.getNome !== petEscolhido))
                        }
                    })
                    console.log('Pet excluído com sucesso!')
                }
                else {
                    console.log('Exclusão cancelada!')
                }
            }
            else {
                console.log('Pet não encontrado.')
            }
        }
    }