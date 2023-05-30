import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    // maxlength: [25, 'title can not be more than 25 charectors'],
  },
  description: {
    type: String,
    default: 'new note',
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo
