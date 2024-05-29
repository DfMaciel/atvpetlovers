import Formatacoes from "../negocio/formatacoes"

export default class CPF {
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
        let formatacoes = new Formatacoes()
        return formatacoes.DataString(this.dataEmissao)
    }
}