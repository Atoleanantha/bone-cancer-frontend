// import React, { useState } from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom'
// import { NavItem } from 'react-bootstrap';

// import { useNavigate } from "react-router-dom";

// const NavBar = () => {
//     const navigate = useNavigate();
//     const handlelogout=()=>{
//         localStorage.removeItem('isLogin')
//          navigate("/");
//          window.location.reload();

//     }

//     return (
//         <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="nav" expanded={expanded} onToggle={handleToggle} style={{ backgroundColor: "#e1e8f2", borderBottom: "0.5px solid", borderColor: "#222e42" }}>
//             <Container>
//                 {/* Logo on the left */}
//                 <Navbar.Brand>
//                     <Link to='/' onClick={handleClose}>
//                         {/* <img style={{ height: '3em' }} src={Logo} alt='Logo' /> */}
//                     </Link>
//                 </Navbar.Brand>

//                 {/* Toggle for small screens */}
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />

//                 {/* Navigation Links */}
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ms-auto">
//                         <Nav.Link className='nav-item'>
//                             <Link to='/' style={{ color: 'white', textDecoration: 'none' }} onClick={handleClose}>Home</Link>
//                         </Nav.Link>

//                         <Nav.Link className='nav-item'>
//                             <Link to='/about' style={{ color: 'white', textDecoration: 'none' }} onClick={handleClose}>About</Link>
//                         </Nav.Link>


//                         <Button className='nav-item' onClick={handlelogout} variant="outline-light">Logout</Button>


//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// };
// export default NavBar

// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../App.css'
const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/");
  };

  return (
    <nav
      className="w-full bg-gray-900 text-white px-6 py-3 flex items-center justify-between shadow-md"
    >
      {/* Logo */}
      <div className="text-xl font-bold">🧬 BoneDetect</div>

      {/* Navigation links */}
      <div className="flex space-x-4 items-center">
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-400 transition">
          About
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-1 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

