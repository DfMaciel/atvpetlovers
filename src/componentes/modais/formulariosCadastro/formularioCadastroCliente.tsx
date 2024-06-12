import InputMask from 'react-input-mask';

type props = {
    tema: string
}

export default function FormularioCadastroCliente (props: props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <InputMask mask="999.999.999-99" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Data de Emissão do CPF" onFocus={(event) => event.target.type = 'date'} 
                    onBlur={(event) => event.target.type = 'text'} aria-label="Data de emissão cpf" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <InputMask mask="99.999.999-9." className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Data de Emissão do RG" onFocus={(event) => event.target.type = 'date'} 
                    onBlur={(event) => event.target.type = 'text'} aria-label="Data de emissão RG" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <InputMask mask="(99) 99999-9999." className="form-control" placeholder="Número de telefone" aria-label="Número de telefone" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}