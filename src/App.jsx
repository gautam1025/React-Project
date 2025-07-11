import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(username)
    setUsername('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value)
        }

        }
        className='bg-white text-xl rounded px-3 py-4 m-5' 
        type='text'
        placeholder='Enter you name'
        ></input>
        <button className='text-xl px-3 py-4 m-5 bg-yellow-500 rounded'>Submit</button>
      </form>
    </div>
  )
}

export default App