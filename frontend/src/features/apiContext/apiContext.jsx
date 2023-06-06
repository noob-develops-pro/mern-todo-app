import React, { createContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setTodos } from '../counter/todosSlice'
import axios from 'axios'

const ApiContext = createContext()

const AppProvider = ({ children }) => {
  const dispatch = useDispatch()
  const [isRefetch, setIsRefetch] = useState(true)

  const getData = async () => {
    try {
      if (isRefetch) {
        const response = await axios.get('http://localhost:5000/api/v1/todos')
        console.log('data fethed')
        dispatch(setTodos(response.data.todos)) // Dispatch setTodos action
      }
      setIsRefetch(false)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const createItem = async (val) => {
    try {
      await axios.post('http://localhost:5000/api/v1/todos', {
        title: val,
        description: 'xyz',
      })
      console.log('item added', 'creteItem')
      console.log(isRefetch)
      setIsRefetch(true)
      getData()
    } catch (error) {
      console.error(error)
    }
  }

  const delItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/todos/${id}`)
      setIsRefetch(true)
      getData()
      console.log('item created and new data fetched')
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  const editItem = async (id, newValue) => {
    console.log(id, newValue, 'in Edit')
    try {
      await axios.patch(`http://localhost:5000/api/v1/todos/${id}`, {
        title: newValue,
      })
      setIsRefetch(true)
      getData()
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <ApiContext.Provider
      value={{
        createItem,
        delItem,
        editItem,
        getData,
        isRefetch,
        setIsRefetch,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

export { ApiContext, AppProvider }
