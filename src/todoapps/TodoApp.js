import React from 'react';
import Header from './Header'; 
import TodoList from './TodoList'; 
import TodoControls from './TodoControls'; 
import Container from 'react-bootstrap/Container';
import "./../style.css";


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

    <Container>
    <div class="center-screen">
        
        <br></br> <br></br>
        <Header></Header>  

        <TodoList todos={todos}></TodoList>  <br />

        <TodoControls addNewTodo={addNewTodo}></TodoControls>

      </div>

      </Container>
  )

}

export default TodoApp;