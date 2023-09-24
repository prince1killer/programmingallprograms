import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Sum</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/mark">Marksheet</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="text">Dynamic</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="min">MinMax</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="shop">Shoping</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="online">Online</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="drop">Drop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="check">check</a>                   
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/list">list</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Textbox">Textbox</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/file">File</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/sum">Sum</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="cal">Calculate</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/timer">Timer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="encryp">Encrypte</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="cookie">cookie</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar