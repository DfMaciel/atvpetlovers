import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }

    public listar(): void {
        console.log(`\nLista de todos os serviços: `)
        if (this.servicos.length === 0) {
            console.log('Não há serviços cadastrados')
        }
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.nome)
            console.log(`Valor: R$` + servico.nome)
            console.log(`--------------------------------------`)
        })
    }
}