export interface ViewCliente {
    nome: string,
    nomeSocial: string,
    email: string,
    cpf: {
        numero: string,
        dataEmissao: string
    }
    rg: {
        numero: string,
        dataEmissao: string
    }[],
    telefone: string,
    pets: {
        nome: string,
        tipo: string,
        raca: string,
        genero: string,
    }[],
    produtos: {
        nome: string,
        preco: number,
    }[],
    servicos: {
        nome: string,
        preco: number,
    }[],
    id: number
}