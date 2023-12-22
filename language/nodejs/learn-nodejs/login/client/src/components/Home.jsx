import React, { useEffect, useState } from 'react'
import axios from 'axios'



function Home() {
  const [joke, setJoke] = useState([]);
  
  useEffect(()=>{
    axios.get('/api/jokes').then((response)=>{setJoke(response.data)}).catch((error)=>{console.log(error)});
  })
  return (
    <div>
      <h1>Pranav jokes</h1>
      <p>Jokes : {joke.length}</p>
      {
        joke.map((joke,index)=>{
          return(
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>
                <h4>{joke.Que}</h4>
                <p>Answer = {joke.Ans}</p>
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home