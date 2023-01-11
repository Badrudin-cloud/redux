import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/userSlice'




function Login() {

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => {
      dispatch(login({name: "Badrudin", age: 23, email: "Badrudin@gmail.com"}))

    }}>Login</button>
      <button onClick={() => {
      dispatch(logout())

    }}>Logout</button>
    </div>
  )
}

export default Login