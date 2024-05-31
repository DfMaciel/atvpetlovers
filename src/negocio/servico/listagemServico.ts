import Servico from "../../modelo/servico";
import Listagem from "../listagem";
import Entrada from "../../io/entrada";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public listar(): void {
        console.log(`\nLista de todos os serviços: `)
        if (this.servicos.length === 0) {
            console.log('Não há serviços cadastrados')
        }
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.nome)
            console.log(`Valor: R$ ` + servico.valor)
            console.log(`--------------------------------------`)
        })
        let entrada = this.entrada.receberTexto(`Aperte enter para continuar`);
    }
}