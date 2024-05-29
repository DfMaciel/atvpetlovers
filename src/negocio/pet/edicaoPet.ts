import Entrada from "../../io/entrada";
import Edicao from "../edicao";
import Pet from "../../modelo/pet";

export default class EdicaoPets extends Edicao {
    private pets: Array<Pet>
    private entrada: Entrada

    constructor(pets: Array<Pet>) {
        super()
        this.entrada = new Entrada()
        this.pets = pets
    }

    public editar(): void {
        console.log('\nInício da edição de pet')
        let editar = true

        while(editar) {
            let petNome = this.entrada.receberTexto('Por favor informe o nome do pet que deseja editar: ')
            let pet = this.pets.find(pet => pet.getNome === petNome)
            if (pet) {
                console.log('Pet encontrado: ', pet.getNome)
                console.log('O que você deseja editar?')
                console.log('1 - Nome')
                console.log('2 - Tipo')
                console.log('3 - Raça')
                console.log('4 - Genero')
                console.log('0 - Voltar')

                let escolhaEditar = this.entrada.receberNumero('Por favor, escolha uma opção de edição: ')
                switch (escolhaEditar) {
                    case 1:
                        let novoNome = this.entrada.receberTexto('Por favor informe o novo nome do pet: ')
                        if (novoNome === '') {
                            novoNome = pet.getNome
                        }
                        pet.setNome(novoNome)
                        break
                    case 2:
                        let novoTipo = this.entrada.receberTexto('Por favor informe o novo tipo do pet: ')
                        if (novoTipo === '') {
                            novoTipo = pet.getTipo
                        }
                        pet.setTipo(novoTipo)
                        break
                    case 3:
                        let novaRaca = this.entrada.receberTexto('Por favor informe a nova raça do pet: ')
                        if (novaRaca === '') {
                            novaRaca = pet.getRaca
                        }
                        pet.setRaca(novaRaca)
                    case 4:
                        let novoGenero = this.entrada.receberTexto('Por favor informe o novo genero do pet: ')
                        if (novoGenero === '') {
                            novoGenero = pet.getGenero
                        }
                        pet.setGenero(novoGenero)
                        break
                    case 5:
                        editar = false
                        break;
                    default: 
                        console.log('Opção inválida')
                }
                break;
            } else {
                console.log('Pet não encontrado. Por favor insira um nome correto.')
                editar = false
                break;   
            }
        }
    }
}