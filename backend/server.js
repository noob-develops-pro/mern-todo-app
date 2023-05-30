import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './db/connect.js'
import todosRouter from './routes/api/todos.js'
import authRouter from './routes/api/auth.js'

const app = express()
app.use(express.json())
dotenv.config()
app.use(cors('*'))

app.get('/', (req, res) => {
  res.send('Welcome Home')
})

app.use('/api/v1/todos', todosRouter)
app.use('/api/v1/auth', authRouter)

//404 route
app.all('*', (req, res) => {
  res.status(404).send('404 not found --')
})

const PORT = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(5000, (req, res) => {
      console.log(`server is listing on PORT ${PORT} ..`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
