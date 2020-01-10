import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    {/* <a className="navbar-brand" href="/">NoteApp</a> */}
                    <Link className="navbar-brand" to='/'>
                        NoteApp
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                                <Link className="nav-link" to="/">Notes</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Features</a> */}
                                <Link className="nav-link" to="/create">Create Note</Link>

                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Pricing</a> */}
                                <Link className="nav-link" to="/user">Create User</Link>

                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}
