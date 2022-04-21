import { Nav, Navbar, Image } from 'react-bootstrap'
import { auth } from '../config/firebase/firebase'


function Navb() {
  return auth.currentUser ? <Nav2 /> : <Nav1 />        
}

function Nav1() {
  return <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">      
      <Image src='/cloud.svg' height={50} width={50} />
      Xonon Cloud
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/auth/signup">SignUp</Nav.Link>
      <Nav.Link href="/auth/login">Login</Nav.Link>
    </Nav>
  </Navbar>
  </>
}


function Nav2() {return <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">      
        <Image src='/cloud.svg' height={50} width={50} />
        Xonon Cloud
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/app/features">Features</Nav.Link>
        <Nav.Link href="/app/pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
    </>
}

export default Navb