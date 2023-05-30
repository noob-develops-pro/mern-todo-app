import User from '../models/User.js'

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    // Check if the user with the given email already exists
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res
        .status(409)
        .json({ error: 'User with this email already exists' })
    }

    // Create a new user instance
    const newUser = await User.create({ email, password })

    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' })
  }
}

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    // Find the user by email
    const user = await User.findOne({ email })

    // Check if user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    // Check if the password matches
    const isPasswordValid = await user.comparePassword(password)

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' })
    }

    // TODO: Generate and send a JWT token for authentication

    res.json({ message: 'User logged in successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Error logging in user' })
  }
}

export default loginUser

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving users' })
  }
}
