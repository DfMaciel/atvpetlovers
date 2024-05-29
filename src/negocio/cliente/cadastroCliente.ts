import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import Cadastro from "../cadastro"
import Telefone from "../../modelo/telefone"
import RG from "../../modelo/rg"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);

        // Recebendo nome e nome social
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        // Recebendo CPF e data de emissão
        let valorCPF = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let dataCPF = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let cpf = new CPF(valorCPF, this.dividirData(dataCPF));
        // Recebendo RG e data de emissão
        let valorRG = this.entrada.receberTexto('Por favor informe o número do RG: ')
        let dataRG = this.entrada.receberTexto('Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: ')
        let rg = new RG(valorRG, this.dividirData(dataRG))
        // Recebendo telefone e DDD
        let ddd = this.entrada.receberTexto('Por favor insira o DDD do seu número de telefone: ')
        let numero = this.entrada.receberTexto('Por favor insira o número de telefone: ')
        let telefone = new Telefone(ddd, numero)
        // Adicionando a data de registro
        let data = newDate()
        // Adicionando dados ao cliente
        let cliente = new Cliente(nome, nomeSocial, cpf);
        cliente.addRgs(rg)
        cliente.addTelefones(telefone)
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
    private dividirData(data: string): Date {
        let partesData = data.split('/')
        let ano = parseInt(partesData[2])
        let mes = parseInt(partesData[1])
        let dia = parseInt(partesData[0])
        
        return new Date(ano, mes-1, dia)
    }
}