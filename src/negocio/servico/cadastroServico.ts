import Cadastro from "../cadastro";
import Servico from "../../modelo/servico";
import Entrada from "../../io/entrada";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada    
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        let nome = this.entrada.receberTexto(`Digite o nome do serviço: `)
        let valor = this.entrada.receberNumero(`Digite o valor do serviço: R$`)
        let servico = new Servico(nome)
        servico.valor = valor
        this.servicos.push(servico)
    }
}