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
        if (this.rgs.length === 0) {
            console.log('O cliente não possui RGs cadastrados')
        }
        this.rgs.forEach(rg => {
            console.log('Lista de RGs:');
            console.log(`${rg.getValor} - Data de emissão: ${rg.getDataEmissao}`)
    })
    }
    public getRgsRetorno(): Array<RG> {
        return this.rgs
    }
    public addRgs(RG: RG): void{
        this.rgs.push(RG)
    }
    public updateRg(valor: string, novoRg: RG): boolean {
        let indice = this.rgs.findIndex(rg => rg.getValor === valor)
        if (indice !== -1) {
            this.rgs[indice] = novoRg;
            return true
        } else {
            console.log('RG não encontrado. Por favor insira um valor correto.')
            return false
        }
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public getTelefones(): void {
        if (this.telefones.length === 0) {
            console.log('O cliente não possui telefones cadastrados')
        }
        this.telefones.forEach(Telefone => {
            console.log('Lista de telefones:')
            console.log(`${Telefone.getDdd}` + `${Telefone.getNumero}`)
    })
    }
    public getTelefonesRetorno(): Array<Telefone> {
        return this.telefones
    }
    public addTelefones(telefone: Telefone): void{
        this.telefones.push(telefone)
    }
    public updateTelefone(ddd: string, numero: string, novoTelefone: Telefone): boolean {
        let indice = this.telefones.findIndex(telefone => telefone.getNumero === numero && telefone.getDdd === ddd)
        if (indice !== -1) {
            this.telefones[indice] = novoTelefone;
            return true
        } else {
            console.log('Telefone não encontrado. Por favor insira um número correto.')
            return false
        }
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
    public addPet(pet: Pet) {
        this.pets.push(pet)
        pet.setDono(this)
    }
}