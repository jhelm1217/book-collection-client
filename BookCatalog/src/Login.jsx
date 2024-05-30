import { useContext } from "react"
import React, { useState } from 'react'
import { Link } from 'react'
import { AuthContext } from "./authContext"
import { getToken, createUser } from './api'


const CreateUser = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

    const submit = () => {
      createUser({ username, password, firstName, lastName })
    }

    return (
      <div className="p-5">
        <h1>Create User</h1>
        <div>
          <div>Username:</div>
          <input
            onChange={e => setUsername(e.target.value)}
            value= {username}
          />
        <div>Password:</div>
          <input
            onChange={e => setPassword(e.target.value)}
            value= {password}
          />
          <div>
        
          <div>First Name:</div>
          <input
            onChange={e => setFirstName(e.target.value)}
            value= {firstName}
          />
            <div>Last Name:</div>
          <input
            onChange={e => setLastName(e.target.value)}
            value= {lastName}
          />
        </div>


        <div style= {{ marginTop: 20 }}>
          <button onClick={() => submit()}>Submit</button>
          </div>

          <hr/>



        </div>
      </div>
    )
  }


function Login() {
  const { auth } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null);

  const submit = () => {
    getToken({ auth, username, password, setUser })
  }
 


  return (
    <div className="p-5">
      <h1>Login</h1>
      <div>
        <div>Username:</div>
        <input
          onChange={e => setUsername(e.target.value)}
          value= {username}
        />
      <div>Password:</div>
        <input
          onChange={e => setPassword(e.target.value)}
          value= {password}
        />
      </div>
      


      <div style= {{ marginTop: 20 }}>
        <button onClick={() => submit()}>Submit</button>
        </div>
        {user && (
        <div>
          <h2>Welcome, {user.first_name} {user.last_name}</h2>
          <p>Username: {user.username}</p>
        </div>
      )}

        <CreateUser user={user} />

  </div>
  )
}


export default Login

 
