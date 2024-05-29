import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Servico from "../../modelo/servico"
import ListagemServicos from "./listagemServico"

export default class EdicaoServico {
    private servicos: Array<Servico>
    private entrada: Entrada
    
    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    
    public editar(): void {
        console.log(`\nInicio da edição de serviços`)
        let editar = true

        while(editar) {
            let listagemServico = new ListagemServicos(this.servicos)
            listagemServico.listar()
            let nomeServicoSelecionado = this.entrada.receberTexto('Digite o nome do serviço para edição: ')
            let servico = this.servicos.find(servico => servico.nome === nomeServicoSelecionado)
            if (servico) {
                console.log('Serviço encontrado: ', servico.nome)
                console.log('O que você deseja alterar?')
                console.log('1 - Nome')
                console.log('2 - Valor')
                console.log('0 - Sair')
                
                let escolhaEditar = this.entrada.receberNumero('Por favor escolha uma operação: ')
                switch (escolhaEditar) {
                    case 1:
                        let novoNomeServico = this.entrada.receberTexto('Digite o novo nome do serviço: ')
                        if (novoNomeServico === '') {
                            novoNomeServico = servico.nome
                        }
                        servico.nome = novoNomeServico
                        
                        break;
                    case 2:
                        let novoValorServico = this.entrada.receberNumero('Digite o novo valor do serviço: R$')
                        if (novoValorServico === 0) {
                            novoValorServico = servico.valor
                        }
                        servico.valor = novoValorServico
                        break;
                    case 0:
                        break;
                    default: 
                        console.log('Opção inválida')
                    }   
                    editar = false
                    break;
            }
        }
    }

}