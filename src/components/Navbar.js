import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid container">
                    <a className="navbar-brand" href="#" style={{fontFamily: 'Baskerville'}}>M.Abdullah</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
							<li className="nav-item">
							    <Link to="/" className='nav-link'>Home</Link>
							</li>
							<li className="nav-item">
								<Link to="/about" className='nav-link'>About</Link>
							</li>
                            <li className="nav-item">
								<Link to="/skills" className='nav-link'>Skills</Link>
							</li>
							<li className="nav-item">
								<Link to="/projects" className='nav-link'>Projects</Link>
							</li>
							<li className="nav-item">
								<Link to="/contact" className='nav-link'>Contact</Link>
							</li>
						</ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
