import React from 'react'

const App = () => {


  return (
    <div>
      <form>
        <input
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