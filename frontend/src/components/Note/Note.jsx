import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, delTodo, editTodo } from '../../features/counter/todosSlice'

import './note.css'
import edit from '../../imgages/edit.png'
import del from '../../imgages/delete.png'
import { showModal } from '../../features/counter/modalSlice'
import axios from 'axios'

function Note({ _id: id, title, createdAt, todo, date, time }) {
  console.log(title, id)
  const editing = useSelector((s) => s.todos.editing)
  const data = useSelector((s) => s.todos.data)

  const dispatch = useDispatch()
  const noteRef = useRef()

  const note = {
    id,
    todo,
    date,
    time,
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/todos/${id}`)
    } catch (error) {
      console.error(error)
    }
    dispatch(delTodo(id))
  }

  const editHandler = (id) => {
    dispatch(showModal(true))
    dispatch(editTodo({ data: note, editing: true }))
  }
  return (
    <div className='note'>
      <div className='left'>
        <p className='text' ref={noteRef}>
          {/* {todo} */}
          {title}
        </p>
        <span className='date'>
          dated {date} at {time}
        </span>
      </div>
      <div className='right'>
        <img src={edit} alt='edit' onClick={() => editHandler(id)} />
        <img src={del} alt='delete' onClick={() => handleDelete(id)} />
      </div>
    </div>
  )
}

export default Note
