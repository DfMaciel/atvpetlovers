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
            console.log(`Data de cadastro: ` + cliente.getDataCadastro);
            let clientePets = cliente.getPets;
            console.log('Pets:')
            if (clientePets.length === 0) {
                console.log('O cliente não possui pets cadastrados')
            }
            clientePets.forEach(pet => {
                console.log(`Nome: ` + pet.getNome)
                console.log(`Tipo: ` + pet.getTipo)
                console.log(`Raça: ` + pet.getRaca)
                console.log(`Genero: ` + pet.getGenero)     
            console.log(`--------------------------------------`);
            });
            console.log('Produtos consumidos:')
            let clienteProdutos = cliente.getProdutosConsumidos;
            if (clienteProdutos.length === 0) {
                console.log('O cliente não possui produtos consumidos')
            }
            clienteProdutos.forEach(produto => {
                console.log(`Nome: ` + produto.getNome)
                console.log(`Valor: R$ ` + produto.getPreco)
                console.log(`--------------------------------------`);
            });
            let clienteServicos = cliente.getServicosConsumidos;
            console.log('Serviços consumidos:')
            if (clienteServicos.length === 0) {
                console.log('O cliente não possui serviços consumidos')
            }
            clienteServicos.forEach(servico => {
                console.log(`Nome: ` + servico.getNome)
                console.log(`Valor: R$` + servico.getValor)
                console.log(`--------------------------------------`);
            });
        });
        let entrada = this.entrada.receberTexto(`Aperte enter para continuar`);
    }
}