import '../App.css';
import {Container, Navbar, Nav, Form} from 'react-bootstrap'
import shark from '../images/shark.svg'
import fox from '../images/fox.svg'

function Navigation() {
    return (
    
    <Navbar className="transparent navigation" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">
                <img src={shark} alt="logo" />
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
            </Nav>
            
            <Form className="d-flex">
                <img src={fox} alt="logo" />
            </Form>
        </Navbar.Collapse>
    </Container>
</Navbar>

);
}

export default Navigation;



