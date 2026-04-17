import React, { useState } from 'react'
import { Button } from '@mui/material'

const Form = () => {
const [uname,setUname] = useState("");
const [upass,setUpass] = useState("");

    const HandleSubmit =(e) => {
        
        e.preventDefault();
        const data =[{
            name : uname,
            pass : upass
        }]

        console.log(data);
    }
  return (
    <div>
        <form onSubmit={HandleSubmit}>
        <p>
            <input type='text' name='uname' id='uname' value={uname} onChange={(e)=> {setUname(e.target.value)}}/>
        </p>

        <p>
            <input type='password' name='upass' id='upass'value={upass} onChange={(e)=> {setUpass(e.target.value)}}/>
        </p>

        <p>
            <button  type="submit">Login</button>
        </p>
        
    </form>

    </div>
  )
}

export default Form
