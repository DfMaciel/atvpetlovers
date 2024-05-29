import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        if (this.clientes.length === 0) {
            console.log('Não há clientes cadastrados')
        }
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor + ` Data de emissão: ` + cliente.getCpf.getDataEmissao);
            cliente.getRgs();
            cliente.getTelefones();
            let clientePets = cliente.getPets;
            console.log('Pets:')
            clientePets.forEach(pet => {
                console.log(`Nome: ` + pet.getNome)
                console.log(`Tipo: ` + pet.getTipo)
                console.log(`Raça: ` + pet.getRaca)
                console.log(`Genero: ` + pet.getGenero)     
            console.log(`--------------------------------------`);
        });
        let entrada = this.entrada.receberTexto(`Aperte enter para continuar`);
    });
    }
}