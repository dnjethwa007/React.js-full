import { useState , useContext } from "react"
import UserContext from "../context/UserContext"

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setuser}=useContext(UserContext)
    const handleSubmit= (e)=>{
        e.preventDefault();
        setuser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder="Enter Username"
        value={username}
        onChange={(e)=>setusername(e.target.value)} />
        <br />
        <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setpassword(e.target.value)} />
        <br />
        <button type="Submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login