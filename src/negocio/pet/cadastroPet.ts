import Entrada from "../../io/entrada";
import Cadastro from "../cadastro";
import Pet from "../../modelo/pet";
import Cliente from "../../modelo/cliente";

export default class CadastroPet extends Cadastro {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada
    }
}
