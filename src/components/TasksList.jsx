import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from "./updateTask";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTask } from "../slice/tasksSlice";
import { removeFromList } from "../slice/tasksSlice";
const TasksList = () => {
  const tasklist = useSelector((state) => state.task.tasksSlice);
    const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  const updateTask = (task) => {
    console.log("updated");
    setModalShow(true);
    dispatch(setSelectedTask(task))
  };

  const deleteTask = (task) => {
    console.log("deleted");
    dispatch(removeFromList(task))
  };

  return (
    <div>
      <Table striped bordered hover className="my-3">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasklist.length
            ? tasklist.map((task,index) => {
                return <>
                  <tr className="text-center" key={task.id}>
                    <td>{index+1}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>
                      <Button variant="primary" className="mx-2 my-1" onClick={() => updateTask(task)}>
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                      <Button variant="danger" onClick={() => deleteTask(task)}>
                        <i className="bi bi-trash3"></i>
                      </Button>
                    </td>
                  </tr>
                </>
              })
            : null}
        </tbody>
      </Table>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default TasksList;
