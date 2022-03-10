import React from "react";
import "./style.css";

class TodoApp_State extends React.Component { 

  constructor(props){
    super(props);

    this.state = {
      list: [
        {name : 'ABC'}
      ],
      newItem: ""
    };

  }

  handleInputItem = e => {
    console.log(e.target.value);
    this.setState({
        newItem : e.target.value
    })
  }

  handleSubmitClick = e =>{
    e.preventDefault();
    console.log("button clicked");

    this.setState({
      list: [
        {
          name: this.state.newItem,
        },
        ...this.state.list
      ],
      newItem: ""
    });

  }

  render() {
       

    return(<React.Fragment>

      <table style={{ width: '60%' }} className="table">
        <thead className="thead-light">
          <tr>
            <th>EmpID</th>            
          </tr>
        </thead>
        <tbody>
          {
          this.state.list.map((employee) => {
            return (
              <tr key={1 + Math.random()}>
                <td>{employee.name}</td>              
              </tr>
            );
          })
          }
        </tbody>
      </table>

      <input
        className="input"
        type="text"
        onChange={this.handleInputItem}
        value={this.state.newItem}
        placeholder="Add an item"
      />

      <button type="submit" name="submit" value="submit"
              onClick={this.handleSubmitClick} >
        Add new item
      </button>

      </React.Fragment>)
  }

}

export default TodoApp_State; 
