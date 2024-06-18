/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import styles from "../styles/navbar.module.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-danger navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/clientes" className={`${styles.navItem} nav-link`}>Lista de clientes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cadastro" className={`${styles.navItem} nav-link`}>Cadastrar um cliente</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;