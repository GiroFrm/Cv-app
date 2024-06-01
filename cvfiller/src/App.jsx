import { useState } from 'react'
import PersonalInfo from './assets/components/PersonalInfo'
import Education from './assets/components/Education'
import './App.css'
import Experience from './assets/components/Experience'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PersonalInfo/>
     <Education/>
     <Experience/>
    </>
  )
}

export default App
