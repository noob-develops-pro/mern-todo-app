import express from 'express'
import {
  createTodo,
  getAllTodos,
  getSingleTodo,
  updateTodo,
  deleteTodo,
} from '../../controllers/todos.js'
const router = express.Router()

// GET /api/v1/todos
router.get('/', getAllTodos)

// GET /api/v1/todos/:id
router.get('/:id', getSingleTodo)

// POST /api/v1/todos
router.post('/', createTodo)

// patch /api/v1/todos/:id
router.patch('/:id', updateTodo)

// DELETE /api/v1/todos/:id
router.delete('/:id', deleteTodo)

export default router
