import { Nav, Container, Navbar } from 'react-bootstrap'

function Navb() {
    return <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Xonon Cloud</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
    </>
}


export default Navb