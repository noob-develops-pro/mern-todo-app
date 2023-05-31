import React, { useRef, useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, delTodo, editTodo } from '../../features/counter/todosSlice'

import './note.css'
import edit from '../../imgages/edit.png'
import del from '../../imgages/delete.png'
import { showModal } from '../../features/counter/modalSlice'
import { ApiContext } from '../../features/apiContext/apiContext'

function Note({ _id: id, title, createdAt, todo, date, time }) {
  const editing = useSelector((s) => s.todos.editing)
  const data = useSelector((s) => s.todos.data)
  const { getData, setIsRefetch, delItem } = useContext(ApiContext)

  const dispatch = useDispatch()
  const noteRef = useRef()

  const note = {
    id,
    title,
    date,
    time,
  }
  const handleDelete = (id) => {
    dispatch(delTodo(id))
    delItem(id)
  }

  const handleEdit = (id) => {
    console.log('edit called', id)
    dispatch(showModal(true))
    console.log(note, 'in Edit')
    dispatch(editTodo({ data: note, editing: true }))
  }
  return (
    <div className='note'>
      <div className='left'>
        <p className='text' ref={noteRef}>
          {title}
        </p>
        {createdAt && <span className='date'>{createdAt}</span>}
        <span className='date'>
          dated {date} at {time}
        </span>
      </div>
      <div className='right'>
        <img src={edit} alt='edit' onClick={() => handleEdit(id)} />
        <img src={del} alt='delete' onClick={() => handleDelete(id)} />
      </div>
    </div>
  )
}

export default Note
