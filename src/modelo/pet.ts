import Cliente from "./cliente"

export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string
    private dono: Cliente | null

    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.dono = null
    }

    public get getNome(){return this.nome}
    public setNome(novoNome:string) {
        this.nome = novoNome
    }
    public get getRaca(){return this.raca}
    public setRaca(novaRaca:string) {
        this.raca = novaRaca
    }
    public get getGenero(){return this.genero}
    public setGenero(novoGenero:string) {
        this.genero = novoGenero
    }
    public get getTipo(){return this.tipo}
    public setTipo(novoTipo:string) {
        this.tipo = novoTipo
    }
    public get getDono(){return this.dono?.nome || 'Sem dono'}
    public setDono(novoDono: Cliente | null): void {
        this.dono = novoDono
    }
}