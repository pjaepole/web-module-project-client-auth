import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';
const initialFormValues={
    name: '',
    age: '',
    email: '',
}
const FriendsList=(props)=>{
    const [friends,setFriends]=useState([]);
    const [formValues, setFormValues]=useState(initialFormValues)

    const handleInputChange=(e)=>{
       
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmitForm=(e)=>{
        e.preventDefault() 
        axiosWithAuth().post('http://localhost:5000/api/friends',formValues)
        .then(resp=>{
            
        })
        .catch(err=>{console.log(err)})
    }


    useEffect(()=>{
        axiosWithAuth().get("http://localhost:5000/api/friends")
        .then(resp=>{
            setFriends(resp.data)
        })
        .catch(err=>{console.log('friendlist axios call',err)})
    },[friends])
    return(
        <div>
            <h3>Add New Friend</h3>
            <form onSubmit={handleSubmitForm}>
                <input name="name"  onChange={handleInputChange} value={formValues.name}/>
                <input name="age" onChange={handleInputChange} value={formValues.age}/>
                <input name="email" onChange={handleInputChange} value={formValues.email}/>
                <button>add new friend</button>
            </form>
            <h3>this is friend list components</h3>
            {friends.map(friend=>{
                return <div key={friend.id}>
                    <h3>{friend.name}</h3>
                    <h4>{friend.age}</h4>
                </div>
            })}
        </div>
    )
}

export default FriendsList