import React from 'react';

function TodoControls ({addNewTodo}) {

  const [newtodo, setNewtodo] = React.useState("");

  //let newtodo2 = "";

  const handleSubmit = e => {
    e.preventDefault();
    //if (!value) return;
    console.log('adding new todo')
    addNewTodo(newtodo2);
    //setValue("");
  };

  return (

    <div>

    <input type="text" 
                onChange={e => setNewtodo(e.target.value) }
        />

    <button type="submit" name="submit2" value="submit2"
      onClick={handleSubmit}>
        Add new todo
      </button>

      </div>
        
  );
};

export default TodoControls;
