import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addTaskToList } from '../slice/tasksSlice';

const AddTask = () => {

    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');

    const dispatch = useDispatch();
    const titles= title.trim();
    console.log("titles",titles);
    
    const addTask=(e)=>{
        e.preventDefault();
        console.log({title,description});
        if(title!==""&&description!==""){

            dispatch(addTaskToList({title,description}))
            setTitle("");
            setDescription("")
        }
    };

   

    
  return (
    <>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Name</Form.Label>
        <Form.Control type="text" placeholder="Task Name" value={title} onChange={(e)=>setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text" placeholder="Task Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
      </Form.Group>
      <div className='text-end'>
      <Button variant="primary" type="submit" onClick={(e)=>addTask(e)}>
        Add Task
      </Button>
      </div>
    </Form>
    

     
    </>
  )
}

export default AddTask;
