import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TiThMenu, TiPlus } from "react-icons/ti";
import { FaExclamation } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { PiPrinterBold } from "react-icons/pi";

const Navbar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleNavbar = () => setIsCollapsed(!isCollapsed);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleAddCardClick = () => {
        navigate('/add-admin');
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarNav" aria-expanded={!isCollapsed} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed ? 'collapse' : 'show'}`} id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}>
                            <button className="btn btn-link nav-link dropdown-toggle" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded={dropdownOpen} onClick={toggleDropdown}>
                                <TiThMenu /> Opções
                            </button>
                            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/action1">Ação 1</Link>
                                <Link className="dropdown-item" to="/action2">Ação 2</Link>
                            </div>
                        </li>
                    </ul>
                    <div className="ml-auto d-flex align-items-center">
                        <button className="btn btn-light mr-2" onClick={handleAddCardClick}>
                            <TiPlus /> Incluir
                        </button>
                        <button className="btn btn-light mr-2">
                            <FaExclamation /> Alterar
                        </button>
                        <button className="btn btn-light mr-2">
                            <CgClose /> Excluir
                        </button>
                        <button className="btn btn-light">
                            <PiPrinterBold /> Imprimir
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;