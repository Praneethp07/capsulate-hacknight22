import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from 'react';
// import NavScrollExample from './../navbar/Nav'
import './tab.css'


function Tabswitch(props) {

  return (
    <Tabs defaultActiveKey="medicine"id="uncontrolled-tab-example" className="mt-5 mb-0">
      <Tab eventKey="medicine" title="medicine" className='tabscon' transition={true}>
      <h1>medicine</h1>
        <div>
            <h4>{props.array.map((item) => {
              return (
                <ul>
                  <li><h4>generic name:{item.generic_name}</h4></li>
                  {/* <li><h4>medicine name:{item.medicineame}</h4></li> */}
                  <li><h4>labeler name:{item.labeler_name}</h4></li>
                  <li><h4>brand name:{item.brand_name}</h4></li>
                  <li><h4>dosage form:{item.dosage_form}</h4></li>
                </ul>
              )
            })}</h4>
        </div>
      </Tab>
      <Tab eventKey="function" title="function" className='tabscon'>
      <h1>function</h1>
        <div>
        <h4>{props.array.map((item) => {
              return (
                <ul>
                  <li><h4>marketing_category:{item.marketing_category}</h4></li>
                  <li><h4>Type:{item.product_type}</h4></li>
                  <li><h4>id:{item.product_id}</h4></li>
                  <li><h4>pharm class 1:{item.pharm_class}</h4></li>
                  {/* <li><h4>pharm class 2:{item.pharm_class}</h4></li>
                  <li><h4>pharm class 3:{item.pharm_class[2]}</h4></li>
                  <li><h4>pharm class 4:{item.pharm_class[3]}</h4></li> */}
                </ul>
              )
            })}</h4>
        </div>
      </Tab>
      <Tab eventKey="ingredients" title="ingredients" className='tabscon'>
      <h1>ingredients</h1>
        <div>
        <h4>{props.array.map((item) => {
              return (
                <ul>
                  <li><h4>ingredient name:{item.active_ingredients[0].name}</h4></li>
                  {/* <li><h4>strength:{item.active_ingredients[1].strength}</h4 ></li> */}
                </ul>
              )
            })}</h4>
        </div>
      </Tab>
    </Tabs>
  );
}

export default Tabswitch;