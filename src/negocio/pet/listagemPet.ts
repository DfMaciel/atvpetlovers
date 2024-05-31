import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Listagem from "../listagem";
import Entrada from "../../io/entrada";

export default class ListagemPets extends Listagem {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada ()
    }
    public listar(): void {
        console.log(`\nLista de todos os pets: `);
        if (this.pets.length === 0) {
            console.log('Não há pets cadastrados')
        }
        this.pets.forEach(pet => {
            console.log(`Nome: ` + pet.getNome);
            console.log(`Tipo: ` + pet.getTipo);
            console.log(`Raça: ` + pet.getRaca);
            console.log(`Genero: ` + pet.getGenero);
            console.log(`Dono: ` + (pet.getDono ? pet.getDono.nome : 'Sem dono'));
            console.log(`--------------------------------------`);
        });
        let entrada = this.entrada.receberTexto(`Aperte enter para continuar`);
    }
}