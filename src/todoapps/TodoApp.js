import React from 'react';
import Header from './Header'; 
import TodoList from './TodoList'; 
import TodoControls from './TodoControls'; 


function TodoApp(){

  const defaultTodos = [
    "Read book" , "Binge Series"
  ]

  const [todos, setTodos] = React.useState(defaultTodos);
  const [value, setValue] = React.useState("");


  const addNewItem = newItem => {

    console.log(newItem.target.value);
    const newTodos = [...defaultTodos, value ]
    //setTodos(newTodos);

  }

  const addNewTodo = newTodo => {
    
    const newTodos2 = [...todos, newTodo ]
    setTodos(newTodos2);

  }

  return(
    <div>
        
        <Header></Header>  <br />

        <TodoList todos={todos}></TodoList>  <br />

        <TodoControls addNewTodo={addNewTodo}></TodoControls>

        
          <br/>  <br/>

        <input type="text" 
                onChange={e => setValue(e.target.value)}
        />

        <button type="submit" name="submit" value="submit"
              onClick={} >
        Add new todo button in parent page 
      </button>
    

      </div>
  )

}

export default TodoApp;