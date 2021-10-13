import React,{ useState } from 'react'
import axios from 'axios'
const Login=(props)=>{
    const initialFormValues={
        username: '',
        password:'',
        name: '',
        age: '',
        email: '',
    }

    const [formValues,setFormValues]=useState(initialFormValues)
    const [isLoading,setIsLoading]=useState(false)
    const handleInputChange=(e)=>{
       
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmitForm=(e)=>{
        e.preventDefault()
        // console.log('submitted button',formValues)
        setIsLoading(true)
        // if(!localStorage.getItem('token')){setIsLoading(true)}
        axios.post('http://localhost:5000/api/login',formValues)
        .then(resp=>{
            localStorage.setItem("token",resp.data.payload);
            setIsLoading(false);
            props.history.push('/friendlist')

        })
        .catch(err=>{console.log(err)})
    }
        return(
            <div>
                {isLoading ? <h2>loading log in</h2>:<h2>log in form</h2>}
                <form onSubmit={handleSubmitForm}>
                    <input name='username' value={formValues.username} onChange={handleInputChange}></input>
                    <input name='password' value={formValues.password} onChange={handleInputChange}></input>
                    <button>Log In</button>
                </form>
            </div>
        )
}
export default Login