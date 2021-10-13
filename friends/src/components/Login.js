import React,{ useState } from 'react'
import axios from 'axios'
const Login=()=>{
const initialFormValues={
    username: '',
    password:'',
    name: '',
    age: '',
    email: '',
  }

 const [formValues,setFormValues]=useState(initialFormValues)

 const handleInputChange=(e)=>{
     setFormValues({
         ...formValues,
        [e.target.name]:e.target.value
     })
 }
 const handleSubmitForm=(e)=>{
    e.preventDefault()
    // console.log('submitted button',formValues)
    axios.post('http://localhost:5000/api/login',formValues)
    .then(resp=>{localStorage.setItem("token",resp.data.payload)})
    .catch(err=>{console.log(err)})
 }
    return(
        <div>
            <form onSubmit={handleSubmitForm}>
                <input name='username' value={formValues.username} onChange={handleInputChange}></input>
                <input name='password' value={formValues.password} onChange={handleInputChange}></input>
                <button>Log In</button>
            </form>
        </div>
    )
}
export default Login