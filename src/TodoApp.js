import React from 'react';


function TodoApp(){

  const defaultTodos = [
    "Read book" , "Binge Series"
  ]

  const [todos, setTodos] = React.useState(defaultTodos);
  const [value, setValue] = React.useState("");


  const addNewItem = newItem => {

    console.log(newItem.target.value);
    const newTodos = [...defaultTodos, value ]
    setTodos(newTodos);

  }

  return(
    <div>
        Creating a new ToDo App  <br />

        <table style={{ width: '60%' }} className="table" border="1">
        <thead className="thead-light">
          <tr>
            <th>EmpID</th>            
          </tr>
        </thead>
        <tbody>
          {
          todos.map((employee) => {
            return (
              <tr key={1 + Math.random()}>
                <td>{employee}</td>              
              </tr>
            );
          })
          }
        </tbody>
      </table>

          <br/>  <br/>

        <input type="text" 
                onChange={e => setValue(e.target.value)}
        />

        <button type="submit" name="submit" value="submit"
              onClick={addNewItem} >
        Add new item
      </button>

      </div>
  )

}

export default TodoApp;