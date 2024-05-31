export default class Servico {
    public nome!: string
    public valor!: number

    constructor(nome: string) {
        this.nome = nome
    }

    public get getNome(): string {
        return this.nome
    }
    public get getValor(): number {
        return this.valor
    }
}