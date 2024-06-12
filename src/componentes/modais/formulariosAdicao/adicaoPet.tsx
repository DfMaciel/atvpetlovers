import InputMask from 'react-input-mask';
import { ViewCliente } from "../../interface/iCliente";

type props = {
    tema: string
    cliente: ViewCliente
}

export default function FormularioAdicaoPet (props: props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <select className="form-control" aria-label="Genero" aria-describedby="basic-addon1">
                        <option value="" selected disabled>Selecione o gênero do pet</option>
                        <option value="macho">Macho</option>
                        <option value="femea">Fêmea</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <InputMask mask="999.999.999-99" className="form-control" value={props.cliente.cpf.numero} placeholder="CPF do Cliente" aria-label="CPF do cliente" aria-describedby="basic-addon1" disabled/>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Adicionar</button>
                </div>
            </form>
        </div>
    )
}