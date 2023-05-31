import Todo from '../models/Todo.js'

export const getAllTodos = async (req, res) => {
  try {
    // Retrieving all todos from the db
    const todos = await Todo.find({})
    res.status(200).json({ msg: 'all todos', todos })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const getSingleTodo = async (req, res) => {
  // Retrieve a specific todo by ID from the db
  try {
    const { id: todoID } = req.params
    const todo = await Todo.findOne({ _id: todoID })

    if (!todo) {
      return res.status(404).json({ msg: `no todo found with id ${todoID}` })
    }

    res.status(200).json({ todo })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const createTodo = async (req, res) => {
  try {
    // creating new document/todo
    const newTodo = await Todo.create(req.body)
    res.status(201).json({ message: 'todo added', newTodo })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

export const deleteTodo = async (req, res) => {
  // Delete a specific todo by ID from the Collection Todo
  try {
    const { id: todoID } = req.params
    const deletedTodo = await Todo.findOneAndDelete({ _id: todoID })

    if (!deletedTodo) {
      return res.status(404).json({ msg: `no todo found with id ${todoID}` })
    }

    res.status(200).json({ deletedTodo })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const updateTodo = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).json({ error: 'Error updating todo' })
  }
}
