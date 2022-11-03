import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './nav.css'
import { useState } from 'react';
import Tabswitch from '../body/Tab';


function NavScrollExample() { 
  const [medicineName,setmedicineName] = useState('')
  const [arry,setarry] = useState([])
  const search=()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key':`${process.env.REACT_APP_VERY_PRIVATE_KEY}`,
        'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
      }
    };
    
    fetch(`https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=+${medicineName}`, options)
      .then(response => {
        return response.json();
      })
      .then((data)=>{
        setarry(data) //all the data fetched from the api is stored in the data array then we will be maping the data
        // genName=data[0].generic_name;
        // console.log(genName)
      })
      .catch(err => console.error(err));
      
  }
    const onchangehandler=(e)=>{
    setmedicineName(e.target.value)
    }
    const onsubmitHandler =(e)=>{
    e.preventdefault()
    }

  return (
    <div class="navbar">
        <Navbar sticky='top' bg="light" expand="bl" className='nav_container'>
      <Container fluid>
        <Navbar.Brand href="#">CAPSULATE<span> 💊</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={onsubmitHandler}>
            <Form.Control
              value={medicineName}
              onChange={onchangehandler}
              type="input-box"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={search}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div class="tab_container_2">
    <Tabswitch array={arry}/>
    </div>
    
    </div>    
  );
}
export default NavScrollExample;
