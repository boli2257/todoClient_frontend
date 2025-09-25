import { useState } from 'react'
import './App.css'
import { ToDo } from './Components/ToDo'

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    
      <div>
        {isLoggedIn &&  <ToDo/>}
      </div>
      
  )
}

export default App
