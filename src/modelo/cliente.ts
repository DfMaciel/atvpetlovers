import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public getRgs(): void {
        this.rgs.forEach(rg => {
            console.log('Lista de RGs:');
            console.log(`${rg.getValor} - Data de emissão: ${rg.getDataEmissao}`)
    })
    }
    public addRgs(RG: RG): void{
        this.rgs.push(RG)
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public getTelefones(): void {
        this.telefones.forEach(Telefone => {
            console.log('Lista de telefones:')
            console.log(`${Telefone.getDdd}` + `${Telefone.getNumero}`)
    })
    }
    public addTelefones(telefone: Telefone): void{
        this.telefones.push(telefone)
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }
}