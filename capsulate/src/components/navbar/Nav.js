import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './nav.css'
import { useState } from 'react';
import Axios from "axios";
// import tab from './../body/Tab'

function NavScrollExample() {   
    const [MedicineName, setmedicine] = useState(" ");
    const [chosenmedicine, setchosenmedicine] = useState(false);
    const [meds,setmeds] = useState({
        generic_name:" ",
        labeler_name:" ",
        brand_name:" ",
        name:" ",
        strength:" ",
        dosage_form:" ",
        product_type:" ",
        marketing_start_date:" ",
        pharm_class:" ",
    });
    const options = {
        method: 'GET',
        url: 'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo',
        params: {drug: `$(MedicineName)`},
        headers: {
          'X-RapidAPI-Key': '1f60c49cccmshfe3d037a683424bp1429c2jsn4da398ca9df7',
          'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
        }
      };
    function search(){
        Axios.request(options).then(function (response) {
            setmeds({
                medicine_name:MedicineName,
                generic_name:Response.generic_name,
                labeler_name:Response.labeler_name,
                brand_name:Response.brand_name,
                name:Response.active_ingredients[0].name,
                strength:Response.active_ingredients[1].strength,
                dosage_form:Response.dosage_form,
                product_type:Response.product_type,
                marketing_start_date:Response.marketing_start_date,
                pharm_class:Response.pharm_class[0],
                pharm_class:Response.pharm_class[1],
                pharm_class:Response.pharm_class[2],
                pharm_class:Response.pharm_class[3],
            });
          }).catch(function (error) {
            setchosenmedicine(true);
            console.error(error);
          });
      }
      

  return (
    <div class="navbar">
        <Navbar bg="light" expand="bl" className='nav_container'>
      <Container fluid>
        <Navbar.Brand href="#">CAPSULATE💊🩺 </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              onChange={(event)=>{
              setmeds(event.target.value)}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={search} >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
export default NavScrollExample;
