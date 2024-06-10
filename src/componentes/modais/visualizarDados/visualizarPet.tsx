import { Component } from "react";
import Form from 'react-bootstrap/Form';
import { FloatingLabel, InputGroup } from "react-bootstrap";
import { ViewPet } from "../../interface/iPet";

type props = {
    tema: string
    pet: ViewPet
}

type state = {
    pet: ViewPet
}

export default class VisualizarPets extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            pet: this.props.pet
        }
    }
    
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            ...prevState,
            pet: {
                ...prevState.pet,
                [name]: value
            }
        }));
    }

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <FloatingLabel controlId="floatingInput" label="Nome" className="mb-3">
                            <Form.Control type="text" name="nome" className="form-control" placeholder="Nome" value={this.state.pet.nome} onChange={this.handleInputChange} aria-label="Nome" aria-describedby="basic-addon1"/>
                        </FloatingLabel>
                    </div>
                    <div className="input-group mb-3">
                        <FloatingLabel controlId="floatingInput" label="Tipo" className="mb-3">
                            <Form.Control type="text" name="tipo" value={this.state.pet.tipo} onChange={this.handleInputChange} className="form-control" placeholder="Nome social" aria-label="Tipo" aria-describedby="basic-addon1" />
                        </FloatingLabel>
                    </div>
                    <div className="input-group mb-3">
                        <FloatingLabel controlId="floatingInput" label="Raça" className="mb-3">
                            <Form.Control type="text" name="raca" value={this.state.pet.raca} onChange={this.handleInputChange} className="form-control" placeholder="E-mail" aria-label="Raca" aria-describedby="basic-addon1" />
                        </FloatingLabel>

                    </div>
                    <div className="input-group mb-3">
                        <FloatingLabel controlId="floatingInput" label="Dono" className="mb-3">
                            <Form.Control name="dono" value={this.state.pet.dono?.nome} className="form-control" placeholder="Dono" aria-label="Dono" aria-describedby="basic-addon1" disabled/>
                        </FloatingLabel>
                    </div>
                    <div className="input-group mb-3">
                        <FloatingLabel controlId="floatingInput" label="Gênero" className="mb-3">
                            <Form.Select name="genero" value={this.state.pet.genero} onChange={this.handleInputChange} className="form-control" placeholder="Genero" aria-label="Data de emissão cpf" aria-describedby="basic-addon1">
                                <option value="macho">Macho</option>
                                <option value="femea">Fêmea</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Editar</button>
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Excluir</button>
                    </div>
                </form>
            </div>
        )
    }
}