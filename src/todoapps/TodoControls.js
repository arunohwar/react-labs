import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

import "bootstrap/dist/css/bootstrap.min.css";


function TodoControls ({addNewTodo}) {

  const [newtodo, setNewtodo] = React.useState("");

  //let newtodo2 = "";

  const handleSubmit = e => {
    e.preventDefault();
    //if (!value) return;
    console.log('adding new todo')
    addNewTodo(newtodo);
    //setValue("");
  };

  return (

    <div >

      <Stack direction="horizontal" gap={2} className="col-md-5">
        <Form.Control  placeholder="Add your new TODO here..." 
            onChange={e => setNewtodo(e.target.value) } />

        <Button variant="primary" type="submit" value="Submit"
            onClick={handleSubmit} >Submit</Button>        
        <div className="vr" />
        <Button variant="outline-danger">Reset</Button>
      </Stack>

   

    </div>
        
  );
};

export default TodoControls;
