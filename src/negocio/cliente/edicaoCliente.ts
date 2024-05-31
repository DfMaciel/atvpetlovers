import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Edicao from "../edicao";
import EdicaoPets from "../pet/edicaoPet";

export default class EdicaoClientes extends Edicao {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.entrada = new Entrada()
        this.clientes = clientes
    }

    private dividirData(data: string): Date {
        let partesData = data.split('/')
        let ano = parseInt(partesData[2])
        let mes = parseInt(partesData[1])
        let dia = parseInt(partesData[0])
        
        return new Date(ano, mes-1, dia)
    }

    public editar(): void {
        console.log('\nInício da edição de cliente')
        let editar = true

        while (editar) {
            let cliCpf = this.entrada.receberTexto('Por favor informe o CPF do cliente que deseja editar: ')
            let cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cliCpf)
            if (cliente) {
                let clienteEscolhido = true
                while (clienteEscolhido) {
                    console.log('Cliente encontrado: ', cliente.nome)
                    console.log('O que você deseja editar?')
                    console.log('1 - Nome')
                    console.log('2 - Nome social')
                    console.log('3 - RG')
                    console.log('4 - Telefone')
                    console.log('5 - Pets')
                    console.log('0 - Voltar')
                    let escolhaEditar = this.entrada.receberNumero('Por favor, escolha uma opção de edição: ')
                    switch (escolhaEditar) {
                        case 1:
                            let novoNome = this.entrada.receberTexto('Por favor informe o novo nome do cliente: ')
                            if (novoNome === '') {
                                novoNome = cliente.nome
                            }
                            cliente.nome = novoNome
                            break
                        case 2:
                            let novoNomeSocial = this.entrada.receberTexto('Por favor informe o novo nome social do cliente: ')
                            if (novoNomeSocial === '') {
                                novoNomeSocial = cliente.nome
                            }
                            cliente.nomeSocial = novoNomeSocial
                            break
                        case 3:
                            console.log('Você deseja adicionar ou editar um RG?')
                            console.log('1 - Adicionar RG')
                            console.log('2 - Editar RG')
                            console.log('3 - Excluir RG')
                            console.log('0 - Voltar')
                            let opcaoRG = this.entrada.receberNumeroObrigatorio('Por favor, escolha uma opção: ', 'Opção inválida, por favor insira uma opção válida.')
                            switch (opcaoRG) {
                                case 1:
                                    let valorRg = this.entrada.receberTexto('Por favor informe o valor do RG: ')
                                    if (valorRg === '') {
                                        console.log('Valor inválido')
                                    }
                                    else {
                                        let dataRg = this.entrada.receberTextoObrigatorio('Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: ', 'Data inválida, insira uma data válida')
                                        let dataRgData = this.dividirData(dataRg)
                                        let rgNovo = new RG(valorRg, dataRgData)
                                        cliente.addRgs(rgNovo)
                                        console.log('RG adicionado com sucesso.')
                                    }
                                    break;
                                case 2:
                                    console.log('Lista de RGs: ')
                                    cliente.getRgs()
                                    let escolhaRg = this.entrada.receberTexto('Por favor informe o RG que deseja editar: ')
                                    let rg = cliente.getRgsRetorno().find(rg => rg.getValor === escolhaRg)
                                    if (!rg) {
                                        console.log('RG não encontrado')
                                    }
                                    else {
                                        let novoValorRg = this.entrada.receberTexto('Por favor informe o novo valor do RG: ')
                                        if (novoValorRg === '') {
                                            novoValorRg = rg.getValor
                                        }
                                        let novaDataRg = this.entrada.receberTexto('Por favor informe a nova data de emissão do RG, no padrão dd/mm/yyyy: ')
                                        if (novaDataRg === '') {
                                            novaDataRg = rg.getDataEmissao
                                        }
                                        let novaDataRgData = this.dividirData(novaDataRg)
                                        let novoRg = new RG(novoValorRg, novaDataRgData)
                                        let resultadoEdicao = cliente.updateRg(escolhaRg, novoRg)
                                        if (resultadoEdicao) {
                                            console.log('RG editado com sucesso!')
                                            break;
                                        }
                                        else {
                                            console.log('Erro ao editar RG')
                                            break;
                                        }
                                    }
                                case 3: 
                                    console.log('Lista de RGs:')
                                    cliente.getTelefones()
                                    let escolhaRgExcluir = this.entrada.receberTexto('Por favor informe o RG que deseja excluir: ')
                                    let rgExcluido  = cliente.excluirRg(escolhaRgExcluir)
                                    if (rgExcluido) {
                                        console.log('Telefone excluído com sucesso!')
                                        break
                                    }
                                case 0:
                                    break;
                                default:
                                    console.log('Opção inválida')
                            }
                        case 4:
                            console.log('Você deseja editar ou adicionar um telefone?')
                            console.log('1 - Adicionar telefone')
                            console.log('2 - Editar telefone')
                            console.log('3 - Excluir telefone')
                            console.log('0 - Voltar')
                            let opcaoTelefone = this.entrada.receberNumeroObrigatorio('Por favor, escolha uma opção: ', 'Opção inválida, por favor insira uma opção válida.')
                            switch(opcaoTelefone) {
                                case 1:
                                    let ddd = this.entrada.receberTexto('Por favor insira o DDD do telefone: ')
                                    let numero = this.entrada.receberTexto('Por favor insira o número do telefone: ')
                                    let telefoneNovo = new Telefone(ddd, numero)
                                    cliente.addTelefones(telefoneNovo)
                                    console.log('Telefone adicionado com sucesso!')
                                    break
                                case 2:
                                    console.log('Lista de Telefones: ')
                                    cliente.getTelefones()
                                    let escolhaTelefoneDdd = this.entrada.receberTexto('Por favor informe o DDD do telefone que deseja editar: ')
                                    let escolhaTelefoneNum = this.entrada.receberTexto('Por favor informe o número do telefone que deseja editar: ')
                                    let telefone  = cliente.updateTelefone(escolhaTelefoneDdd, escolhaTelefoneNum)
                                    if (telefone) {
                                        console.log('Telefone editado com sucesso!')
                                        break
                                    }
                                case 3:
                                    console.log('Lista de Telefones: ')
                                    cliente.getTelefones()
                                    let escolhaTelefoneDddExcluir = this.entrada.receberTexto('Por favor informe o DDD do telefone que deseja excluir: ')
                                    let escolhaTelefoneNumExcluir = this.entrada.receberTexto('Por favor informe o número do telefone que deseja excluir: ')
                                    let telefoneExcluido  = cliente.excluirTelefone(escolhaTelefoneDddExcluir, escolhaTelefoneNumExcluir)
                                    if (telefoneExcluido) {
                                        console.log('Telefone excluído com sucesso!')
                                        break
                                    }
                                case 0:
                                    break
                                default:
                                    console.log('Opção inválida.')
                                }
                        case 5:
                            console.log('Lista de pets: \n')
                            cliente.getPets.forEach(pet => {
                                console.log('Nome: ', pet.getNome)
                            })
                            let edicaoPets = new EdicaoPets(cliente.getPets)
                            edicaoPets.editar()
                            break;
                        case 0: 
                            clienteEscolhido = false
                            break;
                        default:
                            console.log('Opção inválida.')
                    }
                    editar = false
                }
            } else {
                console.log('Cliente não encontrado')
                editar = false
                break
            } 
        }
    
    }
}