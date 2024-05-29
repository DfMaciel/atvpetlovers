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
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor + ` Data de emissão: ` + cliente.getCpf.getDataEmissao);
            cliente.getRgs();
            cliente.getTelefones();
            cliente.getPets;
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
        let entrada = this.entrada.receberTexto(``);
    }
}