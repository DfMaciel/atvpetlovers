import Entrada from "../../io/entrada";
import Adicao from "../adicao";
import Servico from "../../modelo/servico";
import Cliente from "../../modelo/cliente";
import ListagemServicos from "../servico/listagemServico";

export default class AdicionarServico extends Adicao {
    private servicos: Array<Servico>
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(servicos: Array<Servico>, clientes: Array<Cliente>) {
        super()
        this.servicos = servicos
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public adicionar(): void {
        console.log('\nIniciando registro de Serviço')
        let listagemServico= new ListagemServicos(this.servicos)
        listagemServico.listar()
        let cpfCliente = this.entrada.receberTextoObrigatorio('Por favor informe o cpf do cliente: ', 'Cpf inválido, por favor insira um cpf válido')
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpfCliente)
        if (!cliente) {
            console.log('Cliente não encontrado')
        } 
        else {
            let nomeServico = this.entrada.receberTextoObrigatorio('Por favor informe o nome do serviço: ', 'Nome inválido, por favor insira um nome válido')
            let servico = this.servicos.find(servico => servico.getNome === nomeServico)
            if (!servico) {
                console.log('Serviço não encontrado')
            }
            else {
                cliente.addServicosConsumidos(servico)
                console.log('Serviço registrado com sucesso')
            }
        }
    }
}