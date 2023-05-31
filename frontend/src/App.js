import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import Router from './components/Router/Router'
import { useDispatch, useSelector } from 'react-redux'
import { ApiContext } from './features/apiContext/apiContext'

function App() {
  const { getData, isRefetch, delItem } = useContext(ApiContext)
  const dispatch = useDispatch()
  const todos = useSelector((s) => s.todos.todos)

  useEffect(() => {
    getData()
  }, [todos, delItem])

  return (
    <div className='App'>
      <Router getData={getData} />
    </div>
  )
}

export default App
