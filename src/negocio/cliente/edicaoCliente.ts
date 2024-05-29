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
                        break;
                    case 4:
                        console.log('Lista de Telefones: ')
                        cliente.getTelefones()
                        let escolhaTelefoneDdd = this.entrada.receberTexto('Por favor informe o DDD do telefone que deseja editar: ')
                        let escolhaTelefoneNum = this.entrada.receberTexto('Por favor informe o número do telefone que deseja editar: ')
                        let telefone = cliente.getTelefonesRetorno().find(telefone => telefone.getNumero === escolhaTelefoneNum && telefone.getDdd === escolhaTelefoneDdd);
                        if (!telefone) {
                            console.log('Telefone não encontrado')
                            break;
                        }
                        else {
                            let novoValorDDD = this.entrada.receberTexto('Por favor informe o novo DDD: ')
                            if (novoValorDDD === '') {
                                novoValorDDD = telefone.getDdd
                            }
                            let novoNumTelefone = this.entrada.receberTexto('Por favor informe a nova data de emissão do RG, no padrão dd/mm/yyyy: ')
                            if (novoNumTelefone === '') {
                                novoNumTelefone = telefone.getNumero
                            }
                            let novoTelefone = new Telefone(novoValorDDD, novoNumTelefone)
                            let resultadoEdicao = cliente.updateTelefone(novoValorDDD, novoNumTelefone, novoTelefone)
                            if (resultadoEdicao) {
                                console.log('Número editado com sucesso!')
                                break;
                            }
                            else {
                                console.log('Erro ao editar Telefone')
                                break;
                            }
                        }
                        break;
                    case 5:
                        console.log('Lista de pets: ')
                        cliente.getPets.forEach(pet => {
                            console.log('Nome: ', pet.getNome)
                        })
                        let edicaoPets = new EdicaoPets(cliente.getPets)
                        edicaoPets.editar()
                        break;
                    case 6: 
                        editar = false
                        break;
                }
                editar = false
                break
            } else {
                console.log('Cliente não encontrado')
                editar = false
                break
            } 
        }
    
    }
}