import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const HeaderPartial = () => {
    
    window.quantidadeItens = localStorage.length

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid style={{ borderBottom: '1px solid grey' }}>
                <Navbar.Brand href="#">My Things</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="minhas-compras">Minhas Compras</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
} 