import { ViewCliente } from './iCliente';

export interface ViewPet {
    nome: string,
    tipo: string,
    raca: string,
    genero: string,
    dono?: ViewCliente
}