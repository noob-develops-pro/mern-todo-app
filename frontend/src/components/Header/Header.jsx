import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import './header.css'
import { useNavigate } from 'react-router-dom'
import { showDashBoard } from '../../features/counter/userSlice'
import { ApiContext } from '../../features/apiContext/apiContext'

function Header() {
  const { getData, setIsRefetch } = useContext(ApiContext)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className='header'>
      {/* <img src={align} alt="" onClick={() => dispatch(showModal(true))} /> */}
      {/* <img src={fileManager} alt='' /> */}
      <button
        className='btn btn-logout'
        onClick={() => {
          setIsRefetch(true)
          getData()
          navigate('/')
          localStorage.clear()
          dispatch(showDashBoard(false))
        }}
      >
        Log out
      </button>
    </div>
  )
}

export default Header
