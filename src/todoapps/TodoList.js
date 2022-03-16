import React from 'react';
import Header from './Header'; 

const TodoList = ({todos}) => {

  return(

    <table style={{ width: '60%' }} className="table" border="1">
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
      </table>

  );

}

export default TodoList;