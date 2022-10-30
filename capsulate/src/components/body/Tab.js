import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from 'react';

function Tabswitch() {
  return (
    <Tabs defaultActiveKey="profile"id="uncontrolled-tab-example"className="mb-3">
      <Tab eventKey="home" title="Home">
        
      </Tab>
      <Tab eventKey="profile" title="Profile">
      
      </Tab>
      <Tab eventKey="contact" title="Contact" >
      </Tab>
    </Tabs>
  );
}

export default Tabswitch;