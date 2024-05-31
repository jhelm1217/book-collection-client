import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import App from './App'
import Login from './Login'
import ErrorPage from './ErrorPage'
import Header from './Header'
import Footer from './Footer'
import BookList from './BookList'
import Profile from './Profile'

import { AuthContext } from './authContext'
import { UserContext } from './userContext'

function Layout() {
  return (
    <>
      <Header />
      <div id='page-content'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/booklist',
        element: <BookList />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  }
])

const AuthContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState([])

  const auth = {
    accessToken,
    setAccessToken
  }

  return(
    <AuthContext.Provider value= {{ auth }}>
      {children}
    </AuthContext.Provider>
  )
}

const UserContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState([])

  const user = {
    firstName,
    setFirstName
  }

  return(
    <UserContext.Provider value= {{ user }}>
      {children}
    </UserContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(

<UserContextProvider>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
</UserContextProvider>
)


// TODO - create userContext file
// - import here
// - create UserContextProvider
// - Wrap the AuthContextProvder and the RouterProvider in it.  
// - now any variables you are tracking with the userContext can be accessed anywhere