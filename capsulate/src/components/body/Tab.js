import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from 'react';
import NavScrollExample from './../navbar/Nav'
import './tab.css'


function Tabswitch() {
    NavScrollExample()
  return (
    <Tabs defaultActiveKey="profile"id="uncontrolled-tab-example"className="mt-5 mb-0">
      <div class="tab_container">
      <Tab eventKey="medicine" title="medicine">
      <h1>medicine</h1>
        <div>
            
        </div>
      </Tab>
      <Tab eventKey="function" title="function">
      <h1>function</h1>
      <div>
            
        </div>
      </Tab>
      <Tab eventKey="ingredients" title="ingredients">
      <h1>ingredients</h1>
      <div>
          
        </div>
      </Tab>
      </div>
    </Tabs>
  );
}

export default Tabswitch;