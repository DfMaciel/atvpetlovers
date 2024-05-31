import Servico from "../../modelo/servico";
import Exclusao from "../exclusao";
import Entrada from "../../io/entrada";
import ListagemServicos from "./listagemServico";

export default class ExclusaoServico extends Exclusao {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor (servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public excluir(): void {
        console.log('\nIniciando exclusão de serviços')
        let listaServicos = new ListagemServicos(this.servicos)
        listaServicos.listar()
        let escolhaServico = this.entrada.receberTexto('Por favor informe o nome do serviço que deseja excluir: ')
        let servico = this.servicos.find(servico => servico.getNome === escolhaServico)
        if (servico) {
            console.log('Serviço encontrado: ', servico.getNome)
            let confirmacao = this.entrada.receberTextoObrigatorio(`Você deseja excluir o serviço ${servico.getNome} (S/N)? `, 'Confirmação inválida, por favor insira uma resposta correta.')
                if (confirmacao.toUpperCase() === 'S') {
                    let indice = this.servicos.indexOf(servico)
                    this.servicos.splice(indice, 1)
                    console.log('Serviço excluído com sucesso')
                }
                else {
                    console.log('Exclusão cancelada.')
                    return
                }
            }
            else {
                console.log('Serviço não encontrado')
            }
        }

    }