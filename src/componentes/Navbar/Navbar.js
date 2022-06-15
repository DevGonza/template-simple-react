import React from 'react'
import Simpsons from '../../assets/img/header-simpsons.gif'


export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <img src={Simpsons} className="w-40" alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="index.html" className="nav-link active" aria-current="page">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a href="index.html" className="nav-link" >Blog</a>
                            </li>
                            <li className="nav-item">
                                <a href="index.html" className="nav-link active" aria-current="page">Contacto</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success text-danger" type="submit">Busqueda</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;