import { Button } from 'bootstrap';
import React from 'react'
import {Navbar, Container,Nav} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'
import TopHeader from '../component/home/TopHeader';
import './Heading.scss';
import imgHome from '../image/icons8-home-20.png'
function Heading() {
  const navigate=useNavigate();
  const isAuth=window.sessionStorage.getItem('tokenValue');
  const Logout = () =>{
        window.sessionStorage.clear();
    navigate('/')
  }
  return (
    <>
    <TopHeader />
      <Navbar className='mynav' expand="lg" style={{height: '50px'}}>
  <Container fluid>
  <Navbar.Brand className='logo'></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-1 my-lg-0 smallnav"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to='/' className='tabcolor mx-2'><img src={imgHome} alt="home" /></Nav.Link>
        <Nav.Link as={Link} to='/search' className='tabcolor'>Books</Nav.Link>
        {
          isAuth?
          <button  className='btn-1' onClick={Logout}>Log out</button>:
          <>
        <Nav.Link as={Link} to='/reg' className='tabcolor'>Registration</Nav.Link>
        <Nav.Link as={Link} to='/login' className='tabcolor'>Login</Nav.Link>
        </>
        }
        
      </Nav>
     
    </Navbar.Collapse>
  </Container >
</Navbar>
    </>
  )
}

export default Heading