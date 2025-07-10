import React, { useState } from 'react'

const App = () => {
  const [day, changeDay] = useState(1)

  return (
    <div>
      <h1>Hello Gautam</h1>
      <h3>Today is Day {day}</h3>
      <button onClick={()=>{
        changeDay(day+1)
      }}>Change Day</button>
    </div>
  )
}

export default App