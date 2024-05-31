import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import Cadastro from "../cadastro"
import Telefone from "../../modelo/telefone"
import RG from "../../modelo/rg"
import Formatacoes from "../formatacoes"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    private formatacao: Formatacoes
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
        this.formatacao = new Formatacoes()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);

        // Recebendo nome e nome social
        let nome = this.entrada.receberTextoObrigatorio(`Por favor informe o nome do cliente: `, 'Nome inválido, por favor insira um nome válido.')
        let nomeSocial = this.entrada.receberTextoObrigatorio(`Por favor informe o nome social do cliente: `, 'Nome social inválido, por favor insira um nome social válido.')
        // Recebendo CPF e data de emissão
        let valorCPF = this.entrada.receberTextoObrigatorio(`Por favor informe o número do cpf: `, 'CPF inválido, por favor insira um CPF válido.');
        let dataCPF = this.entrada.receberTextoObrigatorio(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `, 'Data de emissão inválida, por favor insira uma data de emissão válida.');
        let cpf = new CPF(valorCPF, this.formatacao.StringData(dataCPF));
        let cpfBuscado = this.clientes.find(cliente => cliente.getCpf.getValor === cpf.getValor)
        if (cpfBuscado) {
            console.log('CPF já cadastrado, por favor utilize um CPF não registrado.')
            return
        }
        if (!cpfBuscado) {
            // Recebendo RG e data de emissão
            let valorRG = this.entrada.receberTextoObrigatorio('Por favor informe o número do RG: ', 'RG inválido, por favor insira um RG válido.')
            let dataRG = this.entrada.receberTextoObrigatorio('Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: ', 'Data de emissão inválida, por favor insira uma data de emissão válida.')
            let rg = new RG(valorRG, this.formatacao.StringData(dataRG))
            // Recebendo telefone e DDD
            let ddd = this.entrada.receberTextoObrigatorio('Por favor insira o DDD do seu número de telefone: ', 'DDD inválido, por favor insira um DDD válido.')
            let numero = this.entrada.receberTextoObrigatorio('Por favor insira o número de telefone: ', 'Número de telefone inválido, por favor insira um número de telefone válido.')
            let telefone = new Telefone(ddd, numero)
            // Adicionando dados ao cliente
            let cliente = new Cliente(nome, nomeSocial, cpf);
            cliente.addRgs(rg)
            cliente.addTelefones(telefone)
            this.clientes.push(cliente)
            console.log(`\nCadastro concluído :)\n`);
        }
    }
}