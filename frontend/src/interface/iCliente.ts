export interface viewCliente {
    id: number;
    nome: string;
    nomeSocial: string;
    email: string;
    endereco: {
        id: number,
        estado: string,
        cidade: string,
        bairro: string,
        rua: string,
        numero: string,
        codigoPostal: string
        informacoesAdicionais: string
    };
    telefones: [
        {
            id: number,
            numero: string
            ddd: string,
        }
    ]
}