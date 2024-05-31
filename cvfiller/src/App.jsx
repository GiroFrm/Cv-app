import { useState } from 'react'
import PersonalInfo from './assets/components/PersonalInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PersonalInfo/>
    </>
  )
}

export default App
