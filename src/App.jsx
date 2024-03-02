import React from 'react'
import './App.css'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { login, logout } from './redux/reducer/authSlice'
import { Header, Footer } from './component'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setLoading] = React.useState(true)
  const dispatch = useDispatch()
  React.useState(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        }
        else {
          dispatch(logout())
        }
      }).catch((error) => {
        throw error
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  if (!loading) {
    return <>
      <Header />
      <Outlet />
      <Footer />
    </>
  }
}

export default App
