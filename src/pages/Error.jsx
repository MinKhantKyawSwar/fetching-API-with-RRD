import React from 'react'
import { useNavigate } from 'react-router-dom'


const Error = () => {
    const navigate = useNavigate();
    const goBackHandler = () => {
        navigate("/")
}
  return (
    <div className='error-msg'>
        <h2>The page you're finding does not exist!</h2> <br/>
        <p>Please go back to <button onClick={goBackHandler} className='go-back'>Home</button>&nbsp; page.</p>
    </div>
  )
}

export default Error