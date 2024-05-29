import Formatacoes from "../negocio/formatacoes"

export default class RG {
    private valor: string
    private dataEmissao: Date
    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor
        this.dataEmissao = dataEmissao
    }
    public get getValor(): string {
        return this.valor
    }
    public get getDataEmissao(): string {
        let formatacao = new Formatacoes()
        return formatacao.DataString(this.dataEmissao)
    }   
}