export default class Produto {
    public nome!: string
    public preco!: number
    constructor(nome:string) {
        this.nome = nome
    }
    
    public get getNome(){return this.nome}
    public get getPreco(){return this.preco}
}