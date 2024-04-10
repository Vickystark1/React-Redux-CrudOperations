import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { upadteTaskInList } from '../slice/tasksSlice';

const MyVerticallyCenteredModal = (props) => {

    const {selectedTask}= useSelector((state)=>state.task)
    const dispatch = useDispatch();
    const updateTask=()=>{
        dispatch(upadteTaskInList({title,description,id}));
        props.onHide()
    };

    useEffect(()=>{
        if(Object.keys(selectedTask.length!==0)){

            setTitle(selectedTask.title);
            setDescription(selectedTask.description);
            setId(selectedTask.id)
        }
    },[selectedTask])

    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[id,setId]=useState(0)

  return (
    <div>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Title</Form.Label>
        <Form.Control type="text" placeholder="Task Name" value={title} onChange={(e)=>setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text" placeholder="Task Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
      </Form.Group>
      <div className='text-end'>
      
      </div>
    </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="success" type="submit" onClick={()=>updateTask()}>
        Update Task
      </Button>
        
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default MyVerticallyCenteredModal;
