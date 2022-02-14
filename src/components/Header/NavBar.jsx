import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from '../../images/Logo.svg'
import Button from '../../shared/Button'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand href="#">
                    <img src={Logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                    >
                        <Nav.Link href="#action1">All Assets</Nav.Link>
                        <Nav.Link href="#action2">Stocks</Nav.Link>
                        <Nav.Link href="#action2">Crypto</Nav.Link>
                        <Nav.Link href="#action2">Trade</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className='align-items-center'>
                    <Nav.Link href="#" className='d-none d-lg-block'>Sign up</Nav.Link>
                    <Button variant="primary" className="d-none d-md-block">Get the app</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar