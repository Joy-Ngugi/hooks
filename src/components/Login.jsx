import React from 'react'
import { useState } from 'react'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const correctUsername = 'Joy Ngugi'
    const correctPassword ='2222'

    const handleLogin = (e) =>{
         e.preventDefault(); //prevent form submission

        if (username ===correctUsername && password===correctPassword){
            setError('');
            alert('login successful!');
        } else{
            setError('Incorrect username or password');
        }
    };
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin} >
         <div>
            <label>Username: </label>
            <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} required />
         </div>
         <div>
            <label>Password: </label>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
         </div>
         <button type="submit">Login</button>
        </form>
       {/* <p>Name: {username}</p>
       <p>Password: {password}</p> */}
        {error && <p style={{ color: 'red' }}>{error}</p>}  
    </div>
  )
}

export default Login