// navbar component

import React from "react";

export default function NavBar() {
    return (
        <div style={{ backgroundColor: "#d8d9da" }}>
            <div className="container">
                <header className="d-flex justify-content-center py-3">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a
                                href="/"
                                className={"nav-link fw-bold "+(fromBackend == 10 ? 'active' : 'bg-opacity-25 bg-success text-black')}
                                aria-current="page"
                            >
                                List of Course
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/course/add" 
                            className={"nav-link fw-bold "+(fromBackend == 20 ? 'active' : 'bg-opacity-25 bg-success text-black')}
                            >
                                Add New Course
                            </a>
                        </li>
                    </ul>
                </header>
            </div>
        </div>
    );
}
