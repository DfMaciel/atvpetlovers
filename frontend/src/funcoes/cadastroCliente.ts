import { createCliente } from "../interface/iCliente";

const CadastrarCliente = async (cliente: createCliente) => {
    try {
        const resposta = await fetch ('http://localhost:32831/cliente/cadastrar', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        })

        if (resposta.ok) {
            return {success: true, message: 'Cadastro realizado com sucesso'}
        }
        else {
            return {success: false, message: 'Erro ao realizar cadastro'}
        }
    }
    catch (error) {
        throw new Error('Erro ao realizar o cadastro')
    }
}

export default CadastrarCliente