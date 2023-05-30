import React, { useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateUser } from '../../features/counter/userSlice'
import './login.css'

const initialLogin = {
  userName: '',
  password: '',
}

function SignUP() {
  const navigate = useNavigate()
  const [user, setState] = useState(initialLogin)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setState({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = 'http://localhost:5000/api/v1/auth/register'
    if (user.userName && user.password) {
      const userDetail = { username: user.userName, password: user.password }

      const details = {
        email: userDetail.username,
        password: userDetail.password,
      }
      // console.log(details)

      try {
        await axios.post(url, details)
        // console.log(data)
      } catch (error) {
        // Handle any error that occurred during the request
        console.error(error)
      }

      localStorage.setItem('user', JSON.stringify(userDetail))
      console.log('user set to local storage ')
      setState(initialLogin)
      alert('you can login now')
      navigate('/')
    } else {
      alert('please enter values')
    }
  }

  return (
    <div className='login'>
      <h4>sign UP / Register</h4>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={user.userName}
          onChange={(e) => handleChange(e)}
          name='userName'
          id='userName'
          placeholder='User Name'
        />

        <input
          type='password'
          value={user.password}
          onChange={(e) => handleChange(e)}
          name='password'
          id='password'
          placeholder='password'
        />
        <button className='btn btn-login'>Register</button>
      </form>
    </div>
  )
}

export default SignUP
