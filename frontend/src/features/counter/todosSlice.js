import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    editing: false,
    index: -1,
    data: '',
    isSearch: false,
    todos: [],
    filterdTodos: [],
  },
  reducers: {
    checkSearch: (state, action) => {
      state.isSearch = action.payload
    },
    setTodos: (state, action) => {
      state.todos = action.payload
    },
    addTodo: (state, action) => {
      if (state.editing) {
        state.todos[state.index] = action.payload
      } else {
        state.todos = [...state.todos, action.payload]
      }
    },
    editIndex: (state, action) => {
      state.index = action.payload
    },

    editTodo: (state, action) => {
      return (state = {
        ...state,
        data: action.payload.data,
        editing: action.payload.editing,
      })
    },

    delTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item._id !== action.payload)
      console.log('del todo triggerd')
    },
    searchTodo: (state, action) => {
      state.filterdTodos = state.todos.filter((todo) =>
        todo.title.includes(action.payload)
      )
    },
  },
})

export const {
  editIndex,
  addTodo,
  setTodos,
  delTodo,
  editTodo,
  searchTodo,
  checkSearch,
} = todosSlice.actions
export default todosSlice.reducer
