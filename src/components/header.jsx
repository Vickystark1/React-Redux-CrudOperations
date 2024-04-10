import React from 'react'
import { useSelector } from 'react-redux';

const header = () => {

    const tasklist = useSelector((state)=>state.task.tasksSlice)

  return (
    <div>
    <h1 className='text-center my-4 text-success'>React Redux Crud Operations</h1>
    <p className='text-center lead' >{`Currently ${tasklist.length} tasks pending`}</p>
    </div>
  )
}

export default header;
