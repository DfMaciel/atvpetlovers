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
        let nome = this.entrada.receberTextoObrigatorio('Por favor informe o nome do pet: ', 'Nome inválido, por favor insira um nome válido')
        let tipo = this.entrada.receberTextoObrigatorio('Por favor informe qual o tipo do pet: ', 'Tipo inválido, por favor insira um tipo válido')  
        let raca = this.entrada.receberTextoObrigatorio('Por favor informe a raça do pet: ', 'Raça inválida, por favor insira uma raça válida')
        let generoinit = this.entrada.receberTextoObrigatorio('Por favor informe o genero do pet, no padrão M/F: ', 'Gênero inválido, por favor insira um gênero válido')
        
        let genero = ''
        switch (generoinit.toLocaleLowerCase()){
            case('m'):
                genero = 'Macho'
                break;
            case('f'):
                genero = 'Femea'
                break;
        }
        let pet = new Pet(nome, tipo, genero, raca)

        let adicionando = true
        while (adicionando) {
            let clienteCpf = this.entrada.receberTextoObrigatorio('Insira o cpf do Cliente dono do pet: ', 'CPF inválido, por favor insira um CPF válido')
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
