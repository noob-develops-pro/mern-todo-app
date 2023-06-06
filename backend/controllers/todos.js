import asyncWrapper from '../middleware/asyncWrapper.js'
import Todo from '../models/Todo.js'

export const getAllTodos = asyncWrapper(async (req, res) => {
  // Retrieving all todos from the db
  const todos = await Todo.find({})
  res.status(200).json({ msg: 'all todos', todos })
})

export const getSingleTodo = asyncWrapper(async (req, res) => {
  // Retrieve a specific todo by ID from the db
  const { id: todoID } = req.params
  const todo = await Todo.findOne({ _id: todoID })

  if (!todo) {
    return res.status(404).json({ msg: `no todo found with id ${todoID}` })
  }

  res.status(200).json({ todo })
})

export const createTodo = asyncWrapper(async (req, res) => {
  // creating new document/todo
  const newTodo = await Todo.create(req.body)
  res.status(201).json({ message: 'todo added', newTodo })
})

export const deleteTodo = asyncWrapper(async (req, res) => {
  // Delete a specific todo by ID from the Collection Todo

  const { id: todoID } = req.params
  const deletedTodo = await Todo.findOneAndDelete({ _id: todoID })

  if (!deletedTodo) {
    return res.status(404).json({ msg: `no todo found with id ${todoID}` })
  }

  res.status(200).json({ deletedTodo })
})

export const updateTodo = asyncWrapper(async (req, res) => {
  const { id: todoID } = req.params
  const newData = req.body

  // Find the todo by ID and update it with the new data
  const updatedTodo = await Todo.findOneAndUpdate(
    { _id: todoID },
    { $set: { title: newData.title } }
  )

  //return early if required todo not found in db
  if (!updatedTodo) {
    return res.status(404).json({ error: 'Todo not found' })
  }

  return res.json({ msg: 'success', task: updatedTodo })
})
