import React from "react";
import "./style.css";

class AppBasicsV3 extends React.Component { 
  render() {
    let name = {
      firstName: 'John',
      lastName: 'Smith'
    }
    let count = 10;

  return(<React.Fragment>
      <h1>Hello {name.firstName}, {name.lastName}</h1> 
      <p> Your count is {count} </p>
      </React.Fragment>)
  }
}

export default AppBasicsV3; 
