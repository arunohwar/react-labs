import React from 'react';

import Table from 'react-bootstrap/Table';

const TodoList = ({todos}) => {

  return(

    <Table striped bordered hover responsive style={{ width: '42.1%' }} >
        <thead className="thead-light">
          <tr>
            <th>Todo List</th>            
          </tr>
        </thead>
        <tbody>
          {
          todos.map((singletodo) => {
            return (
              <tr key={1 + Math.random()}>
                <td>{singletodo}</td>              
              </tr>
            );
          })
          }
        </tbody>
      </Table>

  );

}

export default TodoList;