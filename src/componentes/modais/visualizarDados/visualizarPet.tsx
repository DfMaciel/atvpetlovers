import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { FloatingLabel, InputGroup } from "react-bootstrap";
import { ViewPet } from "../../interface/iPet";

type props = {
    tema: string
    pet: ViewPet
}

export default function VisualizarPets (props: props) {
    const [pet, setPet] = useState<ViewPet>(props.pet)
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setPet(prevState => ({
            ...prevState,
                [name]: value
        }));
    }

    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <FloatingLabel controlId="floatingInput" label="Nome" className="mb-3">
                        <Form.Control type="text" name="nome" className="form-control" placeholder="Nome" value={pet.nome} onChange={handleInputChange} aria-label="Nome" aria-describedby="basic-addon1"/>
                    </FloatingLabel>
                </div>
                <div className="input-group mb-3">
                    <FloatingLabel controlId="floatingInput" label="Tipo" className="mb-3">
                        <Form.Control type="text" name="tipo" value={pet.tipo} onChange={handleInputChange} className="form-control" placeholder="Nome social" aria-label="Tipo" aria-describedby="basic-addon1" />
                    </FloatingLabel>
                </div>
                <div className="input-group mb-3">
                    <FloatingLabel controlId="floatingInput" label="Raça" className="mb-3">
                        <Form.Control type="text" name="raca" value={pet.raca} onChange={handleInputChange} className="form-control" placeholder="E-mail" aria-label="Raca" aria-describedby="basic-addon1" />
                    </FloatingLabel>

                </div>
                <div className="input-group mb-3">
                    <FloatingLabel controlId="floatingInput" label="Dono" className="mb-3">
                        <Form.Control name="dono" value={pet.dono?.nome} className="form-control" placeholder="Dono" aria-label="Dono" aria-describedby="basic-addon1" disabled/>
                    </FloatingLabel>
                </div>
                <div className="input-group mb-3">
                    <FloatingLabel controlId="floatingInput" label="Gênero" className="mb-3">
                        <Form.Select name="genero" value={pet.genero} onChange={handleInputChange} className="form-control" placeholder="Genero" aria-label="Data de emissão cpf" aria-describedby="basic-addon1">
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