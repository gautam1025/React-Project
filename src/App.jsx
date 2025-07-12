import React from 'react'

const App = () => {
  return (
    <div>
      <>
        <nav className='bg-blue-900 flex px-10 py-5 items-center justify-between'>
          <h2 className='text-2xl'>Gautam Gupta</h2>
          <div className='flex gap-10 items-center'>
            <h4 className='text-xl'>Your Account</h4>
            <h4 className='text-xl'>Services</h4>
            <h4 className='text-xl'>Contact</h4>
            <h4 className='text-xl'>About</h4>
          </div>
        </nav>
      </>
    </div> 
  )
}

export default App