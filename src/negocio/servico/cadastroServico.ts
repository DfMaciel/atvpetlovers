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
        let nome = this.entrada.receberTextoObrigatorio(`Digite o nome do serviço: `, `Nome inválido, por favor insira um nome válido.`)
        let valor = this.entrada.receberNumeroObrigatorio(`Digite o valor do serviço: R$`, `Valor inválido, por favor insira um valor válido.`)
        let servico = new Servico(nome)
        servico.valor = valor
        this.servicos.push(servico)
    }
}