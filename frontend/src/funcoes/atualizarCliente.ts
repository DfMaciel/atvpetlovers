import { createCliente } from '../interface/iCliente';

export default async function AtualizarCliente(cliente : createCliente) {
    try {
        const response = await fetch(`http://localhost:32831/cliente/atualizar`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });
    console.log(response)
    if (response.ok){
        console.error(`Cliente atualizado!`);
        return { success: true, message: `Cliente atualizado com sucesso.`}
    }
    return { success: false, message: `Não foi possivel atualizar o cliente.`};
    } catch (error) {
        throw new Error('Erro ao atualizar cliente. Por favor, tente novamente mais tarde.');
    }
}