import Entrada from "../../io/entrada";
import Cadastro from "../cadastro";
import Pet from "../../modelo/pet";
import Cliente from "../../modelo/cliente";

export default class CadastroPet extends Cadastro {
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super()
        this.pets = pets
        this.clientes = clientes
        this.entrada = new Entrada
    }
    public cadastrar(): void {
        console.log('\nInício do cadastro do pet')
        let nome = this.entrada.receberTexto('Por favor informe o nome do pet: ')
        let raca = this.entrada.receberTexto('Por favor informe a raça do pet: ')
        let generoinit = this.entrada.receberTexto('Por favor informe o genero do pet, no padrão M/F: ')
        let tipo = this.entrada.receberTexto('Por favor informe qual o tipo do pet: ')  
        let genero = ''
        switch (generoinit.toLocaleLowerCase()){
            case('m'):
                genero = 'Macho'
                break;
            case('f'):
                genero = 'Femea'
                break;
        }
        let pet = new Pet(nome, raca, genero, tipo)

        let adicionando = true
        while (adicionando) {
            let clienteCpf = this.entrada.receberTexto('Insira o cpf do Cliente dono do pet: ')
            const clienteVinculado = this.clientes.find(cliente => cliente.getCpf.getValor == clienteCpf)
            if (clienteVinculado) {
                clienteVinculado.addPet(pet)
                pet.setDono(clienteVinculado)
                console.log('Cadastro concluído')
                adicionando = false
            }
            else {
                console.log('Erro ao encontrar o CPF')
            }
        }
        this.pets.push(pet)
        console.log('\n Cadastro de pet concluído')
    }
}
