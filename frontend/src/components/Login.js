import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:7000/login',{
        email,password
    }).then(
        res => {
            if(res.data==="Success")
            navigate('/')
        }).catch(
        err => console.log(err)
    )
  }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label>
                <strong>Email id: </strong>
            </label>
            <input
                type="text"
                placeholder='Enter email-id'
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
        <button type='Submit'>Login</button>
        </form>
    </div>
  
  )
}

export default Login