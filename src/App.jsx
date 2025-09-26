import { useState } from 'react'
import './App.css'
import { ToDo } from './Components/ToDo'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './Components/LogIn'

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    
      <div className='ablak'>
        {isLoggedIn ? <ToDo setIsLoggedIn={setIsLoggedIn}/> : <Login setIsLoggedIn={setIsLoggedIn}/>}
      </div>
      
  )
}

export default App
