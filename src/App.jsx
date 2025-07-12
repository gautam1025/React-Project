import React from 'react'
import Card from './Components/Card'


const App = () => {

  const users = [
  {
    "name": "Aarav Mehta",
    "city": "Mumbai",
    "age": 28,
    "profession": "Software Engineer",
    "profile_photo": "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    "name": "Sneha Sharma",
    "city": "Delhi",
    "age": 24,
    "profession": "Graphic Designer",
    "profile_photo": "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    "name": "Rohan Verma",
    "city": "Bangalore",
    "age": 31,
    "profession": "Product Manager",
    "profile_photo": "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    "name": "Priya Nair",
    "city": "Chennai",
    "age": 26,
    "profession": "Data Analyst",
    "profile_photo": "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    "name": "Kunal Joshi",
    "city": "Pune",
    "age": 29,
    "profession": "Digital Marketer",
    "profile_photo": "https://randomuser.me/api/portraits/men/54.jpg"
  }
  ]

 
  return (
    <div>
      <div className='p-10'>
        {users.map(function(elem,idx){
          return <Card key={idx}
          username={elem.name}
          age={elem.age}
          city = {elem.city}
          photo = {elem.profile_photo}
          profession = {elem.profession}
          />
        })}
      </div>
    </div>
  )
}

export default App