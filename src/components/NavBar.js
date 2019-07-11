import React from 'react';
import logo from '../assets/images/logo.png';

const NavBar = () => (
    <div>
        <nav className="navbar navbar-expand-md"><a href="/" className="navbar-brand"><img src={logo} className="brandImage" />
        </a><button type="button" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button><div className="collapse navbar-collapse"><ul className="ml-auto navbar-nav"><li className="nav-item"><a className="nav-link">About</a></li><li className="nav-item"><a className="nav-link">How it Works</a></li><li className="nav-item"><a className="nav-link" href="/faqs">FAQ</a></li><li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li><li className="nav-item"><a className="nav-link">Our Plans</a></li><div className="mr-auto auth"><li className="nav-item"><a className="nav-link" href="/login">Signin</a></li><li className="nav-item"><button type="button" className="btn btn-secondary">Create Account</button> </li></div></ul></div></nav></div>
);

export default NavBar;