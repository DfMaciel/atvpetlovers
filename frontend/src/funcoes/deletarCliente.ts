const ExclusaoCliente = async (cli_id : number) => {
    try {
        console.log(cli_id, 'puta que pariu caralho')
        const resultado = await fetch ('http://localhost:32831/cliente/excluir', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: cli_id})
        })
        if (resultado.ok) {
            console.log('Exclusão realizada com sucesso')
            return {success: true, message: 'Exclusão realizada com sucesso'}
        }
        console.log('Erro ao realizar a exclusão')
        return {success: false, message: 'Erro ao realizar a exclusão'}
    }catch (error) {
            console.error('Erro ao excluir o cliente', error)
            throw new Error('Erro ao excluir o cliente')
        }

}

export default ExclusaoCliente