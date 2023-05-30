import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Router from './components/Router/Router'
import { setTodos } from './features/counter/todosSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const todos = useSelector((s) => s.todos.todos)
  const dispatch = useDispatch()
  // const [todosMongo, setTodosMongo] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/todos')
      console.log(response.data)
      // setTodosMongo(response.data.todos)
      dispatch(setTodos(response.data.todos)) // Dispatch setTodos action
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    getData()
  }, [dispatch, todos])

  // if (todosMongo.length === 0) {
  //   // Render a loading state until todosMongo is populated
  //   return <div>Loading...</div>
  // }

  return (
    <div className='App'>
      <Router />
    </div>
  )
}

export default App
