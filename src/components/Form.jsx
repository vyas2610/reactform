import React from 'react'

const Form = () => {
  return (
    <div>
        <p>
            <input type='text' name='uname' id='uname' />
        </p>

        <p>
            <input type='password' name='upass' id='upass' />
        </p>

        <p>
            <button type='submit'>Login</button>
        </p>
    </div>
  )
}

export default Form
