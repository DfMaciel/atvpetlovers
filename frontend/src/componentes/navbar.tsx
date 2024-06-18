/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" data-bs-theme="light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">PetLovers</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li>
                                <Link to="/clientes" className="nav-link">Lista de clientes</Link>
                                <Link to="/cadastro" className="nav-link">Cadastrar um cliente</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;