import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get("/api/jokes")
      .then((response) => {
        console.log(response.data)
        setJokes(response.data)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [])

  return (
    <>
      <h1>Chai aur Code ☕</h1>

      <p>Number of jokes are {jokes.length}</p>

      {jokes.length === 0 && <p>Loading...</p>}

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.setup}</h3>
            <p>{joke.punchline}</p>
            <hr />
          </div>
        ))
      }
    </>
  )
}

export default App