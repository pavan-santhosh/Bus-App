import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup() {

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username)
    axios.post('http://localhost:7000/register',{
        username,email,password
    }).then(
        res => {console.log(res)
        navigate('/login')
        }).catch(
        err => console.log(err)
    )
  }

  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label>
                <strong>Username: </strong>
            </label>
            <input
                type="text"
                placeholder='Enter username'
                name='username'
                autoComplete='off'
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div>
            <label>
            <strong>Email: </strong>
            </label>
            <input
                type="email"
                placeholder='Enter email'
                name='email'
                autoComplete='off'
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
            <label>
                <strong>Password: </strong>
            </label>
            <input
                type="password"
                placeholder='Enter password'
                name='password'
                autoComplete='off'
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type='Submit'>Signup</button>
        </form>
    </div>
  )
}

export default Signup